import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  &:focus {
    outline: none;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

export default MenuButton;
