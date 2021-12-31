import styled, { css } from 'styled-components';

export const TooltipContentWrapper = styled.span`
  display: flex;
  font-family: ${p => p.theme.fonts.lato.name};
  font-size: ${p => p.theme.typography.sizes.xSmall};
  font-weight: ${p => p.theme.fonts.poppins.variants.bold};
  line-height: 1.65;
  text-align:left;
`;

export const MainWrapper = styled.div`
  .nav-item .nav-link {
    color: rgb(153, 153, 153);
    font-family: ${p => p.theme.fonts.lato.name};
    font-size: ${p => p.theme.typography.sizes.medium};
    font-weight: ${p => p.theme.fonts.poppins.variants.bold};
    &.active {
      color: #1EA7FD;
    }
  }
  .nav-tabs {
    background-color: ${p => p.theme.colors.neutral0};
    position: sticky;
    top: 20px;
    z-index: 30;
    &:before {
      background-color: ${p => p.theme.colors.neutral0};
      content: '';
      display: block;
      height: 40px;
      position: absolute;
      top: -40px;
      width: 100%;
      z-index: 10;
    }
  }
  .tab-content {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  h1 {
    font-family: ${p => p.theme.fonts.poppins.name};
    font-size: ${p => p.theme.typography.sizes.xLarge};
    font-weight: ${p => p.theme.fonts.poppins.variants.bold};
  }
`;

export const GroupWrapper = styled.div`
  ${p => {
    if (p.noItems) {
      return css`
        display: flex;
        width: 100%;
      `;
    } else {
      return css`
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(130px,1fr));
        grid-auto-rows: auto;
        grid-gap: 10px;
        height: inherit;
        min-height: 50px;
      `;
    }
  }};
`;

export const Item = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: ${p => p.canClick ? 'pointer' : 'default'};
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.lato.name};
  line-height: 1;
  overflow: hidden;
  > div {
    &:first-child {
      ${p => {
        if (!p.color) {
          return css`
            background-color: ${p => p.theme.colors.neutral0};
            background-image: linear-gradient(45deg, #DCDCDC 25%, transparent 25%, transparent 75%, #DCDCDC 75%), linear-gradient(45deg, #DCDCDC 25%, transparent 25%, transparent 75%, #DCDCDC 75%);
            background-size: 10px 10px;
            background-position: 0 0, 5px 5px;
          `;  
        } else {
          return css`
            background-color: ${p.color};
          `;
        }
      }};
      display: flex;
      height: 70px;
      position: relative;
      width: 100%;
    }
    &:last-child {
      box-sizing: border-box;
      box-shadow: inset 0 7px 5px -8px rgb(0 0 0 / 25%);
      display: flex;
      flex-direction: column;
      font-size: ${p => p.theme.typography.sizes.small};
      font-weight: ${p => p.theme.fonts.lato.variants.bold};
      gap: 7px;
      min-height: 50px;
      padding: 10px;
      width: 100%;
      > div {
        display: flex;
        &:first-child {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          > span {
            position: absolute;
            left: 15px;
            z-index: 2;
          }
        }
      }
    }
  }
  pre {
    display: flex;
    margin: 0;
    &.with-alias {
      span {
        color: ${p => p.theme.colors.warning400};
      }
    }
  }
`;