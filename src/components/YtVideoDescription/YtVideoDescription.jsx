import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { useAuth } from '../../providers/Auth/Auth';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';

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
  const { hiw, setHiw } = useGlobal();
  const buttonFavorites = () => {
    if (authenticated) {
      if (hiw) {
        return (
          <Button value={hiw} onClick={() => setHiw(false)}>
            ADD FAVORITES
          </Button>
        );
      }
      return (
        <Button value={hiw} onClick={() => setHiw(true)}>
          REMOVE FAVORITES
        </Button>
      );
    }
  };

  useEffect(() => {
    setHiw(hiw);
    console.log('render');
  }, [hiw, setHiw]);
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
            <buttonFavorites />
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
