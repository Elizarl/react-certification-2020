import React from 'react';
import 'material-icons';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { useAuth } from '../../providers/Auth/Auth';
import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { storage } from '../../utils/storage';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.headerBackground};
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeaderSection = styled.header`
  display: flex;
`;

const AvatarIcon = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const authenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };
  console.log(storage.get(AUTH_STORAGE_KEY));
  if (storage.get(AUTH_STORAGE_KEY)) {
    // usar para videos  agregar a fav
    return <Avatar onClick={authenticate} />;
  }

  return (
    <Link to="/login">
      <Avatar />
    </Link>
  );
};

const Header = () => {
  const { query, setQuery } = useGlobal();

  return (
    <StyledHeader>
      <StyledHeaderSection>
        <span className="material-icons-outlined">menu</span>
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      </StyledHeaderSection>
      <StyledHeaderSection>
        <ThemeSwitch />
        <AvatarIcon src="/Pokebola-pokeball-png-0.png" />
      </StyledHeaderSection>
    </StyledHeader>
  );
};

export default Header;
