import React from 'react';
import 'material-icons';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from '../SearchBar';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.component';

const HeaderClass = styled.header`
  display: flex;
  width: 100%;
  background-color: royalblue;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;
const HeaderSection = styled.header`
  display: flex;
`;

const Header = () => (
  <HeaderClass>
    <HeaderSection>
      <span className="material-icons-outlined">menu</span>
      <SearchBar />
    </HeaderSection>
    <HeaderSection>
      <ThemeSwitch />
      <Avatar />
    </HeaderSection>
  </HeaderClass>
);

export default Header;
