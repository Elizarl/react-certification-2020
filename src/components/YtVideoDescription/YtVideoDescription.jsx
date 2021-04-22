import React from 'react';
import styled from 'styled-components';

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

const YtVideoDescription = ({ id, ytVideoDetails }) => {
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
        {/* {ytVideoDetails !== null && ( */}
        <>
          <h1>{ytVideoDetails.items[0].snippet.title}</h1>
          <div>{ytVideoDetails.items[0].snippet.description}</div>
        </>
        {/* )} */}
      </StyledVideoDescription>
    </div>
  );
};
export default YtVideoDescription;
