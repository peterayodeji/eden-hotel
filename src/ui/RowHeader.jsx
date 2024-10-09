import styled from 'styled-components';

const RowHeader = styled.header`
  display: flex;
  justify-content: space-between;

  /* background-color: red; */

  @media (max-width: 1035px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media (max-width: 645px) {
    gap: 3rem;
  }
`;

export default RowHeader;
