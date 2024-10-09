import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import { useScrollElement } from '../context/ScrollElementContext';
import { useMobileNavigation } from '../context/MobileNavigationContext';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1280px) {
    grid-template-columns: 20rem 1fr;
  }

  @media (max-width: 1180px) {
    grid-template-columns: 6rem 1fr;
  }

  @media (max-width: 825px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;

  /* background-color: green; */

  @media (max-width: 1280px) {
    padding: 4rem 2rem 6.4rem;
  }

  @media (max-width: 825px) {
    overflow: auto;
    padding: 4rem 2rem;
    margin-top: 6rem;
  }

  @media (max-width: 475px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* background-color: #3a3ad5; */
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  backdrop-filter: brightness(70%);
  z-index: 4;
`;

function AppLayout() {
  const { isOpen } = useMobileNavigation();
  const { addScrollableRef } = useScrollElement();

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main ref={addScrollableRef}>
        <Container>
          <Outlet />
        </Container>
      </Main>

      {isOpen && <Overlay />}
    </StyledAppLayout>
  );
}

export default AppLayout;
