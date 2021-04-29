import React from 'react';
import styled from 'styled-components';

import Alert from '@material-ui/lab/Alert';
import Layout from '../../components/Layout/Layout';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useFavorites } from '../../providers/Favorites/Favorites';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledAlert = styled.div`
  padding-top: 10px;
`;

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <Layout>
      <StyledCardsContainer>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <VideoCard
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <StyledAlert>
            <Alert severity="error">You do not have any favourite video yet </Alert>
          </StyledAlert>
        )}
      </StyledCardsContainer>
    </Layout>
  );
};

export default Favorites;
