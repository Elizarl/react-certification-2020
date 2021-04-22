import React from 'react';
import styled from 'styled-components';

const StyledSearchbarContainer = styled.div`
  padding: 0 2rem;
`;

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  background-color: seashell;
  border-radius: 5px;
`;

const StyledInputSearchbar = styled.input`
  width: 11rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ onChange }) => {
  return (
    <StyledSearchbarContainer>
      <StyledSearchbar>
        <span className="material-icons-outlined">search</span>
        <StyledInputSearchbar type="text" placeholder="Pokemon" onChange={onChange} />
      </StyledSearchbar>
    </StyledSearchbarContainer>
  );
};

export default SearchBar;
