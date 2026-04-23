// Asset map for the Lithuania booth quiz.
// Keys match QUIZ_VISUALS in easy_quiz_question_bank.js.

const QUIZ_ASSET_MAP = {
  lt_flag: {
    kind: "svg",
    src: "./assets/svg/flags/lithuania.svg",
    alt: "Flag of Lithuania",
  },
  myanmar_flag: {
    kind: "svg",
    src: "./assets/svg/flags/myanmar.svg",
    alt: "Flag of Myanmar",
  },
  colombia_flag: {
    kind: "svg",
    src: "./assets/svg/flags/colombia.svg",
    alt: "Flag of Colombia",
  },
  ethiopia_flag: {
    kind: "svg",
    src: "./assets/svg/flags/ethiopia.svg",
    alt: "Flag of Ethiopia",
  },
  germany_flag: {
    kind: "svg",
    src: "./assets/svg/flags/germany.svg",
    alt: "Flag of Germany",
  },
  latvia_flag: {
    kind: "svg",
    src: "./assets/svg/flags/latvia.svg",
    alt: "Flag of Latvia",
  },
  estonia_flag: {
    kind: "svg",
    src: "./assets/svg/flags/estonia.svg",
    alt: "Flag of Estonia",
  },
  poland_flag: {
    kind: "svg",
    src: "./assets/svg/flags/poland.svg",
    alt: "Flag of Poland",
  },
  white_stork: {
    kind: "svg",
    src: "./assets/svg/symbols/white-stork.svg",
    alt: "White stork",
  },
  vytis: {
    kind: "svg",
    src: "./assets/svg/symbols/vytis.svg",
    alt: "Vytis coat of arms symbol",
  },
  amber: {
    kind: "image",
    src: "./assets/web/amber.webp",
    originalSrc: "./assets/images/amber.jpg",
    alt: "Baltic amber pieces",
  },
  basketball: {
    kind: "svg",
    src: "./assets/svg/symbols/basketball.svg",
    alt: "Basketball",
  },
  gediminas_tower: {
    kind: "image",
    src: "./assets/web/gediminas-tower.webp",
    originalSrc: "./assets/images/gediminas-tower.jpg",
    alt: "Gediminas Tower in Vilnius",
  },
  trakai_castle: {
    kind: "image",
    src: "./assets/web/trakai-castle.webp",
    originalSrc: "./assets/images/trakai-castle.jpg",
    alt: "Trakai Island Castle",
  },
  hill_of_crosses: {
    kind: "image",
    src: "./assets/web/hill-of-crosses.webp",
    originalSrc: "./assets/images/hill-of-crosses.jpg",
    alt: "Hill of Crosses in Lithuania",
  },
  cepelinai: {
    kind: "image",
    src: "./assets/web/cepelinai.webp",
    originalSrc: "./assets/images/cepelinai.jpg",
    alt: "Cepelinai potato dumplings",
  },
  saltibarsciai: {
    kind: "image",
    src: "./assets/web/saltibarsciai.webp",
    originalSrc: "./assets/images/saltibarsciai.jpg",
    alt: "Saltibarsciai pink beet soup",
  },
  acorn_oak: {
    kind: "svg",
    src: "./assets/svg/symbols/acorn.svg",
    secondarySrc: "./assets/svg/symbols/oak-leaf.svg",
    alt: "Acorn and oak nature symbol",
  },
};

if (typeof window !== "undefined") {
  window.QUIZ_ASSET_MAP = QUIZ_ASSET_MAP;
}

