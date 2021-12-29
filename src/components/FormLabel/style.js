import styled, { css } from 'styled-components';

export const LabelWrapper = styled.label`
  align-items: center;
  color: ${p => p.theme.colors.colorsGrey};
  display: flex;
  font-family: ${p => p.theme.fonts.lato.name};
  font-size: ${p => p.theme.typography.sizes.small};
  font-weight: ${p => p.theme.fonts.lato.variants.bold};
  margin-bottom: ${p => p.noMargin ? 0 : 5}px;
  ${p => {
    if (p.required) {
      return css`
        &:after {
          color: ${p.theme.colors.colorsError};
          display: flex;
          content: '*';
          margin-left: 3px;
        }
      `; 
    }
  }};
`;

