import { useSearchParams } from 'react-router-dom';

import Spinner from '../../ui/Spinner';
import CabinRowNew from './CabinRowNew';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import TableNew from '../../ui/TableNew';
import TableHead from '../../ui/TableHead';

import { useCabins } from './useCabins';

function CabinTableNew() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (error) return <div>ERROR OCCURED FETCHING CABINS!</div>;
  if (!cabins?.length) return <Empty resourceName="cabins" />;

  // * 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // * 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <TableNew>
        <TableNew.Header role="row">
          <TableHead></TableHead>
          <TableHead>Cabin</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead></TableHead>
        </TableNew.Header>

        <TableNew.Body
          data={sortedCabins}
          render={cabin => <CabinRowNew cabin={cabin} key={cabin.id} />}
        />
      </TableNew>
    </Menus>
  );
}

export default CabinTableNew;
