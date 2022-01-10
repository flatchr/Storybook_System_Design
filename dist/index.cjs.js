'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var icons = require('@flatchr/icons');
var helper = require('@flatchr/helper');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

var _templateObject, _templateObject2, _templateObject3;
var InitialsWrapper = styled__default["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  letter-spacing: 1.25px;\n  transform: translateX(1px);\n"])), function (p) {
  return p.theme.colors.neutral0;
}, function (p) {
  return p.theme.fonts.lato.name;
}, function (p) {
  return p.theme.fonts.lato.variants.regular;
});
var Wrapper = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  ", ";\n  border-radius: 50%;\n  color: $color-grey-light;\n  display: flex;\n  flex: 0 0 auto;\n  height: ", "px;\n  justify-content: center;\n  margin: 0 auto;\n  width: ", "px;\n  svg {\n    transform: translateY(-1px);\n    path {\n      fill: ", " !important;\n    }\n  }\n  ", " {\n    font-size: ", "px;\n  }\n"])), function (p) {
  return p.withInitials ? p.theme.colors.primary400 : p.theme.colors.background200;
}, function (p) {
  if (p.picture) {
    return styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-image: url(", ");\n        background-position: 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n      "])), p.picture);
  }
}, function (p) {
  return p.height;
}, function (p) {
  return p.width;
}, function (p) {
  return p.theme.colors.textPrimary;
}, InitialsWrapper, function (p) {
  return Math.floor(p.height * .4);
});

var UserAvatar = function UserAvatar(props) {
  var _props$picture = props.picture,
      picture = _props$picture === void 0 ? null : _props$picture,
      _props$size = props.size,
      size = _props$size === void 0 ? 35 : _props$size,
      _props$withInitials = props.withInitials,
      withInitials = _props$withInitials === void 0 ? null : _props$withInitials;
  var initials = React.useMemo(function () {
    var _withInitials$firstna;

    if (!!(withInitials !== null && withInitials !== void 0 && (_withInitials$firstna = withInitials.firstname) !== null && _withInitials$firstna !== void 0 && _withInitials$firstna.length)) {
      return helper.typography.getNameInitials(withInitials.firstname, withInitials === null || withInitials === void 0 ? void 0 : withInitials.lastname);
    }

    return null;
  }, [withInitials]);
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    className: "user-avatar",
    picture: initials ? null : picture,
    height: size,
    width: size,
    withInitials: !!(initials !== null && initials !== void 0 && initials.length)
  }, !initials && !picture && /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
    height: Math.floor(size * .35),
    width: Math.floor(size * .35)
  }), initials && /*#__PURE__*/React__default["default"].createElement(InitialsWrapper, null, initials));
};

UserAvatar.propTypes = {
  size: PropTypes__default["default"].number,
  picture: PropTypes__default["default"].string,
  withInitials: PropTypes__default["default"].oneOfType([PropTypes__default["default"].shape({
    firstname: PropTypes__default["default"].string.isRequired,
    lastname: PropTypes__default["default"].string
  }), PropTypes__default["default"].number // used for null
  ])
};

exports.UserAvatar = UserAvatar;
exports.theme = theme;
