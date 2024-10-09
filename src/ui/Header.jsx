import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  /* background-color: skyblue; */

  @media (max-width: 1035px) {
    padding: 1.4rem 2rem;
  }

  @media (max-width: 825px) {
    position: fixed;
    width: 100%;
    padding: 1.8rem 3.4rem;
    box-shadow: var(--shadow-md);
    background-color: var(--backdrop-color-grey);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 3;

    /* opacity: 0.9; */
  }

  @media (max-width: 645px) {
    padding-block: 1.4rem;
    padding-inline: 1rem 2.4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <DesktopHeader />
      <MobileHeader />
    </StyledHeader>
  );
}

export default Header;
