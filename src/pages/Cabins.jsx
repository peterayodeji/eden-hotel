import Heading from '../ui/Heading';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import CabinTableNew from '../features/cabins/CabinTableNew';
import RowHeader from '../ui/RowHeader';
import AddCabin from '../features/cabins/AddCabin';

function Cabins() {
  return (
    <>
      <RowHeader>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </RowHeader>

      <CabinTableNew />
      <AddCabin />
    </>
  );
}

export default Cabins;
