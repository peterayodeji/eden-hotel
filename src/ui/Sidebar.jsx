import styled, { css } from 'styled-components';
import { useRef } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

import Logo from './Logo';
import MainNav from './MainNav';
import UserProfile from '../features/authentication/UserProfile';
import ButtonIcon from './ButtonIcon';
// import Uploader from '../data/Uploader';

import { useMobileNavigation } from '../context/MobileNavigationContext';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  display: flex;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);

  /* border-right: 1px solid red; // leave for LATER */
  /* background-color: teal; */

  @media (max-width: 1180px) {
    width: 6rem;
    transition: width 0.2s ease;
    z-index: 999;

    &:hover {
      width: 20rem;

      div {
        width: 20rem;

        & span {
          display: inline-block;
        }
      }
    }
  }

  @media (max-width: 825px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    border-right: none;
    border-left: 1px solid var(--color-grey-100);
    transition: transform 0.2s;

    ${props =>
      props.$isOpen &&
      css`
        transform: translateX(0);
      `}

    ${props =>
      !props.$isOpen &&
      css`
        transform: translateX(100%);
      `}


    &:hover {
      width: 50%;

      div {
        width: 100%;
      }
    }
  }

  @media (max-width: 475px) {
    width: 70%;

    &:hover {
      width: 70%;
    }
  }
`;

const SidebarContent = styled.div`
  position: relative;
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* background-color: crimson; */

  @media (max-width: 1280px) {
    width: 20rem;
  }

  @media (max-width: 1180px) {
    width: 6rem;

    span {
      display: none;
    }
  }

  @media (max-width: 825px) {
    width: 100%;
    gap: 0;
    // Might need box-shadow // might be for the parent

    & span {
      display: inline-block;
    }
  }
`;

const ButtonClose = styled(ButtonIcon)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-grey-100);
  /* border-radius: 0px; */ // Decide LATER

  &:focus {
    outline: none;
  }

  @media (max-width: 825px) {
    display: block;
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-grey-600);
  }
`;

function Sidebar() {
  const sidebarEl = useRef();
  const { isOpen, closeMobileNavigation } = useMobileNavigation();
  useOutsideClick(sidebarEl, closeNav);

  function closeNav() {
    if (!isOpen) return;
    closeMobileNavigation();
  }

  return (
    <StyledSidebar $isOpen={isOpen} ref={sidebarEl}>
      <SidebarContent>
        <Logo />
        <UserProfile closeNav={closeNav} />
        <MainNav closeNav={closeNav} />

        <ButtonClose onClick={closeNav}>
          <HiOutlineXMark />
        </ButtonClose>

        {/* <Uploader /> */}
      </SidebarContent>
    </StyledSidebar>
  );
}

export default Sidebar;
