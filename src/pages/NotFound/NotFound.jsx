import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Message = styled.p``;

const HomeLink = styled(Link)``;

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Message>404 You shall not pass</Message>
        <HomeLink to="/">go back</HomeLink>
      </Container>
    </Layout>
  );
};

export default NotFound;
