import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { HeadIcon } from '@flatchr/icons';
// import FormLabel from '../formLabel';
import {
  Count, Wrapper
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
        <Count>
          {value.length || 0}/{maxLength}
        </Count>
      )}
      {error &&
        <p className="input-message">
          <HeadIcon
            width={18}
          /> {error}
        </p>
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
  className: PropTypes.string,
};

export default Textarea;

