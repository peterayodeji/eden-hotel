import styled from 'styled-components';
import Tag from '../../ui/Tag';
import { Flag } from '../../ui/Flag';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 1180px) {
    padding-block: 2rem;
  }

  @media (max-width: 825px) {
    padding-block: 3rem;
  }

  @media (max-width: 645px) {
    padding-block: 2.4rem;
  }

  @media (max-width: 475px) {
    grid-template-columns: 8rem 2rem 1fr 9rem;
  }

  &:first-child {
    border-top: 1px solid var(--color-grey-100);

    @media (max-width: 1180px) {
      border-top: none;
    }
  }
`;

const Nights = styled.div`
  @media (max-width: 475px) {
    display: none;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <Nights>{numNights} nights</Nights>

      {status === 'unconfirmed' && (
        <Button size="small" option="primary" as={Link} to={`/checkin/${id}`}>
          Check in
        </Button>
      )}
      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
