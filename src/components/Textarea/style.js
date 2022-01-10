import styled from 'styled-components';

export const Wrapper = styled(({
  isOnError, isFullWidth,
  ...rest
}) => <div {...rest} />)`
  display: flex;
  font-family: ${p => p.theme.fonts.lato.name};
  flex-direction: column;
  max-width: 275px;
  width: 100%;
  textarea {
    border-style: solid;
    border-width: 1px;
    border-color: ${p => p.isOnError ? p.theme.colors.error400 : p.theme.colors.border400};
    border-radius: 5px;
    box-sizing: border-box;
    color: ${p => p.theme.colors.textPrimary};
    font-family: inherit;
    font-size: ${p => p.theme.typography.sizes.regular};
    height: 100%;
    max-height: 200px;
    min-height: 150px;
    padding: 10px;
    &:hover {
      border-color: ${p => p.isOnError ? p.theme.colors.error400 : p.theme.colors.border600};
    }
    &:focus {
      outline: none;
    }
    &:focus,
    &:active {
      border-color: ${p => p.isOnError ? p.theme.colors.error400 : p.theme.colors.primary400} !important;
      box-shadow: 1px 0px 15px ${p => p.isOnError ? `${p.theme.colors.error400}35` : `${p.theme.colors.primary400}35`} !important;
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
  color: ${p => p.theme.colors.textPrimary};;
  display: flex;
  font-size: ${p => p.theme.typography.sizes.small};
  justify-content: flex-end;
  margin: 0 0 0 auto;
`;

export const ErrorMessage = styled.p`
  align-items: center;
  color: ${p => p.theme.colors.error400};
  display: flex;
  font-size: ${p => p.theme.typography.sizes.small};
  margin-top: 5px;
  svg {
    margin-right: 5px;
    path:not(:first-child) {
      fill: ${p => p.theme.colors.error400};
    }
  }
`;

export const CountWrapper = styled.div`
  display:flex;
  ${ErrorMessage} {
    flex: 1;
    padding-right: 20px;
  }
  ${Count} {
    box-sizing: border-box;
    margin-top: 5px;
  }
`;

