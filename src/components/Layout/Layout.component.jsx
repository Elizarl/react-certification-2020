import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
  </Container>
);

export default Layout;
