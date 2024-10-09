import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 645px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default TableOperations;
