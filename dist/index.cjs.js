'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var icons = require('@flatchr/icons');
var helper = require('@flatchr/helper');
var styled = require('styled-components');
var classNames = require('classnames');
var reactRouterDom = require('react-router-dom');
var tinycolor = require('@ctrl/tinycolor');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    name: "\"Lato\", Arial, Helvetica, sans-serif",
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

var _excluded$3 = ["picture", "height", "width", "withInitials"];

var _templateObject$3, _templateObject2$3, _templateObject3$2;
var InitialsWrapper = styled__default["default"].span(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  letter-spacing: 1.25px;\n  transform: translateX(1px);\n"])), function (p) {
  return p.theme.colors.neutral0;
}, function (p) {
  return p.theme.fonts.lato.name;
}, function (p) {
  return p.theme.fonts.lato.variants.regular;
});
var Wrapper$1 = styled__default["default"](function (_ref) {
  _ref.picture;
      _ref.height;
      _ref.width;
      _ref.withInitials;
      var rest = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React__default["default"].createElement("div", rest);
})(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  ", ";\n  border-radius: 50%;\n  color: $color-grey-light;\n  display: flex;\n  flex: 0 0 auto;\n  height: ", "px;\n  justify-content: center;\n  margin: 0 auto;\n  width: ", "px;\n  svg {\n    transform: translateY(-1px);\n    path {\n      fill: ", " !important;\n    }\n  }\n  ", " {\n    font-size: ", "px;\n  }\n"])), function (p) {
  return p.withInitials ? p.theme.colors.primary400 : p.theme.colors.background200;
}, function (p) {
  if (p.picture) {
    return styled.css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n        background-image: url(", ");\n        background-position: 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n      "])), p.picture);
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
  return /*#__PURE__*/React__default["default"].createElement(Wrapper$1, {
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

var _excluded$2 = ["noMargin", "required"];

var _templateObject$2, _templateObject2$2;
var LabelWrapper = styled__default["default"](function (_ref) {
  _ref.noMargin;
      _ref.required;
      var rest = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React__default["default"].createElement("label", rest);
})(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-bottom: ", "px;\n  ", ";\n"])), function (p) {
  return p.theme.colors.textPrimary;
}, function (p) {
  return p.theme.fonts.lato.name;
}, function (p) {
  return p.theme.typography.sizes.small;
}, function (p) {
  return p.theme.fonts.lato.variants.bold;
}, function (p) {
  return p.noMargin ? 0 : 5;
}, function (p) {
  if (p.required) {
    return styled.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        &:after {\n          color: ", ";\n          display: flex;\n          content: '*';\n          margin-left: 3px;\n        }\n      "])), p.theme.colors.error400);
  }
});

var FormLabel = function FormLabel(props) {
  var _props$label = props.label,
      label = _props$label === void 0 ? 'default text' : _props$label,
      _props$labelFor = props.labelFor,
      labelFor = _props$labelFor === void 0 ? null : _props$labelFor,
      _props$noMargin = props.noMargin,
      noMargin = _props$noMargin === void 0 ? false : _props$noMargin,
      _props$labelId = props.labelId,
      labelId = _props$labelId === void 0 ? null : _props$labelId,
      _props$additionalClas = props.additionalClassNames,
      additionalClassNames = _props$additionalClas === void 0 ? null : _props$additionalClas,
      _props$labelTitle = props.labelTitle,
      labelTitle = _props$labelTitle === void 0 ? null : _props$labelTitle,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? null : _props$onClick,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required;
  var addProps = React.useMemo(function () {
    var newProps = {};

    if (labelFor) {
      newProps.htmlFor = labelFor;
    }

    if (labelId) {
      newProps.id = labelId;
    }

    if (labelTitle) {
      newProps.title = labelTitle;
    }

    if (onClick) {
      newProps.onClick = onClick;
    }

    return newProps;
  }, [labelFor, labelId, labelTitle, onClick]);
  return /*#__PURE__*/React__default["default"].createElement(LabelWrapper, _extends({
    noMargin: noMargin,
    required: required,
    className: classNames__default["default"]('sd-formLabel', _defineProperty({}, additionalClassNames, additionalClassNames !== null))
  }, addProps), label);
};

FormLabel.propTypes = {
  label: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node, PropTypes__default["default"].func, PropTypes__default["default"].number // used for null
  ]).isRequired,
  labelFor: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  noMargin: PropTypes__default["default"].bool,
  labelId: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  additionalClassNames: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  labelTitle: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  required: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].number // used for null
  ])
};

