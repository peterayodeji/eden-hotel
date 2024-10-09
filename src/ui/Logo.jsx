import styled from 'styled-components';
import LogoMark from './LogoMark';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 7.2rem;
  padding-inline: 2.4rem;

  /* background-color: darkkhaki; */

  @media (max-width: 1180px) {
    padding-inline: 1rem;
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <LogoMark />
    </StyledLogo>
  );
}

export default Logo;
