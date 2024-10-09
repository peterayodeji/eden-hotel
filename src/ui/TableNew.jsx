import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  font-size: 1.4rem;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 7px;
  border: 1px solid var(--color-grey-200);
  overflow: hidden;

  /* background-color: green; */

  @media (max-width: 825px) {
    border: none;
    border-radius: 0;
  }
`;

const StyledRow = styled.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid var(--color-grey-100);
    transition: none;

    /* debug */
    /* border-bottom: 1px solid blue; */

    /* background-color: red; */
  }

  @media (max-width: 825px) {
    position: relative;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-md);
    background-color: var(--color-grey-0);
    overflow: hidden;

    /* debug */
    /* border: 1px solid red; */

    &:last-child td {
      border-bottom: 1px solid var(--color-grey-100);
      /* border-bottom: 1px solid green; */
    }

    & td:first-child,
    td:last-child {
      border-bottom: none;
    }

    & td:last-child {
      position: absolute;
      top: 5px;
      right: 0;
      padding: 0;
      z-index: 2;

      /* background-color: yellow; */
    }
  }
`;

const StyledHeader = styled(StyledRow)`
  background-color: var(--color-grey-50);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledBody = styled.tbody`
  background-color: var(--color-grey-0);

  @media (max-width: 825px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;
    background-color: var(--color-grey-50);
    overflow: hidden;
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;

const StyledFooter = styled.tfoot`
  & td {
    background-color: var(--color-grey-50);
  }
`;

// # TABLE
function TableNew({ children }) {
  return <StyledTable role="table">{children}</StyledTable>;
}

// # TABLE HEADER
function Header({ children }) {
  return (
    <thead>
      <StyledHeader role="row">{children}</StyledHeader>
    </thead>
  );
}

// # TABLE ROW
function Row({ children }) {
  return <StyledRow role="row">{children}</StyledRow>;
}

// # TABLE BODY
function Body({ data, render }) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}

// # TABLE FOOTER
function Footer({ children, columns }) {
  return (
    <StyledFooter>
      <tr>
        <td colSpan={columns}>{children}</td>
      </tr>
    </StyledFooter>
  );
}

// * Give the Table children
TableNew.Header = Header;
TableNew.Row = Row;
TableNew.Body = Body;
TableNew.Footer = Footer;

export default TableNew;
