import React from 'react';
import styled, { css } from 'styled-components';

export const InitialsWrapper = styled.span`
  color: ${p => p.theme.colors.neutral0};
  font-family: ${p => p.theme.fonts.lato.name};
  font-weight: ${p => p.theme.fonts.lato.variants.regular};
  letter-spacing: 1.25px;
  transform: translateX(1px);
`;

export const Wrapper = styled(({
  picture, height, width, withInitials, ...rest
}) => <div {...rest} />)`
  align-items: center;
  background-color: ${p => p.withInitials ? p.theme.colors.primary400 : p.theme.colors.background200};
  ${p => {
    if (p.picture) {
      return css`
        background-image: url(${p.picture});
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      `;
    }
  }};
  border-radius: 50%;
  color: $color-grey-light;
  display: flex;
  flex: 0 0 auto;
  height: ${p => p.height}px;
  justify-content: center;
  margin: 0 auto;
  width: ${p => p.width}px;
  svg {
    transform: translateY(-1px);
    path {
      fill: ${p => p.theme.colors.textPrimary} !important;
    }
  }
  ${InitialsWrapper} {
    font-size: ${p => Math.floor(p.height * .4)}px;
  }
`;

