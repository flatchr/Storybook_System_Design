import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';

export const AccordionItem = styled(Accordion.Item)`
  border-color: transparent;
  .accordion-button {
    box-shadow: none;
    color: ${p => p.theme.colors.colorsBlack} !important;
    background-color: transparent;
    font-size: ${p => p.theme.typography.sizes.small};
    outline: none;
    padding: 0;
    &:focus {
      border-color: transparent;
    }
  }
  .accordion-body {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
