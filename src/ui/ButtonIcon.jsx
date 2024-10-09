import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  padding-inline: 1rem;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 825px) {
    padding: 0.6rem 0.85rem;

    &:focus {
      outline: 2px solid var(--color-brand-600);
      outline-offset: -1px;
    }
  }

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
