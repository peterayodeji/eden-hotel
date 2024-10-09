import styled from 'styled-components';
import { HiChevronRight } from 'react-icons/hi2';

import Avatar from '../../ui/Avatar';
import { useUser } from './useUser';
import { useNavigate } from 'react-router-dom';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  cursor: pointer;

  /* background-color: indianred; */
  /* box-shadow: var(--shadow-sm); */ // LATER

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;

  & span:nth-child(1) {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.2;
  }

  & span:nth-child(2) {
    font-size: 1rem;
    color: var(--color-grey-500);
  }
`;

function UserAvatar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { fullName, avatar, email } = user.user_metadata;

  return (
    <StyledUserAvatar onClick={() => navigate('/account')}>
      <Avatar src={avatar || 'default-user.jpg'} alt={`Avatar of fullName`} />
      <UserDetails>
        <span>{fullName}</span>
        <span>{email}</span>
      </UserDetails>
      <HiChevronRight />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
