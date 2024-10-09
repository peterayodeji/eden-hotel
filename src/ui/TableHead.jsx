import styled from 'styled-components';

const TableHead = styled.th`
  padding-block: 1.6rem;
  text-align: left;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    padding-left: ${props => (props.$startSpace ? props.$startSpace : '0')};
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

export default TableHead;
