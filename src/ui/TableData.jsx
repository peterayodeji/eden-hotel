import styled, { css } from 'styled-components';

const TableData = styled.td`
  padding-block: 0.3rem;
  width: ${props => (props.$portion ? props.$portion : 'auto')};
  overflow: hidden;

  /* debug */
  /* background-color: crimson; */

  &:not(:has(img)) {
    padding-block: 1.6rem;
  }

  &:first-child {
    padding-left: ${props => (props.$startSpace ? props.$startSpace : '0')};
  }

  // Convert to em LATER
  @media (max-width: 825px) {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;

    ${props =>
      props.$dataCell &&
      css`
        &::before {
          /* content: attr((dataCell)) ': '; */
          content: '${props.$dataCell}:';
          font-weight: ${400 + 300};
          text-transform: capitalize;
        }
      `}

    &:first-child {
      padding-left: ${props => props.$startSpace && '0'};

      &:has(img) {
        width: 100%;
        padding-block: 0;
        position: relative;
      }

      &:not(:has(img)) {
        width: 5.6rem;
        background-color: var(--color-grey-50);
        border-bottom-right-radius: var(--border-radius-md);
      }
    }
  }
`;

export default TableData;
