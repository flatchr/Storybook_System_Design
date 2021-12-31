const mainColors = {
  primary100: null,
  primary200: null,
  primary400: "#01AEC8",
  primary600: null,
  primary800: null,
  secondary100: null,
  secondary200: null,
  secondary400: "#CCEFF4",
  secondary600: null,
  secondary800: null,
  neutral0: "#ffffff",
  neutral200: "#f0f4f9",
  neutral400: "#dfe6f1",
  neutral600: "#a3b7cd",
  neutral800: "#768ea6",
  specialPrimary: '#0A1F33',
  specialSecondary: '#2C4460',
  info100: null,
  info200: null,
  info400: "#117eff",
  info600: null,
  info800: null,
  success100: null,
  success200: null,
  success400: "#18cd97",
  success600: null,
  success800: null,
  warning100: null,
  warning200: null,
  warning400: "#ff9c11",
  warning600: null,
  warning800: null,
  error100: null,
  error200: null,
  error400: "#ec5997",
  error600: null,
  error800: null,
};

const aliases = {
  background200: mainColors.neutral200,
  border400: mainColors.neutral400,
  border600: mainColors.neutral600,
  textPrimary: mainColors.neutral800,
  textSecondary: mainColors.specialPrimary,
};

const colors = {
  ...mainColors,
  ...aliases,
};

export const groups = [
  {
    name: "Primary",
    colors: [
      'primary100',
      'primary200',
      'primary400',
      'primary600',
      'primary800',
    ]
  },
  {
    name: "Secondary",
    colors: [
      'secondary100',
      'secondary200',
      'secondary400',
      'secondary600',
      'secondary800',
    ]
  },
  {
    name: "Specials",
    colors: [
      'specialPrimary',
      'specialSecondary'
    ]
  },
  {
    name: "Info",
    colors: [
      'info100',
      'info200',
      'info400',
      'info600',
      'info800',
    ]
  },
  {
    name: "Warning",
    colors: [
      'warning100',
      'warning200',
      'warning400',
      'warning600',
      'warning800',
    ]
  },
  {
    name: "Error",
    colors: [
      'error100',
      'error200',
      'error400',
      'error600',
      'error800',
    ]
  },
  {
    name: "Success",
    colors: [
      'success100',
      'success200',
      'success400',
      'success600',
      'success800',
    ]
  },
  {
    name: "Neutrals",
    colors: [
      'neutral0',
      'neutral200',
      'neutral400',
      'neutral600',
      'neutral800',

    ]
  },
];

export const usages = [
  {
    name: "Texts",
    colors: [
      'textPrimary',
      'textSecondary'
    ]
  },
  {
    name: "Backgrounds",
    colors: [
      'background200'
    ]
  },
  {
    name: "Borders",
    colors: [
      'border400',
      'border600',
    ]
  },
];

export default colors;
