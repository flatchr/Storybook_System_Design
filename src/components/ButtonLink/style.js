import styled, { css } from 'styled-components';
import { TinyColor } from '@ctrl/tinycolor';
import {
  getHoverBackgroundColor,
  getTextColorInBackground,
} from '../../helpers/colors';

const sizes = {
  min: {
    height: '32px',
    width: 'auto',
  },
  max: {
    height: '40px',
    width: 'auto',
  },
};

const commonStyle = css`
  ${p => p.theme.fonts.primary.variants.bold};
  align-items: center;
  border-radius: ${p => p.rounded ? 18 : 3}px;
  box-sizing: border-box;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  display: flex;
  font-size: 14px;
  ${p => p.theme.fonts.primary.variants.bold};
  justify-content: center;
  outline: none;
  padding: 0 5px;
  height: ${p => sizes[p.size].height};
  width: ${p => p.fullWidth ? '100%' : sizes[p.size].width};
  ${p => {
    if (p.size === 'min') {
      return css`
        padding: 0 15px;
      `;
    }
  }};
  ${p => {
    if (p.size === 'max') {
      return css`
        padding: 0 20px;
      `;
    }
  }};
  ${p => {
    if (p.disabled) {
      return css`
        background-color: ${p.theme.colors.lightGreyBorder};
        color: ${p.theme.colors.darkGreyBackground};
      `;
    }
  }};
  ${p => {
    if (!p.disabled) {
      const outsideColor = !!p.outsideBgColor ? new TinyColor(p.outsideBgColor) : null;
      const isOutsideBgColorLight = !!outsideColor && outsideColor.getLuminance() > 0.5 && new TinyColor(p.theme.colors.primary).getLuminance() > 0.5;
      const colorPrimary = new TinyColor(p.theme.colors.primary);
      return css`
        background-color: ${p => isOutsideBgColorLight ? colorPrimary.darken(30) : p.theme.colors.primary};
        color: ${p => getTextColorInBackground(isOutsideBgColorLight ? colorPrimary.darken(30) : p.theme.colors.primary, p.theme)};
        &:hover {
          background-color: ${getHoverBackgroundColor(isOutsideBgColorLight ? colorPrimary.darken(30) : p.theme.colors.primary)};
          color: ${p => getTextColorInBackground(isOutsideBgColorLight ? colorPrimary.darken(30) : p.theme.colors.primary, p.theme)};
        }
      `;
    }
  }};
  ${p => {
    if (p.bordered) {
      const color = new TinyColor(p.theme.colors.primary);
      const newColor = color.isLight() ? color.darken(30) : p.theme.colors.primary;
      return css`
        background-color: ${p => p.theme.colors.white};
        border: 2px solid ${newColor};
        color: ${newColor};
        &:hover {
          background-color: ${newColor};
          color: ${p => getTextColorInBackground(newColor, p.theme)};
        }
      `;
    }
  }};
  ${p => {
    if (p.color) {
      return css`
        background-color: ${p.color};
      `;
    }
  }};
`;

export const WrapperLink = styled.a`
  ${commonStyle};
  text-decoration: none;
`;

export const WrapperButton = styled.button`
  ${commonStyle};
`;
