import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import TableNew from '../../ui/TableNew';
import TableHead from '../../ui/TableHead';
import Pagination from '../../ui/Pagination';
import BookingRowNew from './BookingRowNew';

import { useBookings } from './useBookings';

function BookingTableNew() {
  const { bookings, count, isLoading, error } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  if (error) return <div>{error.message}</div>;

  return (
    <Menus>
      <TableNew>
        <TableNew.Header>
          <TableHead $startSpace="1.2rem">#</TableHead>
          <TableHead>Guest</TableHead>
          <TableHead>Dates</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead></TableHead>
        </TableNew.Header>

        <TableNew.Body
          data={bookings}
          render={booking => (
            <BookingRowNew key={booking.id} booking={booking} />
          )}
        />

        <TableNew.Footer columns="6">
          <Pagination count={count} />
        </TableNew.Footer>
      </TableNew>
    </Menus>
  );
}

export default BookingTableNew;
