import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import styled from 'styled-components';
// import CabinTable from './CabinTable';

const Wrapper = styled.div`
  @media (max-width: 825px) {
    text-align: center;
  }
`;

function AddCabin() {
  return (
    <Wrapper>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </Wrapper>
  );
}

export default AddCabin;
