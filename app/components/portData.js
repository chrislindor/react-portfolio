const imgPath = "./assets/images/"

const portData = [
  {
    title: "Supreme NY",
    thumbImg: `${imgPath}supreme/supreme-thumb.png`,
    category: 'Design',
    intro: {
      text:" Supreme NY was established in 1994, and has grew to be the embodiment of skate and street culture through its 20+ year run. I created a mock Ad campaign from a photoshoot that I also did that includes subway ads, a metrocard ad and a outdoor billboard. ",
      img: `${imgPath}supreme/sup-intro.png`
    },
    item1: {
      caption: "NYC metro card design inspired by the brands iconic logo that you will find plastered all over NYC using stickers the brand gives out with every purchase of their merchandise. ",
      imgs: [`${imgPath}supreme/metro-display.png`,`${imgPath}supreme/metro-mockup.png`]
    },
    item2: {
      caption: "Ads created for the vertical spaces and poster areas of NYC subway cars.",
      imgs: [`${imgPath}supreme/square-ad.png`,`${imgPath}supreme/square-ad-mockup.png`, `${imgPath}supreme/wide-ad.png`,`${imgPath}supreme/wide-ad-mockup.png`]
    },
    skills: "Photography,  Design"
  },
  {
    title: "test2",
    thumbImg: "./assets/images/test-back.png",
    category: 'Design'
  },
  {
    title: "test3",
    thumbImg: "./assets/images/test-back.png",
    category: 'Development'
  },
  {
    title: "test4",
    thumbImg: "./assets/images/test-back.png",
    category: 'Development'
  },
  {
    title: "test5",
    thumbImg: "./assets/images/test-back.png",
    category: 'Design'
  }
];

export default portData;
