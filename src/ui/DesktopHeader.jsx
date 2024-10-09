import styled from 'styled-components';
import UserAvatar from '../features/authentication/UserAvatar';
import DarkModeToggle from './DarkModeToggle';
import BookingSearchbar from '../features/bookings/BookingSearchbar';
import { formatDate } from '../utils/helpers';

const StyledDesktopHeader = styled.header`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;

  /* background-color: red; */

  & :nth-child(3) {
    display: flex;
    gap: 1rem;
  }

  p {
    color: var(--color-grey-500);
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

function DesktopHeader() {
  return (
    <StyledDesktopHeader>
      <BookingSearchbar />
      <p>{formatDate()}</p>
      <div>
        <UserAvatar />
        <DarkModeToggle />
      </div>
    </StyledDesktopHeader>
  );
}

export default DesktopHeader;
