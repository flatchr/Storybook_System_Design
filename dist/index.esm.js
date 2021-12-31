import styled, { css } from 'styled-components';
export { default as ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { PeopleIcon } from '@flatchr/icons';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var mainColors = {
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
  error800: null
};
var aliases = {
  background200: mainColors.neutral200,
  border400: mainColors.neutral400,
  border600: mainColors.neutral600,
  textPrimary: mainColors.neutral800,
  textSecondary: mainColors.specialPrimary
};

var colors = _objectSpread2(_objectSpread2({}, mainColors), aliases);

var fonts = {
  lato: {
    import: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    value: "\"Lato\", Arial, Helvetica, sans-serif",
    labelName: 'Lato',
    variants: {
      regular: '400',
      regularItalic: '400i',
      bold: '700',
      boldItalic: '700i'
    }
  },
  poppins: {
    import: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&display=swap",
    name: "\"Poppins\", Arial, Helvetica, sans-serif",
    labelName: 'Poppins',
    variants: {
      light: '300',
      lightItalic: '300i',
      regular: '400',
      regularItalic: '400i',
      medium: '500',
      semiBold: '600',
      bold: '700'
    }
  }
};

var typography = {
  sizes: {
    xSmall: '10px',
    small: '12px',
    regular: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '24px',
    xxLarge: '34px'
  }
};

var theme = {
  colors: colors,
  fonts: fonts,
  typography: typography
};

var _templateObject, _templateObject2;
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  ", ";\n  border-radius: 50%;\n  color: $color-grey-light;\n  display: flex;\n  flex: 0 0 auto;\n  height: ", "px;\n  justify-content: center;\n  margin: 0 auto;\n  width: ", "px;\n  svg {\n    transform: translateY(-1px);\n    path {\n      fill: ", " !important;\n    }\n  }\n"])), function (p) {
  return p.theme.colors.background200;
}, function (p) {
  if (p.picture) {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        background-image: url(", ");\n        background-position: 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n      "])), p.picture);
  }
}, function (p) {
  return p.height;
}, function (p) {
  return p.width;
}, function (p) {
  return p.theme.colors.textPrimary;
});

var UserAvatar = function UserAvatar(props) {
  var _props$picture = props.picture,
      picture = _props$picture === void 0 ? null : _props$picture,
      _props$size = props.size,
      size = _props$size === void 0 ? 35 : _props$size;
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "user-avatar",
    picture: picture,
    height: size,
    width: size
  }, !picture && /*#__PURE__*/React.createElement(PeopleIcon, {
    height: Math.floor(size * .35),
    width: Math.floor(size * .35)
  }));
};

UserAvatar.propTypes = {
  size: PropTypes.number,
  picture: PropTypes.string
};

export { UserAvatar, theme };
