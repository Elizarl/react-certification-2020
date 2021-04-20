import React from 'react';
import styled from 'styled-components';
import { useGlobal } from '../../providers/GlobalContext';

const SearchbarContainer = styled.div`
  padding: 0 2rem;
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background-color: seashell;
  border-radius: 5px;
`;

const InputSearchbar = styled.input`
  width: 11rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  const { query, setQuery } = useGlobal();

  return (
    <SearchbarContainer>
      <Searchbar>
        <span className="material-icons-outlined">search</span>
        <InputSearchbar
          type="text"
          placeholder="Pokemon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Searchbar>
    </SearchbarContainer>
  );
};

export default SearchBar;
