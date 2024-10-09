import { createContext, useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled, { css } from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useScrollMovement } from '../hooks/useScrollMovement';

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  @media (max-width: 825px) {
    &:hover,
    &:focus {
      background: none;
      outline: none;
    }
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);

    @media (max-width: 825px) {
      width: 2.6rem;
      height: 2.6rem;

      ${props =>
        props.$colorOnImage &&
        css`
          color: ${props.$colorOnImage};
        `}
    }
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${props => props.$position.x}px;
  top: ${props => props.$position.y}px;

  z-index: 999;
  overflow: hidden;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
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

const MenusContext = createContext();

// # MENUS
function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;
  // const open = id => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

// # TOGGLE
function Toggle({ id, colorOnImage }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();

    // console.log('toggle');
  }

  return (
    <StyledToggle onClick={handleClick} $colorOnImage={colorOnImage}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

// # LIST
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const listEl = useRef();
  useOutsideClick(listEl, close, false);
  useScrollMovement(listEl, close);

  if (openId !== id) return null;

  return createPortal(
    <StyledList $position={position} ref={listEl}>
      {children}
    </StyledList>,
    document.body
  );
}

// # BUTTON
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

// # Set Menus as parent
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
