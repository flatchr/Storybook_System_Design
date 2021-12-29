'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var colors = {
  colorsWhite: "#ffffff",
  colorsWhiteBlue: "#f0f4f9",
  colorsBlack: "#000000",
  colorsBlackBlue: "#0a1f33",
  colorsGrey: "#768ea6",
  colorsGreyBlue: "#2c4460",
  colorsGreyLight: "#a3b7cd",
  colorsGreyLighter: "#dfe6f1",
  colorsPrimary: "#01aec8",
  colorsSecondary: "#cceff4",
  colorsInfo: "#117eff",
  colorsSuccess: "#18cd97",
  colorsWarning: "#ff9c11",
  colorsError: "#ec5997",
  groups: [{
    name: "Basique",
    colors: ['colorsWhite', 'colorsBlack']
  }, {
    name: "Flatchr",
    colors: ['colorsPrimary', 'colorsSecondary']
  }, {
    name: "Status",
    colors: ['colorsInfo', 'colorsSuccess', 'colorsWarning', 'colorsError']
  }]
};

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
    small: '11px',
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

var _templateObject$1, _templateObject2$1;
var Wrapper = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: #e7edf3;\n  ", ";\n  border-radius: 50%;\n  color: $color-grey-light;\n  display: flex;\n  flex: 0 0 auto;\n  height: ", "px;\n  justify-content: center;\n  margin: 0 auto;\n  width: ", "px;\n  svg {\n    color: inherit !important;\n  }\n"])), function (p) {
  if (p.picture) {
    return styled.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        background-image: url(", ");\n        background-position: 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n      "])), p.picture);
  }
}, function (p) {
  return p.height;
}, function (p) {
  return p.width;
});

//   FaUserAlt,
// } from 'react-icons/fa';

var UserAvatar = function UserAvatar(props) {
  var _props$picture = props.picture,
      picture = _props$picture === void 0 ? null : _props$picture,
      _props$size = props.size,
      size = _props$size === void 0 ? 35 : _props$size;
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    className: "user-avatar",
    picture: picture,
    height: size,
    width: size
  });
};

UserAvatar.propTypes = {
  size: PropTypes__default["default"].number,
  picture: PropTypes__default["default"].string
};

var _templateObject, _templateObject2;
var LabelWrapper = styled__default["default"].label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: ", ";\n  margin-bottom: ", "px;\n  ", ";\n"])), function (p) {
  return p.theme.colors.colorsGreyBlue;
}, function (p) {
  return p.theme.fonts.lato.name;
}, function (p) {
  return p.theme.fonts.lato.variants.bold;
}, function (p) {
  return p.noMargin ? 0 : 5;
}, function (p) {
  if (p.required) {
    return styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        &:after {\n          color: ", ";\n          display: flex;\n          content: '*';\n          margin-left: 3px;\n        }\n      "])), p.theme.colors.colorsError);
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
    className: classNames__default["default"]('formLabel', _defineProperty({
      'newFormLabel-noMargin': noMargin
    }, additionalClassNames, additionalClassNames !== null))
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

exports.FormLabel = FormLabel;
exports.UserAvatar = UserAvatar;
exports.theme = theme;
