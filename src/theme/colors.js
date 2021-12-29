const colors = {
  colorsWhite: "#ffffff",
  colorsWhiteBlue: "#f0f4f9",
  colorsBlack: "#000000",
  colorsGrey: "#768ea6",
  colorsGreyLight: "#a3b7cd",
  colorsGreyLighter: "#dfe6f1",
  colorsPrimary: "#01aec8",
  colorsSecondary: "#cceff4",
  colorsInfo: "#117eff",
  colorsSuccess: "#18cd97",
  colorsWarning: "#ff9c11",
  colorsError: "#ec5997",
  groups: [
    {
      name: "Basique",
      colors: [
        'colorsWhite',
        'colorsBlack'
      ]
    },
    {
      name: "Flatchr",
      colors: [
        'colorsPrimary',
        'colorsSecondary'
      ]
    },
    {
      name: "Status",
      colors: [
        'colorsInfo',
        'colorsSuccess',
        'colorsWarning',
        'colorsError',
      ]
    },
    {
      name: "Textes",
      colors: [
        'colorsGrey'
      ]
    },
    {
      name: "Backgrounds",
      colors: [
        'colorsWhiteBlue'
      ]
    },
    {
      name: "Borders",
      colors: [
        'colorsGreyLight',
        'colorsGreyLighter'
      ]
    },
  ]
};

export default colors;