var _excluded$1 = ["isOnError", "isFullWidth"];

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;
var Wrapper = styled__default["default"](function (_ref) {
  _ref.isOnError;
      _ref.isFullWidth;
      var rest = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__default["default"].createElement("div", rest);
})(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  display: flex;\n  font-family: ", ";\n  flex-direction: column;\n  max-width: 275px;\n  width: 100%;\n  textarea {\n    border-style: solid;\n    border-width: 1px;\n    border-color: ", ";\n    border-radius: 5px;\n    box-sizing: border-box;\n    color: ", ";\n    font-family: inherit;\n    font-size: ", ";\n    height: 100%;\n    max-height: 200px;\n    min-height: 150px;\n    padding: 10px;\n    &:hover {\n      border-color: ", ";\n    }\n    &:focus {\n      outline: none;\n    }\n    &:focus,\n    &:active {\n      border-color: ", " !important;\n      box-shadow: 1px 0px 15px ", " !important;\n    }\n  }\n  ", ";\n"])), function (p) {
  return p.theme.fonts.lato.name;
}, function (p) {
  return p.isOnError ? p.theme.colors.error400 : p.theme.colors.border400;
}, function (p) {
  return p.theme.colors.textPrimary;
}, function (p) {
  return p.theme.typography.sizes.regular;
}, function (p) {
  return p.isOnError ? p.theme.colors.error400 : p.theme.colors.border600;
}, function (p) {
  return p.isOnError ? p.theme.colors.error400 : p.theme.colors.primary400;
}, function (p) {
  return p.isOnError ? "".concat(p.theme.colors.error400, "35") : "".concat(p.theme.colors.primary400, "35");
}, function (p) {
  if (p.isFullWidth) {
    return "\n        max-width: 100%;\n      ";
  }
});
var Count = styled__default["default"].p(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  color: ", ";;\n  display: flex;\n  font-size: ", ";\n  justify-content: flex-end;\n  margin: 0 0 0 auto;\n"])), function (p) {
  return p.theme.colors.textPrimary;
}, function (p) {
  return p.theme.typography.sizes.small;
});
var ErrorMessage = styled__default["default"].p(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  margin-top: 5px;\n  svg {\n    margin-right: 5px;\n    path:not(:first-child) {\n      fill: ", ";\n    }\n  }\n"])), function (p) {
  return p.theme.colors.error400;
}, function (p) {
  return p.theme.typography.sizes.small;
}, function (p) {
  return p.theme.colors.error400;
});
var CountWrapper = styled__default["default"].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  display:flex;\n  ", " {\n    flex: 1;\n    padding-right: 20px;\n  }\n  ", " {\n    box-sizing: border-box;\n    margin-top: 5px;\n  }\n"])), ErrorMessage, Count);

