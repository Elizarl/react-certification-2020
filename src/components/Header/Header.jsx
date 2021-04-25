import React, { useState } from 'react';
import 'material-icons';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
// import { AUTH_STORAGE_KEY } from '../../utils/constants';
// import { useAuth } from '../../providers/Auth/Auth';
import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
// import { storage } from '../../utils/storage';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';
import Login from '../Login/Login';

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

const StyledDialog = styled(Dialog)`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
`;

const Header = () => {
  const { query, setQuery } = useGlobal();
  const [openButton, setOpenButton] = useState(false);
  const [openCredential, setOpenCredential] = useState(false);

  const handleOpenButton = () => {
    setOpenButton(true);
  };
  const handleOpenCredential = () => {
    setOpenCredential(true);
    setOpenButton(false);
  };
  return (
    <>
      <StyledHeader>
        <StyledHeaderSection>
          <span className="material-icons-outlined">menu</span>
          <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
        </StyledHeaderSection>
        <StyledHeaderSection>
          <ThemeSwitch />
          <Avatar onClick={handleOpenButton} />
        </StyledHeaderSection>
      </StyledHeader>
      <StyledDialog open={openButton} aria-labelledby="form-dialog-title">
        <Button onClick={handleOpenCredential}>Login</Button>
      </StyledDialog>
      <Login openCredential={openCredential} setOpenCredential={setOpenCredential} />
    </>
  );
};

export default Header;
