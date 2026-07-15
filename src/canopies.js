export const canopyImages = {
  spain: {
    src: "./canopies/spain-canopy.webp",
    alt: "西班牙风格拟真穹顶: 赤陶瓦 · 雕刻木梁 · 蓝白釉砖细节"
  },
  england: {
    src: "./canopies/england-canopy.webp",
    alt: "英格兰维多利亚式火车站穹顶: 铸铁架 · 罗纹玻璃"
  },
  france: {
    src: "./canopies/france-canopy.webp",
    alt: "法国美好年代穹顶: 铜绿金属 · 琥珀玻璃"
  },
  argentina: {
    src: "./canopies/argentina-canopy.webp",
    alt: "布宜诺斯艾利斯穹顶: 波纹锌板 · fileteado 铁艺"
  }
};

export const wallImages = {
  spain: {
    src: "./walls/spain-wall-windows-v2.webp",
    alt: "西班牙石灰墙立面: 居中一对拱形铁栅窗"
  },
  england: {
    src: "./walls/england-wall-windows-v2.webp",
    alt: "熏黑砖英式立面: 居中三扇酒瓶绿推拉窗"
  },
  france: {
    src: "./walls/france-wall-windows-v2.webp",
    alt: "巴黎石灰岩立面: 居中一扇新艺术风格大平开窗"
  },
  argentina: {
    src: "./walls/argentina-wall-windows-v2.webp",
    alt: "布宜诺斯艾利斯风蚀立面: 居中一对青绿色百叶窗"
  }
};

export const skyImages = {
  spain: {
    src: "./skies/spain-sky.webp",
    alt: "地中海午后暖色天空"
  },
  england: {
    src: "./skies/england-sky.webp",
    alt: "雨后英格兰银灰天, 层云叠嶂"
  },
  france: {
    src: "./skies/france-sky.webp",
    alt: "巴黎黄昏蓝灰天"
  },
  argentina: {
    src: "./skies/argentina-sky.webp",
    alt: "布宜诺斯艾利斯辽阔的午后天"
  }
};

export const plasterImages = {
  spain: { src: "./plaster/spain-plaster.webp" },
  england: { src: "./plaster/england-plaster.webp" },
  france: { src: "./plaster/france-plaster.webp" },
  argentina: { src: "./plaster/argentina-plaster.webp" }
};

[canopyImages, wallImages, skyImages, plasterImages].flatMap((collection) => Object.values(collection)).forEach(({ src }) => {
  const image = new Image();
  image.src = src;
});
