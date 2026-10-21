let currentCategory = "";
let questionCount = 0;
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let reviewData = [];

// Audio State Variables
let synth = window.speechSynthesis;
let isPlaying = false;
const MAX_PLAYS = 2;

const homeView = document.getElementById("home-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");
const btnStart = document.getElementById("btn-start");

// --- MENU LOGIC ---
function selectCategory(category, element) {
    currentCategory = category;
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    checkReady();
}

function selectCount(count, element) {
    questionCount = count;
    document.querySelectorAll('.count-btn').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    checkReady();
}

function checkReady() {
    if (currentCategory && questionCount > 0) {
        btnStart.disabled = false;
    }
}

// --- QUIZ LOGIC ---
function startQuiz() {
    let rawData = [];
    try {
        if (currentCategory === "hyogen") rawData = hyogenData;
        else if (currentCategory === "bunpou") rawData = bunpouData;
        else if (currentCategory === "kanji") rawData = kanjiData;
        else if (currentCategory === "kotoba") rawData = kotobaData;
        else if (currentCategory === "listening") rawData = listeningData;
    } catch (e) {
        alert("Error: File data soal tidak ditemukan atau rusak. Periksa folder 'soal'.");
        return;
    }

    if (!rawData || rawData.length === 0) {
        alert("Error: Data soal kosong.");
        return;
    }

    let finalCount = Math.min(questionCount, rawData.length);
    let shuffledData = shuffleArray([...rawData]);
    quizQuestions = shuffledData.slice(0, finalCount);

    // TAMBAHAN: Inisialisasi hitungan putar audio untuk setiap soal
    quizQuestions.forEach(q => {
        q.audioPlayCount = 0; 
    });

    currentIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    reviewData = [];

    switchView(homeView, quizView);
    renderQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- AUDIO LOGIC (MULTI-SPEAKER & PER-SOAL LIMIT) ---
function playListeningAudio(index) {
    const q = quizQuestions[index];
    
    // Cek apakah sedang memutar ATAU limit soal ini sudah habis
    if (isPlaying || q.audioPlayCount >= MAX_PLAYS) return;

    isPlaying = true;
    const btn = document.getElementById("btn-audio");
    btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Memutar...`;
    btn.classList.add("playing");

    try { synth.cancel(); } catch(e) {}

    const audioData = q.audioText;
    const utterances = [];

    // Cek apakah formatnya Array (dialog) atau String (single text)
    let processData = Array.isArray(audioData) ? audioData : [{voice: 'female', text: audioData}];

    // Buat array utterance
    processData.forEach((item) => {
        const utterance = new SpeechSynthesisUtterance(item.text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9; 
        
        // Membedakan suara: Laki-laki (berat), Perempuan (ringan)
        if (item.voice === 'male') {
            utterance.pitch = 0.6;
        } else {
            utterance.pitch = 1.3;
        }
        utterances.push(utterance);
    });

    // Fungsi untuk memutar antrean
    let currentUtteranceIndex = 0;

    const playNext = () => {
        if (currentUtteranceIndex < utterances.length) {
            const currentUtterance = utterances[currentUtteranceIndex];
            
            currentUtterance.onend = () => {
                currentUtteranceIndex++;
                playNext();
            };

            currentUtterance.onerror = (e) => {
                console.error("Audio error:", e);
                isPlaying = false;
                btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Gagal Memutar`;
                btn.classList.remove("playing");
            };

            synth.speak(currentUtterance);
        } else {
            // Semua kalimat selesai diputar
            isPlaying = false;
            
            // TAMBAHAN: Tambah hitungan putar di object soal, bukan variabel global
            q.audioPlayCount++; 
            
            if (q.audioPlayCount >= MAX_PLAYS) {
                btn.innerHTML = `<i class="fa-solid fa-ban"></i> Batas Maksimal`;
                btn.disabled = true;
                btn.classList.remove("playing");
            } else {
                btn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> Putar (Sisa 1x)`;
                btn.classList.remove("playing");
            }
        }
    };

    playNext();
}

// --- RENDER LOGIC ---
function renderQuestion() {
    try { if(synth) synth.cancel(); } catch(e) {}
    isPlaying = false; 
    // Catatan: playCount tidak lagi di-reset di sini, karena status disimpan di masing-masing objek soal

    const q = quizQuestions[currentIndex];
    const qContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    if (!q || !qContainer || !optionsContainer) {
        qContainer.innerHTML = "<p style='color:red; text-align:center;'>Gagal memuat soal. Cek Console (F12) untuk detail.</p>";
        return;
    }
    
    // Update Progress
    document.getElementById("current-q").innerText = currentIndex + 1;
    document.getElementById("total-q").innerText = quizQuestions.length;
    document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

    // Render Soal
    qContainer.innerHTML = ""; 
    
    if (currentCategory === "hyogen") {
        qContainer.innerHTML = formatChatBubbles(q.question);
    } else if (currentCategory === "bunpou") {
        let formattedQuestion = q.question.replace(/＿＿＿/g, '<span>____</span>');
        qContainer.innerHTML = `<div class="bunpou-container"><div class="bunpou-text">${formattedQuestion}</div></div>`;
    } else if (currentCategory === "kanji") {
        qContainer.innerHTML = `<div class="prompt-box"><div class="prompt-text kanji-large">${q.question}</div></div>`;
    } else if (currentCategory === "listening") {
        
        // TAMBAHAN: Cek status tombol berdasarkan hitungan yang tersimpan di soal
        let audioBtnHtml = "";
        if (q.audioPlayCount >= MAX_PLAYS) {
            audioBtnHtml = `<button id="btn-audio" class="audio-btn" disabled><i class="fa-solid fa-ban"></i> Batas Maksimal</button>`;
        } else if (q.audioPlayCount === 1) {
            audioBtnHtml = `<button id="btn-audio" class="audio-btn" onclick="playListeningAudio(${currentIndex})"><i class="fa-solid fa-rotate-right"></i> Putar (Sisa 1x)</button>`;
        } else {
            audioBtnHtml = `<button id="btn-audio" class="audio-btn" onclick="playListeningAudio(${currentIndex})"><i class="fa-solid fa-play"></i> Putar Audio (2x)</button>`;
        }

        qContainer.innerHTML = `
            <div class="listening-container">
                ${audioBtnHtml}
                <div class="listening-text">${q.question}</div>
            </div>
        `;
    } else {
        qContainer.innerHTML = `<div class="prompt-box"><div class="prompt-text">${q.question}</div></div>`;
    }

    // Render Opsi
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        if (userAnswers[currentIndex] === index) btn.classList.add("selected");

        btn.innerHTML = `
            <div class="circle-check"><i class="fa-solid fa-check"></i></div>
            <span>${opt}</span>
        `;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    // Navigasi
    document.getElementById("btn-prev").disabled = currentIndex === 0;
    const btnNext = document.getElementById("btn-next");
    
    if (currentIndex === quizQuestions.length - 1) {
        btnNext.innerHTML = `Selesai <i class="fa-solid fa-flag-checkered"></i>`;
        btnNext.onclick = finishQuiz;
    } else {
        btnNext.innerHTML = `Lanjut <i class="fa-solid fa-chevron-right"></i>`;
        btnNext.onclick = nextQuestion;
    }
}

function formatChatBubbles(questionString) {
    if (!questionString) return "";
    const parts = questionString.split(/([AB])[：:]\s*/).filter(p => p.trim() !== "");
    if (parts.length < 2 || (parts[0] !== "A" && parts[0] !== "B")) {
        return `<div class="prompt-box"><div class="prompt-text">${questionString}</div></div>`;
    }
    let html = "";
    for (let i = 0; i < parts.length; i += 2) {
        const speaker = parts[i];
        const text = parts[i + 1] || "";
        if (speaker === "A") {
            html += `<div class="chat-row left"><div class="chat-avatar"><i class="fa-solid fa-user"></i></div><div class="chat-bubble">${text}</div></div>`;
        } else if (speaker === "B") {
            html += `<div class="chat-row right"><div class="chat-avatar"><i class="fa-solid fa-user-tie"></i></div><div class="chat-bubble">${text}</div></div>`;
        }
    }
    return html;
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
        if (idx === index) btn.classList.add("selected");
        else btn.classList.remove("selected");
    });
}

function nextQuestion() {
    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

// --- RESULT LOGIC ---
function finishQuiz() {
    try { if(synth) synth.cancel(); } catch(e) {}
    let score = 0;
    reviewData = [];

    quizQuestions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.answer;
        if (isCorrect) score++;

        reviewData.push({
            question: q.question,
            options: q.options,
            userAnswer: userAnswers[index],
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            audioText: q.audioText || null
        });
    });

    switchView(quizView, resultView);
    document.getElementById("score-text").innerText = score;
    document.getElementById("total-score-text").innerText = quizQuestions.length;
    
    const percentage = (score / quizQuestions.length) * 100;
    const msg = document.getElementById("result-message");
    
    if (percentage === 100) msg.innerText = "Sempurna! Kamu luar biasa!";
    else if (percentage >= 80) msg.innerText = "Hebat! Sedikit lagi menuju sempurna.";
    else if (percentage >= 60) msg.innerText = "Bagus! Terus tingkatkan belajarmu.";
    else msg.innerText = "Jangan menyerah, coba lagi ya!";

    filterReview('all', document.querySelector('.review-tab'));
}

function filterReview(type, element) {
    if(element) {
        document.querySelectorAll('.review-tab').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    const container = document.getElementById('review-container');
    container.innerHTML = '';

    let filtered = reviewData;
    if (type === 'wrong') filtered = reviewData.filter(r => !r.isCorrect);
    if (type === 'correct') filtered = reviewData.filter(r => r.isCorrect);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; font-weight:600; color:var(--text-muted); margin-top:20px;">Tidak ada soal di kategori ini.</p>';
        return;
    }

    filtered.forEach((data, i) => {
        const item = document.createElement('div');
        item.className = `review-item ${data.isCorrect ? 'correct' : 'wrong'}`;
        
        let displayQuestion = data.question;
        if (displayQuestion.includes("A:") || displayQuestion.includes("A：")) {
            const parts = displayQuestion.split(/([AB])[：:]\s*/).filter(p => p.trim() !== "");
            let formatted = "";
            for (let j = 0; j < parts.length; j += 2) {
                formatted += `<strong>${parts[j]}:</strong> ${parts[j+1]}<br>`;
            }
            displayQuestion = formatted;
        }

        let audioTranscriptHtml = "";
        if (data.audioText) {
            let transcriptText = "";
            if (Array.isArray(data.audioText)) {
                transcriptText = data.audioText.map(item => `${item.voice === 'male' ? '👨' : '👩'} ${item.text}`).join('<br>');
            } else {
                transcriptText = data.audioText;
            }
            audioTranscriptHtml = `<div style="font-size:0.85rem; color:#6B7280; margin-bottom:10px; background:#F3F4F6; padding:10px; border-radius:8px;"><em>Transkrip Audio:<br>${transcriptText}</em></div>`;
        }

        let userAnsHtml = '';
        if (data.userAnswer !== null) {
            userAnsHtml = `<div class="review-ans ${data.isCorrect ? 'correct-ans' : 'user-wrong'}">
                Jawabanmu: ${data.options[data.userAnswer]}
            </div>`;
        } else {
            userAnsHtml = `<div class="review-ans user-wrong">Jawabanmu: (Tidak dijawab)</div>`;
        }

        let correctAnsHtml = '';
        if (!data.isCorrect) {
            correctAnsHtml = `<div class="review-ans correct-ans">
                Jawaban Benar: ${data.options[data.correctAnswer]}
            </div>`;
        }

        item.innerHTML = `
            <div class="review-q">${i + 1}. ${displayQuestion}</div>
            ${audioTranscriptHtml}
            ${userAnsHtml}
            ${correctAnsHtml}
        `;
        container.appendChild(item);
    });
}

function switchView(hideView, showView) {
    hideView.classList.remove("active");
    hideView.classList.add("hidden");
    showView.classList.remove("hidden");
    showView.classList.add("active");
}

function goHome() {
    try { if(synth) synth.cancel(); } catch(e) {}
    switchView(quizView, homeView);
    switchView(resultView, homeView);
    
    currentCategory = "";
    questionCount = 0;
    btnStart.disabled = true;
    
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('.count-btn').forEach(el => el.classList.remove('selected'));
}