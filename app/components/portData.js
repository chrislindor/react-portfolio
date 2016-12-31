const imgPath = "./assets/images/"

const portData = [
  {
    title: "Supreme NY",
    url: "supreme",
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
      caption: "Ads created for the vertical spaces and poster areas of NYC subway cars. Supreme doesn't advertise in traditional manners often, so to stick with the brands aesthetic I elected to keep this part of the campaign clean and to the point.",
      imgs: [`${imgPath}supreme/square-ad.png`,`${imgPath}supreme/square-ad-mockup.png`, `${imgPath}supreme/wide-ad.png`,`${imgPath}supreme/wide-ad-mockup.png`]
    },
    item3: {
      caption: "The last piece of this project is a billboard mocked up to be placed close to Supreme’s base of operations in SoHo. ",
      imgs: [`${imgPath}supreme/outdoor-ad.png`,`${imgPath}supreme/outdoor-ad-mockup.png`]
    },
    skills: "Photography,  Design"
  },
  {
    title: "test2",
    url: "test2",
    thumbImg: "./assets/images/test-back.png",
    category: 'Design'
  },
  {
    title: "test3",
    url: "test3",
    thumbImg: "./assets/images/test-back.png",
    category: 'Development'
  },
  {
    title: "test4",
    url: "test4",
    thumbImg: "./assets/images/test-back.png",
    category: 'Development'
  },
  {
    title: "test5",
    url: "test5",
    thumbImg: "./assets/images/test-back.png",
    category: 'Design'
  }
];

export default portData;
