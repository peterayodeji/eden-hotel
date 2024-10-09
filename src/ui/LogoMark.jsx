import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogoMark = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-inline: 0.6rem;
  gap: 1rem;

  /* background-color: yellowgreen; */

  @media (max-width: 1280px) {
    padding-inline: 0.1rem;
  }

  @media (max-width: 1180px) {
    padding-inline: 0.4rem;
  }

  & svg {
    width: 3rem;
    height: 3rem;
    transition: all 0.3s;

    /* color: var(--color-brand-600); */
  }

  & span {
    font-size: 1.8rem;
    font-weight: 600;

    @media (max-width: 825px) {
      font-size: 2rem;
    }
  }
`;

function LogoMark() {
  return (
    <StyledLogoMark to="/dashboard">
      <svg
        fill="none"
        height="48"
        viewBox="0 0 39 48"
        width="39"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#087443">
          <path
            d="m30 4.5c4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9h-9v-9c0-4.97056 4.0294-9 9-9z"
            opacity=".5"
          />
          <path d="m0 13.5c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9v9h-9c-4.97056 0-9-4.0294-9-9z" />
          <path d="m9 43.5c-4.97056 0-9.00000006-4.0294-9-9s4.02944-9 9-9h9v9c0 4.9706-4.0294 9-9 9z" />
          <path d="m39 34.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9v-9h9c4.9706 0 9 4.0294 9 9z" />
        </g>
      </svg>
      <span>Eden Hotel</span>
    </StyledLogoMark>
  );
}

export default LogoMark;