var Textarea = function Textarea(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? 'custom-textarea-name' : _props$name,
      _props$additionalClas = props.additionalClassNames,
      additionalClassNames = _props$additionalClas === void 0 ? null : _props$additionalClas,
      onChange = props.onChange,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? null : _props$placeholder,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$maxLength = props.maxLength,
      maxLength = _props$maxLength === void 0 ? 120 : _props$maxLength,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$noCount = props.noCount,
      noCount = _props$noCount === void 0 ? false : _props$noCount,
      _props$error = props.error,
      error = _props$error === void 0 ? null : _props$error;

  var onChangeTextarea = function onChangeTextarea(e) {
    onChange(e);
  };

  var commonProps = React.useMemo(function () {
    var newProps = {};

    if (!noCount) {
      newProps.maxLength = maxLength;
    }

    return newProps;
  }, [noCount, maxLength]);
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    isOnError: error || false,
    isFullWidth: fullWidth,
    className: classNames__default["default"]('sd-textarea', _defineProperty({}, additionalClassNames, additionalClassNames !== null))
  }, /*#__PURE__*/React__default["default"].createElement("textarea", _extends({
    "aria-labelledby": "".concat(name, "-label"),
    id: name,
    value: value,
    name: name,
    onChange: onChangeTextarea,
    placeholder: placeholder,
    disabled: disabled ? 'disabled' : null,
    required: required
  }, commonProps)), !noCount && /*#__PURE__*/React__default["default"].createElement(CountWrapper, null, error && /*#__PURE__*/React__default["default"].createElement(ErrorMessage, null, /*#__PURE__*/React__default["default"].createElement(icons.ErrorIcon, {
    height: 16
  }), " ", error), /*#__PURE__*/React__default["default"].createElement(Count, null, value.length || 0, "/", maxLength)), error && noCount && /*#__PURE__*/React__default["default"].createElement(ErrorMessage, null, /*#__PURE__*/React__default["default"].createElement(icons.ErrorIcon, {
    height: 16
  }), " ", error));
};

Textarea.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].number // used for null
  ]),
  value: PropTypes__default["default"].string.isRequired,
  error: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  maxLength: PropTypes__default["default"].number,
  disabled: PropTypes__default["default"].bool,
  required: PropTypes__default["default"].bool,
  fullWidth: PropTypes__default["default"].bool,
  placeholder: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  noCount: PropTypes__default["default"].bool,
  additionalClassNames: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ])
};

