import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useKey } from '../../hooks/useKey';

const Searchbar = styled.input`
  display: block;
  padding: 0.8rem 1.2rem;
  inset: none;
  border: none;
  font: inherit;
  color: var(--color-grey-600);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-sm);

  /* width: 25rem; */

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

function BookingSearchbar() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const inputEl = useRef();

  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setSearchInput('');
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput) return;
    navigate(`/bookings/${searchInput}`);
    setSearchInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Searchbar
        type="text"
        placeholder="Search booking #"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        ref={inputEl}
      />
    </form>
  );
}

export default BookingSearchbar;
