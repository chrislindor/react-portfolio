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
    skills: "Photography,  Design",
    repo: {
      git: "",
      demo: "",
      img: ""
    }
  },
  {
    title: "Absolut Miami",
    url: "absolut-miami",
    thumbImg: `${imgPath}absolut/absolut-thumb.png`,
    category: 'Design',
    intro: {
      text:" Absolut has been known for experimenting with the flavors of their vodka and the design of their bottles. I created an ad campaign for one of their limited products Absolut Miami. All photography used for this project was shot and edited by Colin Lindor and myself. Using these photos I designed promotional landing pages  and print ads for this flavor of Absolut. ",
      img: `${imgPath}absolut/ab-intro.png`
    },
    item1: {
      caption: "Desktop version of landing page for Absolut Miami. The link leads buyers to the Absolut website where they can find the nearest location or online retailer that sells Absolut Miami.",
      imgs: [`${imgPath}absolut/desktop-ad-page.png`,`${imgPath}absolut/desktop-ad-mockup.png`]
    },
    item2: {
      caption: "Mobile version of landing page for Absolut Miami. The link leads buyers to the Absolut website where they can find the nearest location or online retailer that sells Absolut Miami.",
      imgs: [`${imgPath}absolut/mobile-ad-page.png`,`${imgPath}absolut/mobile-ad-mockup.png`]
    },
    item3: {
      caption: "Full page magazine ad designed and shot to focus on the artwork of the bottle. ",
      imgs: [`${imgPath}absolut/print-ad-fold.png`,`${imgPath}absolut/print-ad-mockup.png`]
    },
    skills: "Photography,  Design",
    repo: {
      git: "",
      demo: "",
      img: ""
    }
  },
  {
    title: "jQuery Playground",
    url: "jquery-playground",
    thumbImg: `${imgPath}jquery/jq-thumb.png`,
    category: 'Development',
    intro: {
      text:" A collection of small jQuery apps and games developed while taking a frontend web development course at General Assembly.  Projects included: Instagram photo lookup tool, Cash register, temperature converter,  and to do list. Games developed: hi low and rock paper scissors. ",
      img: `${imgPath}jquery/jq-intro.png`
    },
    repo: {
      git: "https://github.com/chrislindor/chrislindor.github.io",
      demo: "http://chrislindor.github.io/",
      img: `${imgPath}jquery/jq-site-pic.png`
    }
  },
  {
    title: "Chrislindor.com",
    url: "chrislindor",
    thumbImg: `${imgPath}cl/cl-thumb.png`,
    category: 'Development',
    intro: {
      text:" After learning react I wanted a project that I could use to test what I have learned. I decided to embark on redesigning and developing my wordpress portfolio site while learning to use react. Using ES6 classes I created an app that takes information stored in objects to render pages based on the parameter passed to the route. All of the portfolio display pages share one component that changes based on the parameter passed to the “work/:portitemname”.  I will continue to refactor and update this website in the future.",
      img: `${imgPath}cl/cl-intro.png`
    },
    repo: {
      git: "https://github.com/chrislindor/react-portfolio",
      demo: "http://chrislindor.com",
      img: `${imgPath}cl/cl-site-pic.png`
    }
  }
];

export default portData;
