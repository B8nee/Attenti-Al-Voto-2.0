export let GameData: any = {
  globals: {
    leaderboard: false,
    gameWidth: 1280,
    gameHeight: 600,
    bgColor: "#ffffff",
    debug: true,
  },

  preloader: {
    bgColor: "",
    image: "logo",
    imageX: 1280,
    imageY: 600,
    loadingText: "",
  },

  spritesheets: [
    {
      name: "studente",
      path: "assets/images/studente.png",
      width: 64,
      height: 88,
      frames: 4,
    },
    {
      name: "studenteLeft",
      path: "assets/images/studenteLeft.png",
      width: 64,
      height: 88,
      frames: 4,
    },
  ],

  images: [
    { name: "sfondoComandi", path: "assets/images/sfondoComandi.jpg" },
    { name: "scuola3", path: "assets/images/scuola3.png" },
    { name: "comandiMovimento", path: "assets/images/comandiMovimento.png" },
    { name: "sfondoIntro", path: "assets/images/sfondoIntro.png" },
    { name: "1", path: "assets/images/1.png" },
    { name: "2", path: "assets/images/2.png" },
    { name: "3", path: "assets/images/3.png" },
    { name: "4", path: "assets/images/4.png" },
    { name: "5", path: "assets/images/5.png" },
    { name: "6", path: "assets/images/6.png" },
    { name: "7", path: "assets/images/7.png" },
    { name: "8", path: "assets/images/8.png" },
    { name: "9", path: "assets/images/9.png" },
    { name: "10", path: "assets/images/10.png" },
    { name: "prof", path: "assets/images/prof.jpg" },
  ],

  sounds: [
    {
      name: "music0",
      paths: ["assets/sounds/music0.ogg", "assets/sounds/music0.m4a"],
      volume: 1,
      loop: false,
      frame: 1,
    },
  ],
  audio: [
    {
      name: "sfx",
      jsonpath: "assets/sounds/sfx.json",
      paths: ["assets/sounds/sfx.ogg", "assets/sounds/sfx.m4a"],
      instances: 10,
    },
  ],

  script: [
    {
      key: "webfont",
      path: "assets/js/webfonts.js",
    },
  ],

  bitmapfont: [
    {
      name: "arcade",
      imgpath: "assets/fonts/arcade.png",
      xmlpath: "assets/fonts/arcade.xml",
    },
  ],
};
