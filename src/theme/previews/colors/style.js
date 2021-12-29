import styled, { css } from 'styled-components';

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
        grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
        grid-auto-rows: auto;
        grid-gap: 20px;
        height: inherit;
        min-height: 50px;
      `;
    }
  }};
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  font-family: ${p => p.theme.fonts.lato.name};
  line-height: 1;
  > div {
    &:first-child {
      background-color: ${p => p.color};
      border: 1px solid #333;
      border-radius: 3px;
      height: 50px;
      margin-right: 20px;
      width: 50px;
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 7px;
      > div:last-child {
        display: flex;
      }
    }
  }
  pre {
    background-color: #ffefd5;
    border: 1px dashed orange;
    border-radius: 3px;
    display: flex;
    margin: 0;
    padding: 2px 3px;
  }
`;