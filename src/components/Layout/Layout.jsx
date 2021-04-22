import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <StyledContainer>
    <Header />
    <main>{children}</main>
  </StyledContainer>
);

export default Layout;
