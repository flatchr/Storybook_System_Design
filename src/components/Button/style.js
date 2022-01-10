import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { TinyColor } from '@ctrl/tinycolor';

const commonStyle = css`
  align-items: center;
  background-color: ${p => p.theme.colors[p.schemes[p.scheme].backgroundColor] || p.theme.colors.primary400};
  border: none;
  border-radius: ${p => p.schemes[p.scheme].rounded || 3}px;
  box-sizing: border-box;
  color: ${p => p.theme.colors[p.schemes[p.scheme].color]};
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  display: flex;
  font-family: ${p => p.theme.fonts.poppins.name};
  font-size: ${p => p.theme.typography.sizes.regular};
  font-weight: ${p => p.theme.fonts.poppins.variants.semiBold};
  height: ${p => p.sizes[p.size]?.height || p.sizes.medium.height};
  justify-content: center;
  letter-spacing: 0;
  max-width: ${p => p.fullWidth ? '100%' : 'fit-content'};
  outline: none;
  padding: ${p => p.sizes[p.size]?.padding || p.sizes.medium.padding};
  width: ${p => p.fullWidth ? '100%' : (p.sizes[p.size]?.width || p.sizes.medium.width)};
  > svg {
    margin-right: 7px;
  }
  &:hover {
    ${p => {
      const hoverBGColor = new TinyColor(p.theme.colors[p.schemes[p.scheme].backgroundColor]).darken(5);
      if (p.bordered) {
        return css`
          border-color: ${hoverBGColor};
          color: ${hoverBGColor};
          > svg * {
            fill: ${hoverBGColor};
          }
        `;
      }
      return css`
        background-color: ${hoverBGColor};
        color: ${p => p.theme.colors[p.schemes[p.scheme].color]};
      `;
    }};
  }
  ${p => {
      if (p.disabled) {
        return css`
        background-color: ${p.theme.colors.lightGreyBorder};
        color: ${p.theme.colors.darkGreyBackground};
      `;
      }
    }};
  ${p => {
    if (p.bordered && p.scheme === 'primary' && p.size === 'big') {
      return css`
        background-color: transparent;
        border: 1px solid ${p => p.theme.colors.primary400};
        color: ${p => p.theme.colors.primary400};
      `;
      }
    }};
`;

export const WrapperButton = styled(({
  size, label, onClick, fullWidth,
  bordered, to, scheme, classNames,
  icon, sizes, schemes, ...rest
}) => <button {...rest} />)`
  ${commonStyle};
`;

export const WrapperLink = styled(({
  size, label, fullWidth, bordered, scheme,
  classNames, icon, sizes, schemes, ...rest
}) => <Link {...rest} />)`
  ${commonStyle};
  text-decoration: none;
`;

export const WrapperOutsideLink = styled(({
  size, label, fullWidth, bordered, scheme,
  classNames, icon, sizes, schemes, ...rest
}) => <a {...rest} />)`
  ${commonStyle};
  text-decoration: none;
`;
