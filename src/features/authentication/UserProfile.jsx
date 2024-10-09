import styled from 'styled-components';
import { useUser } from './useUser';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const StyledUserProfile = styled.div`
  display: none;
  padding-block: 3rem;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 1px solid var(--color-grey-100);

  /* background-color: indianred; */

  @media (max-width: 825px) {
    display: flex;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 8rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserProfile({ closeNav }) {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const navigate = useNavigate();

  function handleClick() {
    navigate('/account');
    closeNav();
  }

  return (
    <StyledUserProfile>
      <Avatar src={avatar || 'default-user.jpg'} alt={`Avatar of fullName`} />
      <p>{fullName}</p>
      <Button option="secondary" size="small" onClick={handleClick}>
        Edit
      </Button>
    </StyledUserProfile>
  );
}

export default UserProfile;
