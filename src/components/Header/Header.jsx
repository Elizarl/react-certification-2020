import React, { useState } from 'react';
import 'material-icons';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useAuth } from '../../providers/Auth/Auth';
import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';
import Login from '../Login/Login';
import MenuComponent from '../Menu/Menu';

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

const Header = () => {
  const { query, setQuery, setTheme, theme } = useGlobal();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCredential, setShowCredential] = useState(false);
  const { authenticated, logout } = useAuth();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenButton = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogin = () => {
    setShowCredential(true);
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };
  return (
    <>
      <StyledHeader>
        <StyledHeaderSection>
          <MenuComponent />
          <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
        </StyledHeaderSection>
        <StyledHeaderSection>
          <ThemeSwitch checked={theme} onChange={(e) => setTheme(e.target.checked)} />
          {authenticated ? (
            <>
              <Avatar
                aria-controls="simple-menu"
                aria-haspopup="true"
                alt="Logged"
                src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
                onClick={handleOpenButton}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Avatar
                aria-controls="simple-menu"
                aria-haspopup="true"
                alt="Logout"
                onClick={handleOpenButton}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
              </Menu>
            </>
          )}
        </StyledHeaderSection>
      </StyledHeader>
      <Login
        showCredential={showCredential}
        setShowCredential={setShowCredential}
        checked={theme}
      />
    </>
  );
};

export default Header;
