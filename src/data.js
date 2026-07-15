const player = (name, role) => ({ name, role });

export const teams = [
  {
    id: "spain",
    name: "Spain",
    localName: "España",
    code: "ESP",
    colors: ["#aa151b", "#f1bf00", "#aa151b"],
    ink: "#6e171a",
    wash: "#e9d4b0",
    wallOpacity: 0.91,
    skyOpacity: 0.78,
    curtain: { width: 0.63, anchor: 0.31 },
    poem: "红土 · 金光 —— 一面由二十六个名字系起来的旗。",
    architecture: "取自西班牙广场与晒过太阳的檐口, 一列瓷砖市政廊道。",
    commentary: {
      file: "./audio/spain-qf-merino-88.mp3",
      line: "米克尔·梅里诺 —— 对比利时 88 分钟绝杀",
      clips: [
        {
          file: "./audio/spain-opener-vs-belgium.mp3",
          line: "西班牙攻破比利时球门"
        },
        {
          file: "./audio/spain-qf-merino-88.mp3",
          line: "米克尔·梅里诺 —— 对比利时 88 分钟绝杀"
        }
      ],
      sourceLabel: "FIFA YouTube 官方 · 西班牙 2–1 比利时",
      sourceUrl: "https://www.youtube.com/watch?v=VHoctq0AOg8",
      credit: "FIFA 官方 YouTube 集锦"
    },
    sourceLabel: "FIFA 名单公告 · 2026 年 5 月 25 日",
    sourceUrl: "https://www.fifa.com/en/articles/spain-squad-announcement-luis-de-la-fuente",
    players: [
      player("Unai Simón", "门将"), player("David Raya", "门将"), player("Joan García", "门将"),
      player("Pedro Porro", "后卫"), player("Marcos Llorente", "后卫"), player("Aymeric Laporte", "后卫"),
      player("Pau Cubarsí", "后卫"), player("Marc Pubill", "后卫"), player("Eric García", "后卫"),
      player("Marc Cucurella", "后卫"), player("Alejandro Grimaldo", "后卫"),
      player("Rodri Hernández", "中场"), player("Martín Zubimendi", "中场"), player("Pedri González", "中场"),
      player("Fabián Ruiz", "中场"), player("Mikel Merino", "中场"), player("Gavi Páez", "中场"),
      player("Álex Baena", "中场"),
      player("Mikel Oyarzabal", "前锋"), player("Lamine Yamal", "前锋"), player("Ferran Torres", "前锋"),
      player("Borja Iglesias", "前锋"), player("Dani Olmo", "前锋"), player("Víctor Muñoz", "前锋"),
      player("Nico Williams", "前锋"), player("Yeremy Pino", "前锋")
    ]
  },
  {
    id: "england",
    name: "England",
    localName: "England",
    code: "ENG",
    colors: ["#f3f0e6", "#ce1124", "#142a52"],
    ink: "#13264b",
    wash: "#dce1e4",
    wallOpacity: 0.87,
    skyOpacity: 0.62,
    curtain: { width: 0.57, anchor: 0.325 },
    poem: "白底 · 圣乔治十字 —— 名字如城中路线交错。",
    architecture: "维多利亚时代车站穹顶, 铸铁 · 玻璃 · 有节制的韵律。",
    commentary: {
      file: "./audio/england-qf-bellingham-93.mp3",
      line: "英格兰 —— 对挪威加时逆转",
      clips: [
        {
          file: "./audio/england-equalizer-vs-norway.mp3",
          line: "贝林厄姆为英格兰扳平"
        },
        {
          file: "./audio/england-qf-bellingham-93.mp3",
          line: "英格兰加时逆转完成"
        },
        {
          file: "./audio/england-semi-final-whistle.mp3",
          line: "英格兰晋级四强"
        }
      ],
      sourceLabel: "FIFA 完整集锦 · 挪威 1–2 英格兰",
      sourceUrl: "https://www.youtube.com/watch?v=PnFUiq8m9os",
      credit: "FIFA 官方 YouTube 集锦"
    },
    sourceLabel: "英足总官网 · 2026 年 6 月 17 日更新",
    sourceUrl: "https://www.englandfootball.com/articles/2026/May/22/england-mens-world-cup-2026-squad-named-by-thomas-tuchel-20262205",
    players: [
      player("Dean Henderson", "门将"), player("Jordan Pickford", "门将"), player("James Trafford", "门将"),
      player("Dan Burn", "后卫"), player("Trevoh Chalobah", "后卫"), player("Marc Guéhi", "后卫"),
      player("Reece James", "后卫"), player("Ezri Konsa", "后卫"), player("Nico O'Reilly", "后卫"),
      player("Jarell Quansah", "后卫"), player("Djed Spence", "后卫"), player("John Stones", "后卫"),
      player("Elliot Anderson", "中场"), player("Jude Bellingham", "中场"), player("Eberechi Eze", "中场"),
      player("Jordan Henderson", "中场"), player("Kobbie Mainoo", "中场"), player("Declan Rice", "中场"),
      player("Morgan Rogers", "中场"),
      player("Anthony Gordon", "前锋"), player("Harry Kane", "前锋"), player("Noni Madueke", "前锋"),
      player("Marcus Rashford", "前锋"), player("Bukayo Saka", "前锋"), player("Ivan Toney", "前锋"),
      player("Ollie Watkins", "前锋")
    ]
  },
  {
    id: "france",
    name: "France",
    localName: "France",
    code: "FRA",
    colors: ["#173b78", "#f3eee1", "#d82232"],
    ink: "#1d2f59",
    wash: "#d8d7cf",
    wallOpacity: 0.89,
    skyOpacity: 0.72,
    curtain: { width: 0.65, anchor: 0.36 },
    poem: "蓝 · 石白 · 红 —— 三色在玻璃穹顶下流动。",
    architecture: "美好年代的地铁入口: 曲面玻璃 · 铁茎 · 新艺术字体。",
    commentary: {
      file: "./audio/france-qf-mbappe-60.mp3",
      line: "法国 —— 四分之一决赛对摩洛哥掌控全场",
      clips: [
        {
          file: "./audio/france-qf-mbappe-60.mp3",
          line: "姆巴佩为法国破门"
        },
        {
          file: "./audio/france-second-goal-vs-morocco.mp3",
          line: "法国对摩洛哥再下一城"
        },
        {
          file: "./audio/france-semi-final-whistle.mp3",
          line: "法国挺进半决赛"
        }
      ],
      sourceLabel: "FIFA 完整集锦 · 法国 2–0 摩洛哥",
      sourceUrl: "https://www.youtube.com/watch?v=Lfo49ZbV4WU",
      credit: "FIFA 官方 YouTube 集锦"
    },
    sourceLabel: "FIFA 名单公告 · 2026 年 5 月 11 日",
    sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/france-world-cup-squad-named",
    players: [
      player("Mike Maignan", "门将"), player("Robin Risser", "门将"), player("Brice Samba", "门将"),
      player("Lucas Digne", "后卫"), player("Malo Gusto", "后卫"), player("Lucas Hernández", "后卫"),
      player("Theo Hernández", "后卫"), player("Ibrahima Konaté", "后卫"), player("Jules Koundé", "后卫"),
      player("Maxence Lacroix", "后卫"), player("William Saliba", "后卫"), player("Dayot Upamecano", "后卫"),
      player("N'Golo Kanté", "中场"), player("Manu Koné", "中场"), player("Adrien Rabiot", "中场"),
      player("Aurélien Tchouaméni", "中场"), player("Warren Zaïre-Emery", "中场"),
      player("Maghnes Akliouche", "前锋"), player("Bradley Barcola", "前锋"), player("Rayan Cherki", "前锋"),
      player("Ousmane Dembélé", "前锋"), player("Désiré Doué", "前锋"), player("Jean-Philippe Mateta", "前锋"),
      player("Kylian Mbappé", "前锋"), player("Michael Olise", "前锋"), player("Marcus Thuram", "前锋")
    ]
  },
  {
    id: "argentina",
    name: "Argentina",
    localName: "Argentina",
    code: "ARG",
    colors: ["#75aadb", "#f4f0e8", "#f6b40e"],
    ink: "#24547d",
    wash: "#d5e3e8",
    wallOpacity: 0.87,
    skyOpacity: 0.72,
    curtain: { width: 0.655, anchor: 0.36 },
    poem: "天蓝 · 月白 · 天蓝 —— 一帘布宜诺斯艾利斯之光, 五月太阳居中。",
    architecture: "布宜诺斯艾利斯阳台穹顶, fileteado 曲线与波纹遮阳板。",
    commentary: {
      file: "./audio/argentina-qf-alvarez-112.mp3",
      line: "阿根廷 —— 四分之一决赛对瑞士戏剧性一战",
      clips: [
        {
          file: "./audio/argentina-opener-vs-switzerland.mp3",
          line: "阿根廷攻破瑞士球门"
        },
        {
          file: "./audio/argentina-qf-alvarez-112.mp3",
          line: "世界冠军的成色 —— 阿尔瓦雷斯"
        },
        {
          file: "./audio/argentina-semi-final-clincher.mp3",
          line: "阿根廷跻身四强"
        }
      ],
      sourceLabel: "FIFA 完整集锦 · 阿根廷 3–1 瑞士",
      sourceUrl: "https://www.youtube.com/watch?v=zZxxDbLxEi4",
      credit: "FIFA 官方 YouTube 集锦"
    },
    sourceLabel: "阿足协 · Marcos Senesi 顶替入选, 2026 年 6 月 6 日",
    sourceUrl: "https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/articles/leonardo-balerdi-baja-copa-mundial-argentina",
    players: [
      player("Emiliano Martínez", "门将"), player("Gerónimo Rulli", "门将"), player("Juan Musso", "门将"),
      player("Nahuel Molina", "后卫"), player("Gonzalo Montiel", "后卫"), player("Cristian Romero", "后卫"),
      player("Marcos Senesi", "后卫"), player("Nicolás Otamendi", "后卫"), player("Lisandro Martínez", "后卫"),
      player("Nicolás Tagliafico", "后卫"), player("Facundo Medina", "后卫"),
      player("Leandro Paredes", "中场"), player("Alexis Mac Allister", "中场"), player("Rodrigo De Paul", "中场"),
      player("Giovani Lo Celso", "中场"), player("Exequiel Palacios", "中场"), player("Enzo Fernández", "中场"),
      player("Valentín Barco", "中场"),
      player("Lionel Messi", "前锋"), player("Julián Álvarez", "前锋"), player("Lautaro Martínez", "前锋"),
      player("Thiago Almada", "前锋"), player("Nico Paz", "前锋"), player("Nicolás González", "前锋"),
      player("Giuliano Simeone", "前锋"), player("José Manuel López", "前锋")
    ]
  }
];
