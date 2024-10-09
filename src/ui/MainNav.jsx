import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiArrowRightOnRectangle,
  HiOutlineUser,
} from 'react-icons/hi2';

import DarkModeToggle from './DarkModeToggle';
import SpinnerMini from './SpinnerMini';

import { useLogout } from '../features/authentication/useLogout';

const navigationLinks = [
  {
    label: 'Home',
    path: '/dashboard',
    icon: <HiOutlineHome />,
  },
  {
    label: 'Bookings',
    path: '/bookings',
    icon: <HiOutlineCalendarDays />,
  },
  {
    label: 'Cabins',
    path: '/cabins',
    icon: <HiOutlineHomeModern />,
  },
  {
    label: 'Users',
    path: '/users',
    icon: <HiOutlineUsers />,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog6Tooth />,
  },
];

const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  /* background-color: rebeccapurple; */

  @media (max-width: 1280px) {
    padding: 2rem;
  }

  @media (max-width: 1180px) {
    padding: 1rem;
  }

  @media (max-width: 825px) {
    padding: 2.4rem;

    /* LATER */
    /* overflow: scroll; */ // but won't show
  }

  & ul:nth-child(2) {
    margin-top: auto;

    & li:nth-child(1) {
      @media (max-width: 825px) {
        display: none;
      }
    }

    & li:nth-child(3) {
      display: none;

      @media (max-width: 825px) {
        display: block;
      }
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  /* background-color: yellowgreen; */
`;

const StyledNavLink = styled(NavLink)`
  &,
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 0.3s;
    padding: 1rem 0.8rem;

    width: 100%;
    background: none;
    border: none;

    /* background-color: skyblue; */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  &:focus {
    outline: none;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav({ closeNav }) {
  const { logout, isLoading } = useLogout();

  return (
    <Nav>
      <NavList>
        {navigationLinks.map(link => (
          <li key={link.label}>
            <StyledNavLink to={link.path} onClick={closeNav}>
              {link.icon}
              <span>{link.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      <NavList>
        <li>
          <StyledNavLink to="/account">
            <HiOutlineUser />
            <span>Edit Account</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink as="button" onClick={logout} disabled={isLoading}>
            {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
            <span>Logout</span>
          </StyledNavLink>
        </li>

        <li>
          <DarkModeToggle />
        </li>
      </NavList>
    </Nav>
  );
}

export default MainNav;
