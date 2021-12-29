import styled, { css } from 'styled-components';
import { TinyColor } from '@ctrl/tinycolor';
import { convertHexToRGBA } from '../../helpers/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 275px;
  width: 100%;
  .input-message {
    color: ${p => p.theme.colors.error};
  }
  textarea {
    border: 1px solid ${p => p.theme.colors.formBorder};
    border-color: ${p => p.isOnError ? p.theme.colors.error : p.theme.colors.formBorder};
    border-radius: 5px;
    box-sizing: border-box;
    color: ${p => p.theme.colors.text.primary};
    font-family: inherit;
    font-size: 14px;
    height: 100%;
    max-height: 200px;
    min-height: 150px;
    padding: 10px;
    &:hover {
      border-color: ${p => p.isOnError ? p.theme.colors.error : p.theme.colors.formBorder};
    }
    &:focus {
      outline: none;
    }
    &:focus,
    &:active {
      ${p => {
    const outsideColor = !!p.outsideBgColor ? new TinyColor(p.outsideBgColor) : null;
    const isOutsideBgColorLight = !!outsideColor && outsideColor.getLuminance() > 0.5 && new TinyColor(p.theme.colors.primary).getLuminance() > 0.5;
    const colorPrimary = isOutsideBgColorLight ? `#${new TinyColor(p.theme.colors.primary).darken(30).toHex()}` : p.theme.colors.primary;
    return css`
                border-color: ${p => p.isOnError ? p.theme.colors.error : colorPrimary} !important;
                box-shadow: 0px 0px 20px ${p => convertHexToRGBA(p.isOnError ? p.theme.colors.error : colorPrimary, 0.3)} !important;
        `;
  }};
    }
  }
  ${p => {
    if (p.isFullWidth) {
      return `
        max-width: 100%;
      `;
    }
  }};
`;

export const Count = styled.p`
  color: ${p => p.theme.colors.text.primary};
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
  margin-top: 2px;
`;
