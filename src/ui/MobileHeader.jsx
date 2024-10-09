import Avatar from './Avatar';
import { useUser } from '../features/authentication/useUser';
import styled from 'styled-components';
import LogoMark from './LogoMark';
import { useMobileNavigation } from '../context/MobileNavigationContext';

const StyledMobileHeader = styled.header`
  display: none;

  /* background-color: teal; */

  @media (max-width: 825px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AvatarBtn = styled.button`
  background: none;
  border: none;
  border-radius: 50%;

  &:focus {
    outline: none;
  }
`;

function MobileHeader() {
  const { openMobileNavigation } = useMobileNavigation();
  const { user } = useUser();
  const { avatar } = user.user_metadata;

  return (
    <StyledMobileHeader>
      <LogoMark />

      <AvatarBtn onClick={openMobileNavigation}>
        <Avatar src={avatar || 'default-user.jpg'} alt={`Avatar of fullName`} />
      </AvatarBtn>
    </StyledMobileHeader>
  );
}

export default MobileHeader;
