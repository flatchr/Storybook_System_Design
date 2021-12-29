import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Style
import {
  LabelWrapper,
} from './style';

const FormLabel = props => {
  const {
    label = 'default text',
    labelFor = null,
    noMargin = false,
    labelId = null,
    additionalClassNames = null,
    labelTitle = null,
    onClick = null,
    required = false,
  } = props;

  const addProps = useMemo(() => {
    const newProps = {};
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
  }, [
    labelFor,
    labelId,
    labelTitle,
    onClick
  ]);

  return (
    <LabelWrapper
      noMargin={noMargin}
      required={required}
      className={classNames('formLabel', {
        'newFormLabel-noMargin': noMargin,
        [additionalClassNames]: additionalClassNames !== null,
      })}
      {...addProps}
    >
      {label}
    </LabelWrapper>
  );
};

FormLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
    PropTypes.number, // used for null
  ]).isRequired,
  labelFor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  noMargin: PropTypes.bool,
  labelId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  additionalClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  labelTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // used for null
  ]),
  required: PropTypes.bool,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number, // used for null
  ])
};

export default FormLabel;
