import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function YoutubeEmbed({ id }) {
  return (
    <VideoContainer>
      <StyledFrame
        width="838"
        height="470"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoContainer>
  );
}

export default YoutubeEmbed;
