import styled from 'styled-components';

const Avatar = styled.img`
  display: block;
  width: 3.2rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media (max-width: 825px) {
    width: 4.2rem;
  }
`;

export default Avatar;
