import styled from 'styled-components';

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;

  /* background-color: firebrick; */

  @media (max-width: 1035px) {
    padding: 3.2rem;

    &:nth-of-type(odd) {
      grid-column: 1 / span 2;
    }

    &:nth-of-type(even) {
      grid-column: 3 / span 2;
    }
  }

  @media (max-width: 645px) {
    padding: 1.6rem;
    /* background-color: teal; */
  }

  @media (max-width: 475px) {
    padding: 3rem;

    &:nth-of-type(odd) {
      grid-column: 1 / span 4;
    }

    &:nth-of-type(even) {
      grid-column: 1 / span 4;
    }
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${props => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${props => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  font-size: 1.3rem;
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 645px) {
    font-size: 2rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;