import styled from 'styled-components';
import { useDeleteCabin } from './useDeleteCabin';
import { formatCurrency } from '../../utils/helpers';

import CreateCabinForm from './CreateCabinForm';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';
// import Table from '../../ui/Table';

import TableNew from '../../ui/TableNew';
import TableData from '../../ui/TableData';
import CabinImage from './CabinImage';

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRowNew({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <TableNew.Row role="row">
      <TableData $portion="13%">
        <CabinImage image={image} name={name} />
      </TableData>

      <TableData>
        <Cabin>{name}</Cabin>
      </TableData>

      <TableData $dataCell="capacity">
        Fits up to {maxCapacity} guests
      </TableData>

      <TableData $dataCell="price">
        <Price>{formatCurrency(regularPrice)}</Price>
      </TableData>

      <TableData $dataCell="discount">
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
      </TableData>

      <TableData>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} colorOnImage="#fff" />

            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabin"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </TableData>
    </TableNew.Row>
  );
}

export default CabinRowNew;
