import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${p => p.theme.colors.colorsGreyLighter};
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
  svg path {
    fill: ${p => p.theme.colors.colorsGrey} !important;
  }
`;