var _excluded = ["size", "label", "onClick", "fullWidth", "bordered", "to", "scheme", "classNames", "icon", "sizes", "schemes"],
    _excluded2 = ["size", "label", "fullWidth", "bordered", "scheme", "classNames", "icon", "sizes", "schemes"],
    _excluded3 = ["size", "label", "fullWidth", "bordered", "scheme", "classNames", "icon", "sizes", "schemes"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var commonStyle = styled.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: none;\n  border-radius: ", "px;\n  box-sizing: border-box;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  height: ", ";\n  justify-content: center;\n  letter-spacing: 0;\n  max-width: ", ";\n  outline: none;\n  padding: ", ";\n  width: ", ";\n  > svg {\n    margin-right: 7px;\n  }\n  &:hover {\n    ", ";\n  }\n  ", ";\n  ", ";\n"])), function (p) {
  return p.theme.colors[p.schemes[p.scheme].backgroundColor] || p.theme.colors.primary400;
}, function (p) {
  return p.schemes[p.scheme].rounded || 3;
}, function (p) {
  return p.theme.colors[p.schemes[p.scheme].color];
}, function (p) {
  return p.disabled ? 'default' : 'pointer';
}, function (p) {
  return p.theme.fonts.poppins.name;
}, function (p) {
  return p.theme.typography.sizes.regular;
}, function (p) {
  return p.theme.fonts.poppins.variants.semiBold;
}, function (p) {
  var _p$sizes$p$size;

  return ((_p$sizes$p$size = p.sizes[p.size]) === null || _p$sizes$p$size === void 0 ? void 0 : _p$sizes$p$size.height) || p.sizes.medium.height;
}, function (p) {
  return p.fullWidth ? '100%' : 'fit-content';
}, function (p) {
  var _p$sizes$p$size2;

  return ((_p$sizes$p$size2 = p.sizes[p.size]) === null || _p$sizes$p$size2 === void 0 ? void 0 : _p$sizes$p$size2.padding) || p.sizes.medium.padding;
}, function (p) {
  var _p$sizes$p$size3;

  return p.fullWidth ? '100%' : ((_p$sizes$p$size3 = p.sizes[p.size]) === null || _p$sizes$p$size3 === void 0 ? void 0 : _p$sizes$p$size3.width) || p.sizes.medium.width;
}, function (p) {
  var hoverBGColor = new tinycolor.TinyColor(p.theme.colors[p.schemes[p.scheme].backgroundColor]).darken(5);

  if (p.bordered) {
    return styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          border-color: ", ";\n          color: ", ";\n          > svg * {\n            fill: ", ";\n          }\n        "])), hoverBGColor, hoverBGColor, hoverBGColor);
  }

  return styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n      "])), hoverBGColor, function (p) {
    return p.theme.colors[p.schemes[p.scheme].color];
  });
}, function (p) {
  if (p.disabled) {
    return styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n      "])), p.theme.colors.lightGreyBorder, p.theme.colors.darkGreyBackground);
  }
}, function (p) {
  if (p.bordered && p.scheme === 'primary' && p.size === 'big') {
    return styled.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        background-color: transparent;\n        border: 1px solid ", ";\n        color: ", ";\n      "])), function (p) {
      return p.theme.colors.primary400;
    }, function (p) {
      return p.theme.colors.primary400;
    });
  }
});
var WrapperButton = styled__default["default"](function (_ref) {
  _ref.size;
      _ref.label;
      _ref.onClick;
      _ref.fullWidth;
      _ref.bordered;
      _ref.to;
      _ref.scheme;
      _ref.classNames;
      _ref.icon;
      _ref.sizes;
      _ref.schemes;
      var rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement("button", rest);
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", ";\n"])), commonStyle);
var WrapperLink = styled__default["default"](function (_ref2) {
  _ref2.size;
      _ref2.label;
      _ref2.fullWidth;
      _ref2.bordered;
      _ref2.scheme;
      _ref2.classNames;
      _ref2.icon;
      _ref2.sizes;
      _ref2.schemes;
      var rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, rest);
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", ";\n  text-decoration: none;\n"])), commonStyle);
var WrapperOutsideLink = styled__default["default"](function (_ref3) {
  _ref3.size;
      _ref3.label;
      _ref3.fullWidth;
      _ref3.bordered;
      _ref3.scheme;
      _ref3.classNames;
      _ref3.icon;
      _ref3.sizes;
      _ref3.schemes;
      var rest = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React__default["default"].createElement("a", rest);
})(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", ";\n  text-decoration: none;\n"])), commonStyle);

var ALLOWED_TYPES = [null, 'button', 'submit'];
var SIZES = {
  medium: {
    height: '32px',
    width: 'auto',
    padding: '0 15px'
  },
  big: {
    height: '40px',
    width: 'auto',
    padding: '0 20px'
  }
};
var SCHEMES = {
  primary: {
    backgroundColor: 'primary400',
    color: 'neutral0',
    rounded: 6
  },
  secondary: {
    backgroundColor: 'specialSecondary',
    color: 'neutral0',
    rounded: 6
  },
  primaryLight: {
    backgroundColor: 'secondary400',
    color: 'primary400',
    rounded: 6
  },
  warning: {
    backgroundColor: 'warning400',
    color: 'neutral0',
    rounded: 6
  },
  success: {
    backgroundColor: 'success400',
    color: 'neutral0',
    rounded: 6
  }
};

var ButtonIcon = function ButtonIcon(_ref) {
  var icon = _ref.icon,
      bordered = _ref.bordered,
      size = _ref.size,
      scheme = _ref.scheme;
  var theme = styled.useTheme();
  return /*#__PURE__*/React.cloneElement(icon, {
    color: bordered ? theme.colors.primary400 : theme.colors[SCHEMES[scheme].color],
    height: size === 'medium' ? 12 : 16
  });
};

var Button = function Button(props) {
  var _props$scheme = props.scheme,
      scheme = _props$scheme === void 0 ? 'primary' : _props$scheme,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$additionalClas = props.additionalClassNames,
      additionalClassNames = _props$additionalClas === void 0 ? null : _props$additionalClas,
      _props$label = props.label,
      label = _props$label === void 0 ? 'button label' : _props$label,
      _props$title = props.title,
      title = _props$title === void 0 ? null : _props$title,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? null : _props$onClick,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? false : _props$bordered,
      _props$to = props.to,
      to = _props$to === void 0 ? null : _props$to,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? null : _props$icon;
  var hasExternalLink = !!(to !== null && to !== void 0 && to.length) && /(http(s?)):\/\//i.test(to);
  var commonProps = {
    size: size
  };
  var conditionalProps = {};

  if (onClick) {
    conditionalProps.onClick = onClick;
  }

  if (title) {
    commonProps.title = title;
  }

  if (!!(to !== null && to !== void 0 && to.length)) {
    if (!hasExternalLink) {
      return /*#__PURE__*/React__default["default"].createElement(WrapperLink, _extends({
        className: classNames__default["default"]('sd-button', _defineProperty({}, additionalClassNames, additionalClassNames !== null)),
        disabled: disabled,
        fullWidth: fullWidth,
        scheme: scheme,
        bordered: bordered,
        sizes: SIZES,
        schemes: SCHEMES,
        to: to
      }, commonProps), icon && /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
        icon: icon,
        bordered: bordered,
        size: size,
        scheme: scheme
      }), label);
    }

    return /*#__PURE__*/React__default["default"].createElement(WrapperOutsideLink, _extends({
      className: classNames__default["default"]('sd-button', _defineProperty({}, additionalClassNames, additionalClassNames !== null)),
      disabled: disabled,
      fullWidth: fullWidth,
      scheme: scheme,
      bordered: bordered,
      sizes: SIZES,
      schemes: SCHEMES,
      href: to
    }, commonProps), icon && /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
      icon: icon,
      bordered: bordered,
      size: size,
      scheme: scheme
    }), label);
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapperButton, _extends({
    className: classNames__default["default"]('sd-button', _defineProperty({}, additionalClassNames, additionalClassNames !== null)),
    type: hasExternalLink ? 'button' : type,
    disabled: hasExternalLink ? false : disabled,
    fullWidth: fullWidth,
    scheme: scheme,
    bordered: bordered,
    sizes: SIZES,
    schemes: SCHEMES
  }, commonProps, conditionalProps), icon && /*#__PURE__*/React__default["default"].createElement(ButtonIcon, {
    icon: icon,
    bordered: bordered,
    size: size,
    scheme: scheme
  }), label);
};

