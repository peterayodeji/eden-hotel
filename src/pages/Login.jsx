import styled from 'styled-components';
import LogoBadge from '../ui/LogoBadge';
import Heading from '../ui/Heading';
import LoginForm from '../features/authentication/LoginForm';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
    padding-inline: 2rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <LogoBadge />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
