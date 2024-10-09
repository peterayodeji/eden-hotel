import Heading from '../ui/Heading';
// import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import BookingTableNew from '../features/bookings/BookingTableNew';
import RowHeader from '../ui/RowHeader';
import BookingSearchbar from '../features/bookings/BookingSearchbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;

  @media (max-width: 825px) {
    display: block;
  }
`;

function Bookings() {
  return (
    <>
      <RowHeader>
        <Heading as="h1">Bookings</Heading>
        <BookingTableOperations />
      </RowHeader>

      <Wrapper>
        <BookingSearchbar />
      </Wrapper>

      {/* <BookingTable /> */}
      <BookingTableNew />
    </>
  );
}

export default Bookings;