Button.propTypes = {
  type: function type(props, propName, componentName) {
    if (!ALLOWED_TYPES.includes(props[propName])) {
      return new Error("Invalid prop ".concat(propName, " supplied to\n          \u2018").concat(componentName, "\u2018. Validation failed, size should \n          be one of: ").concat(ALLOWED_TYPES.join(', '), "\n      "));
    }
  },
  size: function size(props, propName, componentName) {
    if (![].concat(_toConsumableArray(Object.keys(SIZES)), [null]).includes(props[propName])) {
      return new Error("Invalid prop ".concat(propName, " supplied to\n          \u2018").concat(componentName, "\u2018. Validation failed, size should \n          be one of: ").concat(Object.keys(SIZES).join(', '), "\n      "));
    }
  },
  scheme: function scheme(props, propName, componentName) {
    if (![].concat(_toConsumableArray(Object.keys(SCHEMES)), [null]).includes(props[propName])) {
      return new Error("Invalid prop ".concat(propName, " supplied to\n          \u2018").concat(componentName, "\u2018. Validation failed, size should \n          be one of: ").concat(Object.keys(SCHEMES).join(', '), "\n      "));
    }
  },
  disabled: PropTypes__default["default"].bool,
  additionalClassNames: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  label: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node, PropTypes__default["default"].func, PropTypes__default["default"].number // used for null
  ]).isRequired,
  title: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  onClick: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].number // used for null
  ]),
  fullWidth: PropTypes__default["default"].bool,
  bordered: PropTypes__default["default"].bool,
  to: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].number // used for null
  ])
};

exports.Button = Button;
exports.FormLabel = FormLabel;
exports.Textarea = Textarea;
exports.UserAvatar = UserAvatar;
exports.theme = theme;
