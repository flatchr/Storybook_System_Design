import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon } from '@flatchr/icons';

import {
  Count, Wrapper, ErrorMessage, CountWrapper
} from './style';

const Textarea = props => {
  const {
    name = 'custom-textarea-name',
    onChange,
    placeholder = null,
    value = '',
    maxLength = 120,
    disabled = false,
    required = false,
    fullWidth = false,
    noCount = false,
    error = null,
    outsideBgColor = null,
  } = props;

  const onChangeTextarea = e => {
    onChange(e);
  };

  const commonProps = useMemo(() => {
    const newProps = {};
    if (!noCount) {
      newProps.maxLength = maxLength;
    }
    return newProps;
  }, [noCount, maxLength]);

  return (
    <Wrapper
      isOnError={error || false}
      isFullWidth={fullWidth}
      outsideBgColor={outsideBgColor}
    >
      <textarea
        aria-labelledby={`${name}-label`}
        id={name}
        value={value}
        name={name}
        onChange={onChangeTextarea}
        placeholder={placeholder}
        disabled={disabled ? 'disabled' : null}
        required={required}
        {...commonProps}
      />
      {!noCount && (
        <CountWrapper>
          {error &&
        <ErrorMessage>
          <ErrorIcon
            height={16}
          /> {error}
        </ErrorMessage>
          }
          <Count>
            {value.length || 0}/{maxLength}
          </Count>
        </CountWrapper>
      )}
      {(error && noCount) &&
        <ErrorMessage>
          <ErrorIcon
            height={16}
          /> {error}
        </ErrorMessage>
      }
    </Wrapper>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  noCount: PropTypes.bool,
  minHeight: PropTypes.bool,
};

export default Textarea;

