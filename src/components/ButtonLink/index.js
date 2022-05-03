import React, { cloneElement } from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Style
import {
  WrapperLink,
  WrapperOutsideLink,
  WrapperButton,
} from './style';

const ALLOWED_TYPES = [
  null,
  'button',
  'submit'
]

const SIZES = {
  medium: {
    height: '32px',
    width: 'auto',
    padding: '0 15px',
  },
  big: {
    height: '40px',
    width: 'auto',
    padding: '0 20px',
  },
};

const SCHEMES = {
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
  },
};

const ButtonIcon = ({ icon, bordered, size, scheme }) => {
  const theme = useTheme();
  return cloneElement(icon, {
    color: bordered ? theme.colors.primary400 : theme.colors[SCHEMES[scheme].color],
    height: size === 'medium' ? 12 : 16,
  });
};

const Button = props => {
  const {
    scheme = 'primary',
    type = 'button',
    size = 'medium',
    disabled = false,
    additionalClassNames = null, 
    label = 'button label',
    title = null,
    onClick = null,
    fullWidth = false,
    bordered = false,
    to = null,
    icon = null,
  } = props;

  const hasExternalLink = !!to?.length && /(http(s?)):\/\//i.test(to);

  const commonProps = {
    size,
  };

  const conditionalProps = {};
  if (onClick) {
    conditionalProps.onClick = onClick;
  }
  if (title) {
    commonProps.title = title;
  }

  if (!!to?.length) {
    if (!hasExternalLink) {
      return (
        <WrapperLink
          className={classNames('sd-button', {
            [additionalClassNames]: additionalClassNames !== null,
          })}
          disabled={disabled}
          fullWidth={fullWidth}
          scheme={scheme}
          bordered={bordered}
          sizes={SIZES}
          schemes={SCHEMES}
          to={to}
          {...commonProps}
        >
          {icon && (
            <ButtonIcon
              icon={icon}
              bordered={bordered}
              size={size}
              scheme={scheme}
            />
          )}
          {label}
        </WrapperLink>
      );
    }
    return (
      <WrapperOutsideLink
        className={classNames('sd-button', {
          [additionalClassNames]: additionalClassNames !== null,
        })}
        disabled={disabled}
        fullWidth={fullWidth}
        scheme={scheme}
        bordered={bordered}
        sizes={SIZES}
        schemes={SCHEMES}
        href={to}
        {...commonProps}
      >
        {icon && (
          <ButtonIcon
            icon={icon}
            bordered={bordered}
            size={size}
            scheme={scheme}
          />
        )}
        {label}
      </WrapperOutsideLink>
    );
  }

  return (
    <WrapperButton
      className={classNames('sd-button', {
        [additionalClassNames]: additionalClassNames !== null,
      })}
      type={hasExternalLink ? 'button' : type}
      disabled={hasExternalLink ? false : disabled}
      fullWidth={fullWidth}
      scheme={scheme}
      bordered={bordered}
      sizes={SIZES}
      schemes={SCHEMES}
      {...commonProps}
      {...conditionalProps}
    >
      {icon && (
        <ButtonIcon
          icon={icon}
          bordered={bordered}
          size={size}
          scheme={scheme}
        />
      )}
      {label}
    </WrapperButton>
  );
};

Button.propTypes = {
  type: function (props, propName, componentName) {
    if (!ALLOWED_TYPES.includes(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to
          ‘${componentName}‘. Validation failed, size should 
          be one of: ${ALLOWED_TYPES.join(', ')}
      `);
    }
  },
  size: function (props, propName, componentName) {
    if (![...Object.keys(SIZES), null].includes(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to
          ‘${componentName}‘. Validation failed, size should 
          be one of: ${Object.keys(SIZES).join(', ')}
      `);
    }
  },
  scheme: function (props, propName, componentName) {
    if (![...Object.keys(SCHEMES), null].includes(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to
          ‘${componentName}‘. Validation failed, size should 
          be one of: ${Object.keys(SCHEMES).join(', ')}
      `);
    }
  },
  disabled: PropTypes.bool,
  additionalClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
    PropTypes.number, // used for null
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number, // used for null
  ]),
  fullWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.number, // used for null
  ]),  
};

export default Button;
