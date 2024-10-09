import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Spinner from '../../ui/Spinner';
import TodayItem from './TodayItem';

import { useTodayActivity } from './useTodayActivity';

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding: 2.4rem 1.8rem;

  /* background-color: darkviolet; */

  @media (max-width: 1035px) {
    grid-column: 1 / -1;
    padding: 3.2rem 4rem;
  }

  @media (max-width: 645px) {
    padding: 2rem 0;
    border: none;
    margin-top: 3rem;
    background-color: var(--color-grey-50);
  }
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Heading as="h2">Today</Heading>

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map(activity => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
