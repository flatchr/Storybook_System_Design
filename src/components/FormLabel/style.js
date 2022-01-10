import React from 'react';
import styled, { css } from 'styled-components';

export const LabelWrapper = styled(({
  noMargin, required, ...rest
}) => <label {...rest} />)`
  align-items: center;
  color: ${p => p.theme.colors.textPrimary};
  display: flex;
  font-family: ${p => p.theme.fonts.lato.name};
  font-size: ${p => p.theme.typography.sizes.small};
  font-weight: ${p => p.theme.fonts.lato.variants.bold};
  margin-bottom: ${p => p.noMargin ? 0 : 5}px;
  ${p => {
    if (p.required) {
      return css`
        &:after {
          color: ${p.theme.colors.error400};
          display: flex;
          content: '*';
          margin-left: 3px;
        }
      `; 
    }
  }};
`;

