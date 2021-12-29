import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.poppins.name};
  font-size: ${p => p.theme.typography.sizes.xLarge};
  font-weight: ${p => p.theme.fonts.poppins.variants.bold};
  margin: 0 25px 0 0;
`;

export const FontExample = styled.div`
  background-color: #ffefd5;
  border: 1px dashed orange;
  border-radius: 3px;
  display: flex;
  font-family: ${p => p.font};
  font-size: ${p => p.size || p.theme.typography.sizes.regular};
  font-style: ${p => isNaN(p?.variant) && p?.variant?.indexOf('i') > -1
    ? 'italic'
    : 'initial'
  };
  font-weight: ${p => p.variant
    ? (isNaN(p?.variant)
      ? parseInt(p.variant.replace('i', ''), 10)
      : parseInt(p.variant, 10)
    )
    : 400
  };
  margin: 0;
  padding: 2px 5px;
`;

export const TitleHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
`;
