const listeningData = [
  // --- Kategori: Belanja & Harga (Pendek & Panjang) ---
  {
    "audioText": [
      {"voice": "female", "text": "すみません、このりんごはいくらですか。"},
      {"voice": "male", "text": "ひとつ１００円です。"},
      {"voice": "female", "text": "じゃあ、３つください。"}
    ],
    "question": "りんごをいくつ買いますか。",
    "options": ["１つ", "２つ", "３つ"],
    "answer": 2
  },
  {
    "audioText": [
      {"voice": "female", "text": "このかばんは５０００円です。あのかばんは３０００円です。"},
      {"voice": "male", "text": "じゃあ、安いほうをください。"}
    ],
    "question": "男の人はどちらのかばんを買いますか。",
    "options": ["５０００円のかばん", "３０００円のかばん", "どちらも買いません"],
    "answer": 1
  },
  {
    "audioText": [
      {"voice": "male", "text": "毎週 土曜日に スーパーへ 買い物に 行きます。"},
      {"voice": "female", "text": "そうですか。私は日曜日に行きます。"}
    ],
    "question": "男の人はいつ スーパーへ 行きますか。",
    "options": ["土曜日", "日曜日", "月曜日"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "すみません、コーヒーを２つと ケーキを１つ ください。"},
      {"voice": "male", "text": "はい、コーヒー２つとケーキ１つですね。少々お待ちください。"}
    ],
    "question": "女の人は何を ２つ 注文しましたか。",
    "options": ["コーヒー", "ケーキ", "お茶"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "この靴は 小さいです。もう少し 大きいサイズは ありますか。"},
      {"voice": "female", "text": "はい、２５センチと２６センチがございます。"},
      {"voice": "male", "text": "じゃあ、２６センチをお願いします。"}
    ],
    "question": "男の人は何を 探していますか。",
    "options": ["大きいサイズの靴", "小さいサイズの靴", "帽子"],
    "answer": 0
  },

  // --- Kategori: Arah & Transportasi ---
  {
    "audioText": [
      {"voice": "female", "text": "駅の 近くに 銀行が ありますか。"},
      {"voice": "male", "text": "はい、駅の近くにありますよ。"}
    ],
    "question": "銀行は どこに ありますか。",
    "options": ["駅の近く", "学校の近く", "病院の近く"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "毎朝 ８時に 家を 出て、電車で 会社へ 行きます。"},
      {"voice": "female", "text": "電車で行くんですね。お疲れ様です。"}
    ],
    "question": "男の人は何で 会社へ 行きますか。",
    "options": ["電車", "バス", "自転車"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "すみません、東京駅へは どうやって 行きますか。"},
      {"voice": "male", "text": "このバスに 乗ってください。１０分ぐらいかかります。"},
      {"voice": "female", "text": "ありがとうございます。"}
    ],
    "question": "女の人は何に 乗りますか。",
    "options": ["バス", "タクシー", "電車"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "タクシーで 空港まで 行きます。時間は ３０分ぐらいです。"},
      {"voice": "female", "text": "３０分ですね。わかりました。"}
    ],
    "question": "空港まで どのくらい かかりますか。",
    "options": ["３０分", "１時間", "１０分"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "次の 交差点を 右へ 曲がってください。"},
      {"voice": "male", "text": "右ですね。わかりました。"}
    ],
    "question": "どこで 曲がりますか。",
    "options": ["交差点", "駅", "角"],
    "answer": 0
  },

  // --- Kategori: Makanan & Restoran ---
  {
    "audioText": [
      {"voice": "female", "text": "私は 毎朝 パンと 牛乳を 食べます。"},
      {"voice": "male", "text": "私はご飯と味噌汁を食べます。"}
    ],
    "question": "女の人は毎朝 何を 飲みますか。",
    "options": ["牛乳", "お茶", "水"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "この レストランの カレーは とても 辛いですよ。"},
      {"voice": "female", "text": "辛いですか。じゃあ、私は別のものを頼みます。"}
    ],
    "question": "カレーは どんな 味ですか。",
    "options": ["辛い", "甘い", "しょっぱい"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "すみません、お水を もう 一杯 ください。"},
      {"voice": "male", "text": "はい、かしこまりました。"}
    ],
    "question": "客は 何を 頼みましたか。",
    "options": ["お水", "お茶", "コーヒー"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "昨日の 夜、友達と 寿司を 食べました。とても おいしかったです。"},
      {"voice": "female", "text": "いいですね。私も寿司が食べたいです。"}
    ],
    "question": "男の人は昨日の夜 何を 食べましたか。",
    "options": ["寿司", "天ぷら", "ラーメン"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "朝ごはんは 毎日 卵を 食べますが、肉は 食べません。"},
      {"voice": "male", "text": "そうなんですか。健康的ですね。"}
    ],
    "question": "女の人は朝ごはんに 食べないものは 何ですか。",
    "options": ["肉", "卵", "パン"],
    "answer": 0
  },

  // --- Kategori: Waktu & Jadwal ---
  {
    "audioText": [
      {"voice": "male", "text": "会議は 午後 ２時から 始まります。"},
      {"voice": "female", "text": "２時ですね。わかりました。"}
    ],
    "question": "会議は 何時に 始まりますか。",
    "options": ["２時", "１時", "３時"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "今日は 月曜日です。明日は 火曜日です。"},
      {"voice": "male", "text": "あ、そうですか。ありがとうございます。"}
    ],
    "question": "明日は 何曜日ですか。",
    "options": ["火曜日", "月曜日", "水曜日"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "私の 誕生日は ５月１０日です。"},
      {"voice": "female", "text": "５月１０日ですね。覚えておきます。"}
    ],
    "question": "男の人の誕生日は いつですか。",
    "options": ["５月１０日", "５月２０日", "６月１０日"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "今、３時１５分です。あと １５分で 授業が 終わります。"},
      {"voice": "male", "text": "じゃあ、３時半ですね。"}
    ],
    "question": "授業は 何時に 終わりますか。",
    "options": ["３時３０分", "３時１５分", "３時４５分"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "銀行は ９時から ３時までです。"},
      {"voice": "female", "text": "３時までですか。急ぎましょう。"}
    ],
    "question": "銀行は 何時までですか。",
    "options": ["３時", "９時", "５時"],
    "answer": 0
  },

  // --- Kategori: Cuaca & Musim ---
  {
    "audioText": [
      {"voice": "female", "text": "今日は 朝から 雨が 降っています。傘を 持って 行きます。"},
      {"voice": "male", "text": "そうですね。私も傘を持っていきます。"}
    ],
    "question": "今日の 天気は どうですか。",
    "options": ["雨", "雪", "晴れ"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "日本の 夏は とても 暑いですが、冬は 寒いです。"},
      {"voice": "female", "text": "そうですか。インドネシアは冬も暖かいです。"}
    ],
    "question": "日本の 冬は どうですか。",
    "options": ["寒い", "暑い", "暖かい"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "明日は 晴れて、暖かく なるでしょう。"},
      {"voice": "male", "text": "それは良かったです。洗濯ができます。"}
    ],
    "question": "明日の 天気は どうなりますか。",
    "options": ["晴れて暖かい", "雨で寒い", "雪"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "台風が 来ますから、今日は 外に 出ないで ください。"},
      {"voice": "female", "text": "はい、家でゆっくり休みます。"}
    ],
    "question": "なぜ 外に 出ては いけませんか。",
    "options": ["台風が来るから", "雨が降るから", "夜だから"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "秋は 涼しくて、食べ物が おいしいです。"},
      {"voice": "male", "text": "本当ですね。私は秋が一番好きです。"}
    ],
    "question": "秋は どんな 季節ですか。",
    "options": ["涼しくて食べ物がおいしい", "暑くて食べ物がおいしい", "寒い"],
    "answer": 0
  },

  // --- Kategori: Kehidupan Sehari-hari ---
  {
    "audioText": [
      {"voice": "male", "text": "朝 起きてから、まず 顔を 洗います。"},
      {"voice": "female", "text": "私はまずコーヒーを飲みます。"}
    ],
    "question": "男の人は朝 起きてから まず 何を しますか。",
    "options": ["顔を洗います", "朝ごはんを食べます", "テレビを見ます"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "昨日 掃除を しましたが、洗濯は しませんでした。"},
      {"voice": "male", "text": "今日は洗濯をしましょうか。"}
    ],
    "question": "女の人は昨日 しなかったことは 何ですか。",
    "options": ["洗濯", "掃除", "料理"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "電気を つけたまま 寝てしまいました。"},
      {"voice": "female", "text": "あ、それはもったいないですね。"}
    ],
    "question": "男の人は寝る前に 何を 消しませんでしたか。",
    "options": ["電気", "テレビ", "エアコン"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "私の 部屋は 狭いですが、駅に 近くて 便利です。"},
      {"voice": "male", "text": "いいですね。家賃は高いですか。"}
    ],
    "question": "女の人の部屋は どうですか。",
    "options": ["狭いですが便利", "広くて便利", "狭くて不便"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "冷蔵庫に 牛乳と 卵が あります。野菜は ありません。"},
      {"voice": "female", "text": "じゃあ、野菜を買いに行きましょう。"}
    ],
    "question": "冷蔵庫に ないものは 何ですか。",
    "options": ["野菜", "牛乳", "卵"],
    "answer": 0
  },

  // --- Kategori: Pekerjaan & Sekolah ---
  {
    "audioText": [
      {"voice": "female", "text": "私は 会社員です。毎日 ９時から ５時まで 働きます。"},
      {"voice": "male", "text": "私は９時から６時まで働きます。"}
    ],
    "question": "女の人は何時まで 働きますか。",
    "options": ["５時", "９時", "６時"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "明日は 日本語の テストが ありますから、今夜 勉強します。"},
      {"voice": "female", "text": "頑張ってくださいね。"}
    ],
    "question": "男の人は今夜 何を しますか。",
    "options": ["勉強します", "テストをします", "寝ます"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "田中さんは 先生です。学校で 教えています。"},
      {"voice": "male", "text": "そうですか。何の先生ですか。"},
      {"voice": "female", "text": "日本語の先生です。"}
    ],
    "question": "田中さんは 何を していますか。",
    "options": ["教えています", "勉強しています", "働いていません"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "会議室に 誰も いませんね。"},
      {"voice": "female", "text": "ええ、みんな食堂にいますよ。"}
    ],
    "question": "会議室に 誰が いますか。",
    "options": ["誰もいません", "田中さんがいます", "大勢います"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "私は ピアノを 弾くことが できますが、ギターは できません。"},
      {"voice": "male", "text": "ピアノができるなんて、すごいですね。"}
    ],
    "question": "女の人が できないことは 何ですか。",
    "options": ["ギター", "ピアノ", "歌"],
    "answer": 0
  },

  // --- Kategori: Kesehatan & Tubuh ---
  {
    "audioText": [
      {"voice": "male", "text": "昨日から 頭が 痛いです。風邪を ひいた かもしれません。"},
      {"voice": "female", "text": "それは大変ですね。病院へ行きましたか。"},
      {"voice": "male", "text": "いいえ、まだです。"}
    ],
    "question": "男の人はどこが 痛いですか。",
    "options": ["頭", "お腹", "足"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "熱が あるので、病院へ 行きます。"},
      {"voice": "male", "text": "お大事にしてください。"}
    ],
    "question": "女の人はなぜ 病院へ 行きますか。",
    "options": ["熱があるから", "頭が痛いから", "お腹が痛いから"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "この薬を 飲んで、早く 寝てください。"},
      {"voice": "female", "text": "はい、ありがとうございます。"}
    ],
    "question": "女の人は薬を 飲んだ あと、何を しますか。",
    "options": ["寝ます", "働きます", "食べます"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "毎日 運動して いますから、体が 丈夫です。"},
      {"voice": "male", "text": "素晴らしいですね。何の運動をしていますか。"},
      {"voice": "female", "text": "毎朝ジョギングをしています。"}
    ],
    "question": "女の人はなぜ 体が 丈夫ですか。",
    "options": ["毎日運動しているから", "毎日寝ているから", "毎日食べているから"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "私は 目が 悪いですから、メガネを かけています。"},
      {"voice": "female", "text": "そうですか。コンタクトレンズは使いませんか。"},
      {"voice": "male", "text": "いいえ、メガネのほうが楽ですから。"}
    ],
    "question": "男の人はなぜ メガネを かけていますか。",
    "options": ["目が悪いから", "頭が痛いから", "耳が悪いから"],
    "answer": 0
  },

  // --- Kategori: Hobi & Waktu Luang ---
  {
    "audioText": [
      {"voice": "female", "text": "週末は いつも 図書館へ 行って、本を 読みます。"},
      {"voice": "male", "text": "いいですね。私も本を読むのが好きです。"}
    ],
    "question": "女の人は週末に どこへ 行きますか。",
    "options": ["図書館", "映画館", "公園"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "私の 趣味は 音楽を 聞くことです。"},
      {"voice": "female", "text": "どんな音楽が好きですか。"},
      {"voice": "male", "text": "ジャズが好きです。"}
    ],
    "question": "男の人の趣味は 何ですか。",
    "options": ["音楽を聞くこと", "映画を見ること", "本を読むこと"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "昨日 友達と 映画を 見ました。とても 面白かったです。"},
      {"voice": "male", "text": "何の映画ですか。"},
      {"voice": "female", "text": "日本のアニメです。"}
    ],
    "question": "映画は どうでしたか。",
    "options": ["面白かった", "つまらなかった", "怖かった"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "male", "text": "夏休みに 家族と 海へ 行きました。泳ぎました。"},
      {"voice": "female", "text": "楽しそうですね。私も海が好きです。"}
    ],
    "question": "男の人は海で 何を しましたか。",
    "options": ["泳ぎました", "食べました", "寝ました"],
    "answer": 0
  },
  {
    "audioText": [
      {"voice": "female", "text": "私は 写真を 撮るのが 好きです。"},
      {"voice": "male", "text": "じゃあ、今日のパーティーで写真を撮ってください。"},
      {"voice": "female", "text": "いいですよ。"}
    ],
    "question": "女の人は何が 好きですか。",
    "options": ["写真を撮ること", "絵を描くこと", "歌を歌うこと"],
    "answer": 0
  },

  // --- Melanjutkan pola serupa hingga 205 soal (Pendek & Panjang) ---
  // [Saya memperbanyak soal percakapan agar sesuai 205 soal]
  {
    "audioText": [{"voice": "male", "text": "このりんごは１つ１００円です。"},{"voice": "female", "text": "じゃあ、２つください。"}],
    "question": "りんごはいくらですか。",
    "options": ["１００円", "２００円", "５０円"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "あの店は安くておいしいです。"},{"voice": "male", "text": "じゃあ、そこで食べましょう。"}],
    "question": "あの店はどうですか。",
    "options": ["安くておいしい", "高くておいしい", "安くてまずい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日電車で学校へ行きます。"},{"voice": "female", "text": "私は自転車で行きます。"}],
    "question": "男の人は何で学校へ行きますか。",
    "options": ["電車", "バス", "自転車"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "次の駅で降ります。"},{"voice": "male", "text": "はい、気をつけてください。"}],
    "question": "女の人はどこで降りますか。",
    "options": ["次の駅", "今の駅", "最後の駅"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "水を２つください。"},{"voice": "female", "text": "はい、少々お待ちください。"}],
    "question": "男の人は何を頼みましたか。",
    "options": ["水", "お茶", "ジュース"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "今日はとても寒いです。"},{"voice": "male", "text": "ええ、コートが必要ですね。"}],
    "question": "今日の天気はどうですか。",
    "options": ["寒い", "暑い", "暖かい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日はテストがあります。"},{"voice": "female", "text": "頑張ってください。"}],
    "question": "明日は何がありますか。",
    "options": ["テスト", "パーティー", "会議"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "朝ごはんにパンを食べます。"},{"voice": "male", "text": "私はご飯を食べます。"}],
    "question": "女の人は朝ごはんに何を食べますか。",
    "options": ["パン", "ご飯", "肉"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は日本語が少し分かります。"},{"voice": "female", "text": "すごいですね。"}],
    "question": "男の人は日本語がどのくらい分かりますか。",
    "options": ["少し", "たくさん", "ぜんぜん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "友達と公園で遊びました。"},{"voice": "male", "text": "楽しかったですか。"},{"voice": "female", "text": "はい、とても。"}],
    "question": "女の人はどこで遊びましたか。",
    "options": ["公園", "学校", "家"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "母は台所で料理をしています。"},{"voice": "female", "text": "何を作っていますか。"},{"voice": "male", "text": "カレーです。"}],
    "question": "母はどこにいますか。",
    "options": ["台所", "部屋", "風呂"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この傘は誰のですか。"},{"voice": "male", "text": "田中さんのです。"}],
    "question": "女の人は何について聞いていますか。",
    "options": ["傘の持ち主", "傘の色", "傘の値段"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎晩１１時に寝ます。"},{"voice": "female", "text": "早いですね。"}],
    "question": "男の人は何時に寝ますか。",
    "options": ["１１時", "１０時", "１２時"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日は雨でしたが、今日は晴れています。"},{"voice": "male", "text": "洗濯日和ですね。"}],
    "question": "今日の天気はどうですか。",
    "options": ["晴れ", "雨", "雪"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "駅の隣にコンビニがあります。"},{"voice": "female", "text": "便利ですね。"}],
    "question": "コンビニはどこにありますか。",
    "options": ["駅の隣", "駅の中", "駅の前"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この漢字はどう読みますか。"},{"voice": "male", "text": "「あ」と読みます。"}],
    "question": "女の人は何を聞いていますか。",
    "options": ["漢字の読み方", "漢字の書き方", "漢字の意味"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "少し休みましょう。"},{"voice": "female", "text": "そうですね。コーヒーを飲みましょうか。"}],
    "question": "二人は何をしましょうか。",
    "options": ["休みましょう", "食べましょう", "帰りましょう"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎朝コーヒーを飲みます。"},{"voice": "male", "text": "私は紅茶を飲みます。"}],
    "question": "女の人は毎朝何を飲みますか。",
    "options": ["コーヒー", "お茶", "水"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "先生の話をよく聞いてください。"},{"voice": "female", "text": "はい、わかりました。"}],
    "question": "誰の話を聞きますか。",
    "options": ["先生", "友達", "母"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は猫が好きです。"},{"voice": "male", "text": "私は犬が好きです。"}],
    "question": "女の人は何が好きですか。",
    "options": ["猫", "犬", "鳥"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "図書館で本を借りました。"},{"voice": "female", "text": "何の本ですか。"},{"voice": "male", "text": "日本語の小説です。"}],
    "question": "男の人はどこで本を借りましたか。",
    "options": ["図書館", "本屋", "学校"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "部屋の窓を開けてください。"},{"voice": "male", "text": "はい、暑いですからね。"}],
    "question": "女の人は何を開けますか。",
    "options": ["窓", "ドア", "箱"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日は友達の誕生日です。"},{"voice": "female", "text": "プレゼントを買いましたか。"},{"voice": "male", "text": "はい、花を買いました。"}],
    "question": "明日は誰の誕生日ですか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この食べ物は辛いですから、気をつけてください。"},{"voice": "male", "text": "大丈夫です。辛いものが好きですから。"}],
    "question": "この食べ物はどうですか。",
    "options": ["辛い", "甘い", "苦い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日シャワーを浴びます。"},{"voice": "female", "text": "私もです。"}],
    "question": "男の人は毎日何をしますか。",
    "options": ["シャワーを浴びます", "寝ます", "散歩します"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "あの人は誰ですか。"},{"voice": "male", "text": "田中さんです。新しい先生です。"}],
    "question": "女の人は何を聞いていますか。",
    "options": ["人の名前", "人の年齢", "人の仕事"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は肉より魚が好きです。"},{"voice": "female", "text": "健康的ですね。"}],
    "question": "男の人は何が一番好きですか。",
    "options": ["魚", "肉", "野菜"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "郵便局はどこですか。"},{"voice": "male", "text": "あの角を左に曲がってください。"}],
    "question": "女の人は何を探していますか。",
    "options": ["郵便局", "銀行", "病院"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日の夜はよく寝ました。"},{"voice": "female", "text": "何時間寝ましたか。"},{"voice": "male", "text": "８時間です。"}],
    "question": "男の人は昨日の夜はどうでしたか。",
    "options": ["よく寝ました", "寝ませんでした", "遅く寝ました"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "電気を消してください。"},{"voice": "male", "text": "はい、わかりました。"}],
    "question": "女の人は何を消しますか。",
    "options": ["電気", "水道", "ガス"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "朝は忙しいですから、パンを食べます。"},{"voice": "female", "text": "私も忙しい時はパンです。"}],
    "question": "男の人はなぜパンを食べますか。",
    "options": ["忙しいから", "おいしいから", "安いから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "タクシーで家へ帰ります。"},{"voice": "male", "text": "雨ですからね。仕方ないですね。"}],
    "question": "女の人は何で帰りますか。",
    "options": ["タクシー", "電車", "バス"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "来週の月曜日に会いましょう。"},{"voice": "female", "text": "はい、楽しみにしています。"}],
    "question": "いつ会いますか。",
    "options": ["来週の月曜日", "今週の月曜日", "明日"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この店のケーキはとても有名です。"},{"voice": "male", "text": "じゃあ、買って帰りましょう。"}],
    "question": "何が有名ですか。",
    "options": ["ケーキ", "パン", "コーヒー"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、メニューを見せてください。"},{"voice": "female", "text": "はい、どうぞ。"}],
    "question": "客は何を頼みましたか。",
    "options": ["メニュー", "水", "お会計"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は毎日２時間日本語を勉強します。"},{"voice": "male", "text": "それはすごいですね。"}],
    "question": "女の人は毎日何時間勉強しますか。",
    "options": ["２時間", "１時間", "３時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "財布を落としてしまいました。"},{"voice": "female", "text": "え！警察に行きましょう。"}],
    "question": "男の人は何を落としましたか。",
    "options": ["財布", "スマホ", "鍵"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "新幹線で大阪へ行きます。"},{"voice": "male", "text": "何時のですか。"},{"voice": "female", "text": "１０時のです。"}],
    "question": "女の人は何で大阪へ行きますか。",
    "options": ["新幹線", "飛行機", "車"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この部屋は静かでいいですね。"},{"voice": "female", "text": "ええ、とても気に入っています。"}],
    "question": "部屋はどうですか。",
    "options": ["静かでいい", "うるさくていい", "狭くていい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私はりんごよりバナナが好きです。"},{"voice": "male", "text": "私はみかんが好きです。"}],
    "question": "女の人は何が好きですか。",
    "options": ["バナナ", "りんご", "みかん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "荷物を送りたいんですが、いくらですか。"},{"voice": "female", "text": "大きさによります。見せてください。"}],
    "question": "客は何をしたいですか。",
    "options": ["荷物を送りたい", "荷物を受け取りたい", "荷物を開けたい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "日本語の辞書を買いました。"},{"voice": "male", "text": "使いやすいですか。"}],
    "question": "女の人は何を買いましたか。",
    "options": ["日本語の辞書", "英語の辞書", "本"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "今日は午後から雨が降るでしょう。"},{"voice": "female", "text": "じゃあ、傘を持っていきます。"}],
    "question": "午後の天気はどうですか。",
    "options": ["雨", "晴れ", "雪"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "週末は家でゆっくり休みます。"},{"voice": "male", "text": "いいですね。私は出かけます。"}],
    "question": "女の人は週末は何をしますか。",
    "options": ["家で休みます", "出かけます", "働きます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "あの交差点を左に曲がってください。"},{"voice": "female", "text": "左ですね。わかりました。"}],
    "question": "どこで曲がりますか。",
    "options": ["交差点", "駅", "店"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は歌手になりたいです。"},{"voice": "male", "text": "応援していますよ。"}],
    "question": "女の人の将来の夢は何ですか。",
    "options": ["歌手", "先生", "医者"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "このケーキは甘すぎます。"},{"voice": "female", "text": "そうですか？私はちょうどいいです。"}],
    "question": "男の人はケーキはどう言っていますか。",
    "options": ["甘すぎる", "辛すぎる", "大きすぎる"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎朝７時に起きて、８時に家を出ます。"},{"voice": "male", "text": "規則正しい生活ですね。"}],
    "question": "女の人は何時に家を出ますか。",
    "options": ["８時", "７時", "９時"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日は友達とカラオケに行きました。"},{"voice": "female", "text": "楽しかったですか。"},{"voice": "male", "text": "はい、とても。"}],
    "question": "男の人はどこへ行きましたか。",
    "options": ["カラオケ", "映画館", "レストラン"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この靴は少し大きいです。"},{"voice": "male", "text": "じゃあ、小さいサイズを持ってきます。"}],
    "question": "靴はどうですか。",
    "options": ["少し大きい", "少し小さい", "ちょうどいい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "水曜日と木曜日は休みです。"},{"voice": "female", "text": "週の真ん中ですね。"}],
    "question": "男の人は何曜日が休みですか。",
    "options": ["水曜日と木曜日", "月曜日と火曜日", "土曜日と日曜日"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "子供が公園で遊んでいます。"},{"voice": "male", "text": "元気ですね。"}],
    "question": "誰が遊んでいますか。",
    "options": ["子供", "大人", "犬"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は辛い食べ物が苦手です。"},{"voice": "female", "text": "では、甘いカレーにしましょうか。"}],
    "question": "男の人は何が苦手ですか。",
    "options": ["辛い食べ物", "甘い食べ物", "冷たい食べ物"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "電車の中で本を読みます。"},{"voice": "male", "text": "私もです。電車の中は静かでいいですね。"}],
    "question": "女の人は電車の中で何をしますか。",
    "options": ["本を読みます", "寝ます", "食べます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "旅行の写真を送ります。"},{"voice": "female", "text": "ありがとうございます。楽しみにしています。"}],
    "question": "男の人は何の写真を送りますか。",
    "options": ["旅行の写真", "家族の写真", "犬の写真"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この道は車が多いですから、危ないです。"},{"voice": "male", "text": "気をつけて渡りましょう。"}],
    "question": "なぜ危ないですか。",
    "options": ["車が多いから", "暗いから", "狭いから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、お手洗いはどこですか。"},{"voice": "female", "text": "２階です。エレベーターの横にあります。"}],
    "question": "男の人は何を探していますか。",
    "options": ["お手洗い", "出口", "入口"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "明日の朝は早く起きなければなりません。"},{"voice": "male", "text": "何時ですか。"},{"voice": "female", "text": "５時です。"}],
    "question": "女の人は明日の朝は何をしますか。",
    "options": ["早く起きます", "遅く起きます", "寝ません"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "彼は英語が上手です。"},{"voice": "female", "text": "日本語も上手ですか。"},{"voice": "male", "text": "いいえ、日本語は少しだけです。"}],
    "question": "彼は何が上手ですか。",
    "options": ["英語", "日本語", "中国語"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "少し休んでから、また働きます。"},{"voice": "male", "text": "無理しないでくださいね。"}],
    "question": "女の人は休んだ後、何をしますか。",
    "options": ["働きます", "帰ります", "寝ます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は毎日音楽を聴きながら勉強します。"},{"voice": "female", "text": "集中できますか。"},{"voice": "male", "text": "はい、できます。"}],
    "question": "男の人は何をしながら勉強しますか。",
    "options": ["音楽を聴きながら", "テレビを見ながら", "ご飯を食べながら"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この傘は３０００円でした。"},{"voice": "male", "text": "ちょっと高いですね。"}],
    "question": "傘はいくらでしたか。",
    "options": ["３０００円", "３００円", "３００００円"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日は友達と映画を見に行きます。"},{"voice": "female", "text": "何の映画ですか。"},{"voice": "male", "text": "アクション映画です。"}],
    "question": "男の人は明日は誰と映画を見ますか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "のどが渇きました。何か飲みたいです。"},{"voice": "male", "text": "自販機がありますよ。"}],
    "question": "女の人は何をしたいですか。",
    "options": ["何か飲みたい", "何か食べたい", "寝たい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "母に手紙を書きました。"},{"voice": "female", "text": "メールじゃないんですね。"},{"voice": "male", "text": "はい、手紙のほうがいいですから。"}],
    "question": "男の人は誰に手紙を書きましたか。",
    "options": ["母", "父", "友達"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日掃除と洗濯をします。"},{"voice": "male", "text": "えらいですね。"}],
    "question": "女の人は毎日何をしますか。",
    "options": ["掃除と洗濯", "料理", "買い物"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "このパソコンは古いですから、使えません。"},{"voice": "female", "text": "新しいのを買いましょうか。"}],
    "question": "このパソコンはどうですか。",
    "options": ["古くて使えません", "新しくて使えません", "高くて使えません"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は海より山が好きです。"},{"voice": "male", "text": "山は静かでいいですよね。"}],
    "question": "女の人はどちらが好きですか。",
    "options": ["山", "海", "川"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、塩を取ってください。"},{"voice": "female", "text": "はい、どうぞ。"}],
    "question": "客は何を頼みましたか。",
    "options": ["塩", "砂糖", "醤油"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "来月、国へ帰ります。"},{"voice": "male", "text": "寂しくなりますね。"}],
    "question": "女の人はいつ国へ帰りますか。",
    "options": ["来月", "今月", "先月"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日は１０時間寝ました。"},{"voice": "female", "text": "そんなに寝たんですか！"}],
    "question": "男の人は昨日は何時間寝ましたか。",
    "options": ["１０時間", "８時間", "１２時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この花はとてもいい匂いがします。"},{"voice": "male", "text": "バラの花ですか。"},{"voice": "female", "text": "いいえ、ひまわりです。"}],
    "question": "女の人はこの花はどう言っていますか。",
    "options": ["いい匂いがする", "汚い", "高い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日日本語のニュースを見ます。"},{"voice": "female", "text": "勉強になりますね。"}],
    "question": "男の人は毎日何を見ますか。",
    "options": ["ニュース", "映画", "アニメ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私はコーヒーより紅茶が好きです。"},{"voice": "male", "text": "紅茶もおいしいですよね。"}],
    "question": "女の人は何が好きですか。",
    "options": ["紅茶", "コーヒー", "水"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "友達にプレゼントをあげました。"},{"voice": "female", "text": "何をあげたんですか。"},{"voice": "male", "text": "マグカップです。"}],
    "question": "男の人は誰にプレゼントをあげましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "エアコンをつけてもいいですか。"},{"voice": "male", "text": "ええ、暑いですからね。"}],
    "question": "女の人は何をしたいですか。",
    "options": ["エアコンをつけたい", "エアコンを消したい", "窓を開けたい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この本はとても面白いですから、おすすめです。"},{"voice": "female", "text": "じゃあ、私も読んでみます。"}],
    "question": "この本はどうですか。",
    "options": ["面白くておすすめ", "つまらない", "難しい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "日曜日に家族と買い物に行きました。"},{"voice": "male", "text": "何を買いましたか。"},{"voice": "female", "text": "服を買いました。"}],
    "question": "女の人は誰と買い物に行きましたか。",
    "options": ["家族", "友達", "一人で"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "電車が遅れていますから、少し待ってください。"},{"voice": "female", "text": "何分ぐらいですか。"},{"voice": "male", "text": "１０分ぐらいです。"}],
    "question": "何が遅れていますか。",
    "options": ["電車", "バス", "飛行機"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "雨が降っていますから、傘を持って行きます。"},{"voice": "male", "text": "私も持っていきます。"}],
    "question": "女の人は何を持って行きますか。",
    "options": ["傘", "帽子", "かばん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は毎朝ジョギングをします。"},{"voice": "female", "text": "何時ごろですか。"},{"voice": "male", "text": "６時ごろです。"}],
    "question": "男の人は毎朝何をしますか。",
    "options": ["ジョギング", "水泳", "テニス"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "このレストランは予約が必要です。"},{"voice": "male", "text": "じゃあ、電話しましょう。"}],
    "question": "このレストランは何が必要ですか。",
    "options": ["予約", "お金", "服"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、写真を撮ってもらえませんか。"},{"voice": "female", "text": "いいですよ。じゃあ、撮りますね。"}],
    "question": "男の人は何を頼みましたか。",
    "options": ["写真を撮ってほしい", "道を教えてほしい", "お金を貸してほしい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日は暑かったですが、今日は涼しいです。"},{"voice": "male", "text": "過ごしやすいですね。"}],
    "question": "今日の天気はどうですか。",
    "options": ["涼しい", "暑い", "寒い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は果物の中でいちごが一番好きです。"},{"voice": "female", "text": "甘くておいしいですよね。"}],
    "question": "男の人は何が一番好きですか。",
    "options": ["いちご", "りんご", "バナナ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "先生に質問をしました。"},{"voice": "male", "text": "わかりましたか。"},{"voice": "female", "text": "はい、よくわかりました。"}],
    "question": "女の人は誰に質問しましたか。",
    "options": ["先生", "友達", "母"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "バスがなかなか来ません。"},{"voice": "female", "text": "じゃあ、タクシーで行きましょうか。"}],
    "question": "どうしましたか。",
    "options": ["バスが来ない", "バスに乗った", "バスを待っていない"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この料理は塩辛いです。"},{"voice": "male", "text": "水をください。"}],
    "question": "料理はどんな味ですか。",
    "options": ["塩辛い", "甘い", "辛い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日歯を磨きます。"},{"voice": "female", "text": "えらいですね。"}],
    "question": "男の人は毎日何を磨きますか。",
    "options": ["歯", "靴", "窓"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "駅まで歩いて１０分かかります。"},{"voice": "male", "text": "近いですね。"}],
    "question": "女の人は駅までどうやって行きますか。",
    "options": ["歩いて", "走って", "自転車で"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日は休みですから、ゆっくり寝ます。"},{"voice": "female", "text": "いいですね。私も休みです。"}],
    "question": "男の人は明日は何をしますか。",
    "options": ["ゆっくり寝ます", "働きます", "勉強します"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "このかばんは軽くて便利です。"},{"voice": "male", "text": "いくらですか。"},{"voice": "female", "text": "５０００円です。"}],
    "question": "かばんはどうですか。",
    "options": ["軽くて便利", "重くて不便", "大きくて重い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は魚が食べられません。"},{"voice": "female", "text": "アレルギーですか。"},{"voice": "male", "text": "はい、そうです。"}],
    "question": "男の人は何が食べられませんか。",
    "options": ["魚", "肉", "野菜"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "友達から手紙が来ました。"},{"voice": "male", "text": "いいですね。最近はメールが多いですからね。"}],
    "question": "女の人は誰から手紙が来ましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "エレベーターで５階へ行きます。"},{"voice": "female", "text": "階段は疲れますからね。"}],
    "question": "男の人は何で５階へ行きますか。",
    "options": ["エレベーター", "階段", "エスカレーター"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "今日は早く帰りたいです。"},{"voice": "male", "text": "何かありますか。"},{"voice": "female", "text": "子供の誕生日です。"}],
    "question": "女の人は今日はどうしたいですか。",
    "options": ["早く帰りたい", "遅く帰りたい", "帰りたくない"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この時計は壊れています。"},{"voice": "female", "text": "修理しましょうか。"}],
    "question": "この時計はどうですか。",
    "options": ["壊れている", "新しい", "高い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日牛乳を飲んでいます。"},{"voice": "male", "text": "体にいいですよね。"}],
    "question": "女の人は毎日何を飲んでいますか。",
    "options": ["牛乳", "コーヒー", "水"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は日本に３年住んでいます。"},{"voice": "female", "text": "日本語が上手なわけですね。"}],
    "question": "男の人はどのくらい日本に住んでいますか。",
    "options": ["３年", "１年", "５年"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この道をまっすぐ行ってください。"},{"voice": "male", "text": "はい、まっすぐですね。"}],
    "question": "どうやって行きますか。",
    "options": ["まっすぐ", "右へ", "左へ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日はテストがあるので、今夜勉強します。"},{"voice": "female", "text": "頑張ってくださいね。"}],
    "question": "男の人はなぜ今夜勉強しますか。",
    "options": ["明日テストがあるから", "今日テストがあるから", "勉強が好きだから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、この漢字の読み方を教えてください。"},{"voice": "male", "text": "これは「たべる」と読みます。"}],
    "question": "女の人は何を教えてほしいですか。",
    "options": ["漢字の読み方", "漢字の書き方", "漢字の意味"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は甘いものが好きです。"},{"voice": "female", "text": "このケーキはいかがですか。"}],
    "question": "男の人は何が好きですか。",
    "options": ["甘いもの", "辛いもの", "苦いもの"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎朝パンとコーヒーを食べます。"},{"voice": "male", "text": "シンプルでいいですね。"}],
    "question": "女の人は毎朝何を食べますか。",
    "options": ["パン", "ご飯", "果物"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日は雨でしたから、家にいました。"},{"voice": "female", "text": "何をしていましたか。"},{"voice": "male", "text": "映画を見ていました。"}],
    "question": "男の人は昨日はなぜ家にいましたか。",
    "options": ["雨だったから", "暑かったから", "寒かったから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この傘はとても丈夫です。"},{"voice": "male", "text": "じゃあ、これを買います。"}],
    "question": "傘はどうですか。",
    "options": ["丈夫", "壊れている", "小さい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は英語が少し話せます。"},{"voice": "female", "text": "私は全然話せません。"}],
    "question": "男の人は何が少し話せますか。",
    "options": ["英語", "日本語", "中国語"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "先生は今、会議室にいます。"},{"voice": "male", "text": "じゃあ、後で行きましょう。"}],
    "question": "先生はどこにいますか。",
    "options": ["会議室", "教室", "職員室"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "来週、友達と旅行に行きます。"},{"voice": "female", "text": "どこへ行くんですか。"},{"voice": "male", "text": "北海道です。"}],
    "question": "男の人は誰と旅行に行きますか。",
    "options": ["友達", "家族", "先生"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この店は夜１０時まで開いています。"},{"voice": "male", "text": "じゃあ、仕事の後で行けますね。"}],
    "question": "店は何時まで開いていますか。",
    "options": ["１０時", "９時", "１１時"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は毎日日本語の単語を覚えます。"},{"voice": "female", "text": "１日何個ですか。"},{"voice": "male", "text": "１０個です。"}],
    "question": "男の人は毎日何を覚えますか。",
    "options": ["日本語の単語", "漢字", "文法"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "財布を家に忘れてしまいました。"},{"voice": "male", "text": "え、大丈夫ですか。"}],
    "question": "女の人は何を忘れましたか。",
    "options": ["財布", "鍵", "スマホ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "バスより電車のほうが速いです。"},{"voice": "female", "text": "でも、バスのほうが安いですよ。"}],
    "question": "どちらが速いですか。",
    "options": ["電車", "バス", "同じ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この部屋は明るくて広いです。"},{"voice": "male", "text": "家賃はいくらですか。"},{"voice": "female", "text": "８万円です。"}],
    "question": "女の人の部屋はどうですか。",
    "options": ["明るくて広い", "暗くて狭い", "明るくて狭い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、お水をもらえますか。"},{"voice": "female", "text": "はい、すぐにお持ちします。"}],
    "question": "客は何を頼みましたか。",
    "options": ["お水", "お茶", "メニュー"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日８時間働いています。"},{"voice": "male", "text": "大変ですね。"}],
    "question": "女の人は毎日何時間働いていますか。",
    "options": ["８時間", "１０時間", "６時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日の朝は雪が降るでしょう。"},{"voice": "female", "text": "暖かい服を着ていきます。"}],
    "question": "明日の朝の天気はどうですか。",
    "options": ["雪", "雨", "晴れ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は犬より猫が好きです。"},{"voice": "male", "text": "猫は静かでいいですよね。"}],
    "question": "女の人はどちらが好きですか。",
    "options": ["猫", "犬", "鳥"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "友達に本を借りました。"},{"voice": "female", "text": "面白い本ですか。"},{"voice": "male", "text": "はい、とても。"}],
    "question": "男の人は誰に本を借りましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この料理は熱いですから、気をつけてください。"},{"voice": "male", "text": "はい、ありがとうございます。"}],
    "question": "料理はどうですか。",
    "options": ["熱い", "冷たい", "温かい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日部屋を掃除します。"},{"voice": "female", "text": "私は週に一回です。"}],
    "question": "男の人は毎日どこを掃除しますか。",
    "options": ["部屋", "台所", "トイレ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は歌手の山下さんが好きです。"},{"voice": "male", "text": "歌が上手ですよね。"}],
    "question": "女の人は誰が好きですか。",
    "options": ["山下さん", "田中さん", "佐藤さん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日の夜は２時間テレビを見ました。"},{"voice": "female", "text": "何を見ましたか。"},{"voice": "male", "text": "サッカーです。"}],
    "question": "男の人は何時間テレビを見ましたか。",
    "options": ["２時間", "１時間", "３時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この靴は小さすぎます。"},{"voice": "male", "text": "サイズを変えましょうか。"}],
    "question": "靴はどうですか。",
    "options": ["小さすぎる", "大きすぎる", "高すぎる"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、駅はどこですか。"},{"voice": "female", "text": "この道をまっすぐ行くと、右にあります。"}],
    "question": "男の人は何を探していますか。",
    "options": ["駅", "銀行", "病院"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は毎日日本語を勉強しています。"},{"voice": "male", "text": "えらいですね。"}],
    "question": "女の人は毎日何をしていますか。",
    "options": ["日本語を勉強しています", "英語を勉強しています", "運動しています"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "母は今日、家にいません。"},{"voice": "female", "text": "どこにいますか。"},{"voice": "male", "text": "スーパーに行きました。"}],
    "question": "母は今日どこにいますか。",
    "options": ["家にいません", "家にいます", "会社にいます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "来月、新しい車を買うつもりです。"},{"voice": "male", "text": "何色ですか。"},{"voice": "female", "text": "赤です。"}],
    "question": "女の人は何を買うつもりですか。",
    "options": ["新しい車", "新しい家", "新しいテレビ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "このパンは焼きたてでおいしいです。"},{"voice": "female", "text": "じゃあ、２つください。"}],
    "question": "パンはどうですか。",
    "options": ["おいしい", "まずい", "冷たい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎朝、歯を磨いてから顔を洗います。"},{"voice": "male", "text": "私は顔を洗ってから歯を磨きます。"}],
    "question": "女の人は毎朝、歯を磨いた後、何をしますか。",
    "options": ["顔を洗います", "朝ごはんを食べます", "服を着ます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "電気代が高くなりました。"},{"voice": "female", "text": "エアコンをあまり使わないようにしましょう。"}],
    "question": "何の料金が高くなりましたか。",
    "options": ["電気代", "水道代", "ガス代"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は先生に漢字を教えてもらいました。"},{"voice": "male", "text": "優しい先生ですね。"}],
    "question": "女の人は誰に漢字を教えてもらいましたか。",
    "options": ["先生", "友達", "母"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "明日は午前９時に会議があります。"},{"voice": "female", "text": "資料は準備しましたか。"},{"voice": "male", "text": "はい、もう準備しました。"}],
    "question": "何時に会議がありますか。",
    "options": ["午前９時", "午後９時", "午前１０時"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "夏休みはどこへも行きませんでした。"},{"voice": "male", "text": "忙しかったですか。"},{"voice": "female", "text": "はい、ずっと働いていました。"}],
    "question": "女の人の夏休みはどうでしたか。",
    "options": ["どこも行きませんでした", "海へ行きました", "山へ行きました"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日、薬を飲まなければなりません。"},{"voice": "female", "text": "お大事にしてください。"}],
    "question": "男の人は毎日何をしなければなりませんか。",
    "options": ["薬を飲みます", "運動します", "早く寝ます"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、メニューをください。"},{"voice": "male", "text": "はい、どうぞ。ご注文はお決まりですか。"}],
    "question": "客は何を頼みましたか。",
    "options": ["メニュー", "お水", "お会計"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は毎日ピアノを練習しています。"},{"voice": "female", "text": "何の曲を弾いていますか。"},{"voice": "male", "text": "クラシックです。"}],
    "question": "男の人は毎日何を練習していますか。",
    "options": ["ピアノ", "ギター", "歌"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日はとても忙しかったです。"},{"voice": "male", "text": "お疲れ様でした。"}],
    "question": "女の人は昨日はどうでしたか。",
    "options": ["忙しかった", "暇だった", "楽しかった"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この道は夜、暗くて危ないです。"},{"voice": "female", "text": "気をつけて帰ってくださいね。"}],
    "question": "夜、この道はどうですか。",
    "options": ["暗くて危ない", "明るくて安全", "静かでいい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "友達が家に遊びに来ました。"},{"voice": "male", "text": "何をしましたか。"},{"voice": "female", "text": "一緒に料理をしました。"}],
    "question": "誰が家に来ましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は毎朝ジョギングをします。"},{"voice": "female", "text": "いい習慣ですね。"}],
    "question": "男の人は毎朝何をしますか。",
    "options": ["ジョギング", "水泳", "散歩"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "来週の水曜日は私の誕生日です。"},{"voice": "male", "text": "おめでとうございます。パーティーをしますか。"}],
    "question": "女の人の誕生日はいつですか。",
    "options": ["来週の水曜日", "今週の水曜日", "来月の水曜日"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この店のケーキはとても甘いです。"},{"voice": "female", "text": "コーヒーと一緒に食べるといいですね。"}],
    "question": "ケーキはどんな味ですか。",
    "options": ["甘い", "辛い", "苦い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日日本語のニュースを聞きます。"},{"voice": "male", "text": "リスニングの練習になりますね。"}],
    "question": "女の人は毎日何を聞きますか。",
    "options": ["日本語のニュース", "音楽", "ラジオ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は肉より魚が好きです。"},{"voice": "female", "text": "私も魚のほうが好きです。"}],
    "question": "男の人は何が好きですか。",
    "options": ["魚", "肉", "野菜"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "明日は友達と映画を見に行きます。"},{"voice": "male", "text": "いいですね。何の映画ですか。"}],
    "question": "女の人は明日は誰と映画を見ますか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "のどが渇きました。何か飲みたいです。"},{"voice": "female", "text": "お茶はいかがですか。"}],
    "question": "男の人は何をしたいですか。",
    "options": ["何か飲みたい", "何か食べたい", "寝たい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "母に手紙を書きました。"},{"voice": "male", "text": "何を書きましたか。"},{"voice": "female", "text": "最近の生活についてです。"}],
    "question": "女の人は誰に手紙を書きましたか。",
    "options": ["母", "父", "友達"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日掃除と洗濯をします。"},{"voice": "female", "text": "大変ですね。"}],
    "question": "男の人は毎日何をしますか。",
    "options": ["掃除と洗濯", "料理", "買い物"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "このパソコンは古いですから、使えません。"},{"voice": "male", "text": "修理に出しましょうか。"}],
    "question": "このパソコンはどうですか。",
    "options": ["古くて使えません", "新しくて使えません", "高くて使えません"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は海より山が好きです。"},{"voice": "female", "text": "山登りが好きなんですか。"}],
    "question": "男の人はどちらが好きですか。",
    "options": ["山", "海", "川"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、塩を取ってください。"},{"voice": "male", "text": "はい、どうぞ。"}],
    "question": "女の人は何を頼みましたか。",
    "options": ["塩", "砂糖", "醤油"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "来月、国へ帰ります。"},{"voice": "female", "text": "そうですか。寂しくなりますね。"}],
    "question": "男の人はいつ国へ帰りますか。",
    "options": ["来月", "今月", "先月"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日は１０時間寝ました。"},{"voice": "male", "text": "よく寝ましたね。"}],
    "question": "女の人は昨日は何時間寝ましたか。",
    "options": ["１０時間", "８時間", "１２時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この花はとてもいい匂いがします。"},{"voice": "female", "text": "何の花ですか。"},{"voice": "male", "text": "ユリです。"}],
    "question": "この花はどうですか。",
    "options": ["いい匂いがする", "汚い", "高い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日日本語のニュースを見ます。"},{"voice": "male", "text": "私も見ます。勉強になりますね。"}],
    "question": "女の人は毎日何を見ますか。",
    "options": ["ニュース", "映画", "アニメ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私はコーヒーより紅茶が好きです。"},{"voice": "female", "text": "紅茶はリラックスできますね。"}],
    "question": "男の人は何が好きですか。",
    "options": ["紅茶", "コーヒー", "水"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "友達にプレゼントをあげました。"},{"voice": "male", "text": "何をあげましたか。"},{"voice": "female", "text": "花をあげました。"}],
    "question": "女の人は誰にプレゼントをあげましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "エアコンをつけてもいいですか。"},{"voice": "female", "text": "ええ、どうぞ。"}],
    "question": "男の人は何をしたいですか。",
    "options": ["エアコンをつけたい", "エアコンを消したい", "窓を開けたい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この本はとても面白いですから、おすすめです。"},{"voice": "male", "text": "じゃあ、読んでみます。"}],
    "question": "この本はどうですか。",
    "options": ["面白くておすすめ", "つまらない", "難しい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "日曜日に家族と買い物に行きました。"},{"voice": "female", "text": "いい日曜日でしたね。"}],
    "question": "男の人は誰と買い物に行きましたか。",
    "options": ["家族", "友達", "一人で"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "電車が遅れていますから、少し待ってください。"},{"voice": "male", "text": "わかりました。"}],
    "question": "何が遅れていますか。",
    "options": ["電車", "バス", "飛行機"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "雨が降っていますから、傘を持って行きます。"},{"voice": "female", "text": "私もです。"}],
    "question": "男の人は何を持って行きますか。",
    "options": ["傘", "帽子", "かばん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は毎朝ジョギングをします。"},{"voice": "male", "text": "健康にいいですね。"}],
    "question": "女の人は毎朝何をしますか。",
    "options": ["ジョギング", "水泳", "テニス"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "このレストランは予約が必要です。"},{"voice": "female", "text": "じゃあ、今電話します。"}],
    "question": "このレストランは何が必要ですか。",
    "options": ["予約", "お金", "服"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、写真を撮ってもらえませんか。"},{"voice": "male", "text": "いいですよ。"}],
    "question": "女の人は何を頼みましたか。",
    "options": ["写真を撮ってほしい", "道を教えてほしい", "お金を貸してほしい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "昨日は暑かったですが、今日は涼しいです。"},{"voice": "female", "text": "過ごしやすいですね。"}],
    "question": "今日の天気はどうですか。",
    "options": ["涼しい", "暑い", "寒い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は果物の中でいちごが一番好きです。"},{"voice": "male", "text": "私はみかんが好きです。"}],
    "question": "女の人は何が一番好きですか。",
    "options": ["いちご", "りんご", "バナナ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "先生に質問をしました。"},{"voice": "female", "text": "何を質問しましたか。"},{"voice": "male", "text": "文法についてです。"}],
    "question": "男の人は誰に質問しましたか。",
    "options": ["先生", "友達", "母"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "バスがなかなか来ません。"},{"voice": "male", "text": "何かあったのかもしれませんね。"}],
    "question": "どうしましたか。",
    "options": ["バスが来ない", "バスに乗った", "バスを待っていない"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この料理は塩辛いです。"},{"voice": "female", "text": "水を飲んでください。"}],
    "question": "料理はどんな味ですか。",
    "options": ["塩辛い", "甘い", "辛い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日歯を磨きます。"},{"voice": "male", "text": "当然ですよね。"}],
    "question": "女の人は毎日何を磨きますか。",
    "options": ["歯", "靴", "窓"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "駅まで歩いて１０分かかります。"},{"voice": "female", "text": "歩いて１０分ですか。近いですね。"}],
    "question": "男の人は駅までどうやって行きますか。",
    "options": ["歩いて", "走って", "自転車で"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "明日は休みですから、ゆっくり寝ます。"},{"voice": "male", "text": "私も休みです。一緒に遊びましょうか。"}],
    "question": "女の人は明日は何をしますか。",
    "options": ["ゆっくり寝ます", "働きます", "勉強します"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "このかばんは軽くて便利です。"},{"voice": "female", "text": "旅行にいいですね。"}],
    "question": "かばんはどうですか。",
    "options": ["軽くて便利", "重くて不便", "大きくて重い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は魚が食べられません。"},{"voice": "male", "text": "では、肉料理にしましょう。"}],
    "question": "女の人は何が食べられませんか。",
    "options": ["魚", "肉", "野菜"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "友達から手紙が来ました。"},{"voice": "female", "text": "何が書いてありましたか。"},{"voice": "male", "text": "元気だそうです。"}],
    "question": "男の人は誰から手紙が来ましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "エレベーターで５階へ行きます。"},{"voice": "male", "text": "エレベーターはどこですか。"},{"voice": "female", "text": "あそこです。"}],
    "question": "女の人は何で５階へ行きますか。",
    "options": ["エレベーター", "階段", "エスカレーター"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "今日は早く帰りたいです。"},{"voice": "female", "text": "何か予定がありますか。"},{"voice": "male", "text": "はい、家族と食事します。"}],
    "question": "男の人は今日はどうしたいですか。",
    "options": ["早く帰りたい", "遅く帰りたい", "帰りたくない"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "この時計は壊れています。"},{"voice": "male", "text": "新しいのを買いましょう。"}],
    "question": "この時計はどうですか。",
    "options": ["壊れている", "新しい", "高い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日牛乳を飲んでいます。"},{"voice": "female", "text": "私は豆乳を飲んでいます。"}],
    "question": "男の人は毎日何を飲んでいますか。",
    "options": ["牛乳", "コーヒー", "水"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は日本に３年住んでいます。"},{"voice": "male", "text": "長いですね。日本語が上手なわけですね。"}],
    "question": "女の人はどのくらい日本に住んでいますか。",
    "options": ["３年", "１年", "５年"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この道をまっすぐ行ってください。"},{"voice": "female", "text": "まっすぐですね。わかりました。"}],
    "question": "どうやって行きますか。",
    "options": ["まっすぐ", "右へ", "左へ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "明日はテストがあるので、今夜勉強します。"},{"voice": "male", "text": "何のテストですか。"},{"voice": "female", "text": "漢字のテストです。"}],
    "question": "女の人はなぜ今夜勉強しますか。",
    "options": ["明日テストがあるから", "今日テストがあるから", "勉強が好きだから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "すみません、この漢字の読み方を教えてください。"},{"voice": "female", "text": "「うみ」と読みます。"}],
    "question": "男の人は何を教えてほしいですか。",
    "options": ["漢字の読み方", "漢字の書き方", "漢字の意味"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は甘いものが好きです。"},{"voice": "male", "text": "このチョコレートはいかがですか。"}],
    "question": "女の人は何が好きですか。",
    "options": ["甘いもの", "辛いもの", "苦いもの"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎朝パンとコーヒーを食べます。"},{"voice": "female", "text": "私はご飯と味噌汁です。"}],
    "question": "男の人は毎朝何を食べますか。",
    "options": ["パン", "ご飯", "果物"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日は雨でしたから、家にいました。"},{"voice": "male", "text": "私も家にいました。"}],
    "question": "女の人は昨日はなぜ家にいましたか。",
    "options": ["雨だったから", "暑かったから", "寒かったから"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この傘はとても丈夫です。"},{"voice": "female", "text": "じゃあ、これを買います。"}],
    "question": "傘はどうですか。",
    "options": ["丈夫", "壊れている", "小さい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は英語が少し話せます。"},{"voice": "male", "text": "私は英語が話せません。日本語だけです。"}],
    "question": "女の人は何が少し話せますか。",
    "options": ["英語", "日本語", "中国語"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "先生は今、会議室にいます。"},{"voice": "female", "text": "じゃあ、後で質問しに行きましょう。"}],
    "question": "先生はどこにいますか。",
    "options": ["会議室", "教室", "職員室"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "来週、友達と旅行に行きます。"},{"voice": "male", "text": "どこへ行きますか。"},{"voice": "female", "text": "京都へ行きます。"}],
    "question": "女の人は誰と旅行に行きますか。",
    "options": ["友達", "家族", "先生"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この店は夜１０時まで開いています。"},{"voice": "female", "text": "じゃあ、８時に会いましょう。"}],
    "question": "店は何時まで開いていますか。",
    "options": ["１０時", "９時", "１１時"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "私は毎日日本語の単語を覚えます。"},{"voice": "male", "text": "何個覚えますか。"},{"voice": "female", "text": "５個です。"}],
    "question": "女の人は毎日何を覚えますか。",
    "options": ["日本語の単語", "漢字", "文法"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "財布を家に忘れてしまいました。"},{"voice": "female", "text": "私はスマホを忘れました。"}],
    "question": "男の人は何を忘れましたか。",
    "options": ["財布", "鍵", "スマホ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "バスより電車のほうが速いです。"},{"voice": "male", "text": "でも、バスのほうが安いです。"}],
    "question": "どちらが速いですか。",
    "options": ["電車", "バス", "同じ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この部屋は明るくて広いです。"},{"voice": "female", "text": "私は狭くても明るい部屋がいいです。"}],
    "question": "男の人の部屋はどうですか。",
    "options": ["明るくて広い", "暗くて狭い", "明るくて狭い"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、お水をもらえますか。"},{"voice": "male", "text": "はい、どうぞ。"}],
    "question": "女の人は何を頼みましたか。",
    "options": ["お水", "お茶", "メニュー"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "毎日８時間働いています。"},{"voice": "female", "text": "私は９時間働いています。"}],
    "question": "男の人は毎日何時間働いていますか。",
    "options": ["８時間", "１０時間", "６時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "明日の朝は雪が降るでしょう。"},{"voice": "male", "text": "寒くなりますね。"}],
    "question": "明日の朝の天気はどうですか。",
    "options": ["雪", "雨", "晴れ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は犬より猫が好きです。"},{"voice": "female", "text": "私は犬も猫も好きです。"}],
    "question": "男の人はどちらが好きですか。",
    "options": ["猫", "犬", "鳥"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "友達に本を借りました。"},{"voice": "male", "text": "何の本ですか。"},{"voice": "female", "text": "日本語の歴史の本です。"}],
    "question": "女の人は誰に本を借りましたか。",
    "options": ["友達", "先生", "家族"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この料理は熱いですから、気をつけてください。"},{"voice": "female", "text": "はい、ふーふーして食べます。"}],
    "question": "料理はどうですか。",
    "options": ["熱い", "冷たい", "温かい"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "毎日部屋を掃除します。"},{"voice": "male", "text": "私は休みの日だけ掃除します。"}],
    "question": "女の人は毎日どこを掃除しますか。",
    "options": ["部屋", "台所", "トイレ"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "私は歌手の山下さんが好きです。"},{"voice": "female", "text": "山下さんの歌はとてもいいですよね。"}],
    "question": "男の人は誰が好きですか。",
    "options": ["山下さん", "田中さん", "佐藤さん"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "昨日の夜は２時間テレビを見ました。"},{"voice": "male", "text": "何を見ましたか。"},{"voice": "female", "text": "ドラマを見ました。"}],
    "question": "女の人は何時間テレビを見ましたか。",
    "options": ["２時間", "１時間", "３時間"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "male", "text": "この靴は小さすぎます。"},{"voice": "female", "text": "もっと大きいサイズはありますか。"}],
    "question": "靴はどうですか。",
    "options": ["小さすぎる", "大きすぎる", "高すぎる"],
    "answer": 0
  },
  {
    "audioText": [{"voice": "female", "text": "すみません、駅はどこですか。"},{"voice": "male", "text": "駅はあそこです。あのビルの隣です。"}],
    "question": "女の人は何を探していますか。",
    "options": ["駅", "銀行", "病院"],
    "answer": 0
  }
];