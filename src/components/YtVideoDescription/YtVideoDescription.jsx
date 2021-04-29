import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { useAuth } from '../../providers/Auth/Auth';
import { useFavorites } from '../../providers/Favorites/Favorites';

const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const StyledVideoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: small;
`;
const StyledDescription = styled.div`
  font-size: medium;
  color: gray;
`;

const YtVideoDescription = ({ id, ytVideoDetails }) => {
  const { authenticated } = useAuth();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.findIndex((favorite) => favorite.id === id) !== -1);
  }, [favorites, id]);

  const ButtonFavorites = ({ thumbnail, title, description }) => {
    const handleOnClick = () => {
      if (isFavorite) {
        removeFavorite(id);
      } else {
        addFavorite({
          id,
          thumbnail,
          title,
          description,
        });
      }
    };

    return (
      <>
        {authenticated ? (
          <Button onClick={handleOnClick} isFavorite={isFavorite}>
            {isFavorite ? 'Remove from' : 'Add to'} favorites
          </Button>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div>
      <StyledVideoContainer>
        <StyledFrame
          width="838"
          height="470"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </StyledVideoContainer>
      <StyledVideoDescription>
        <>
          <StyledTitle>
            <h1>{ytVideoDetails.items[0].snippet.title}</h1>
            <ButtonFavorites
              title={ytVideoDetails.items[0].snippet.title}
              description={ytVideoDetails.items[0].snippet.description}
              thumbnail={ytVideoDetails.items[0].snippet.thumbnails.default.url}
            />
          </StyledTitle>
          <StyledDescription>
            {ytVideoDetails.items[0].snippet.description}
          </StyledDescription>
        </>
      </StyledVideoDescription>
    </div>
  );
};
export default YtVideoDescription;
