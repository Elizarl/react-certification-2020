// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RelatedVideo = styled(Link)`
  display: grid;
  grid-template-columns 2fr 8fr;
  color: black;
  padding-left: 5px;
  padding-top: 10px;
  border-bottom-color:
`;

const RelatedVideos = ({ ytrelatedvideo, key }) => {
  return (
    <RelatedVideo
      key={key}
      id={ytrelatedvideo.id.videoId}
      to={`/video/${ytrelatedvideo.id.videoId}`}
    >
      <img alt="" src={ytrelatedvideo.snippet.thumbnails.default.url} />
      <h5>{ytrelatedvideo.snippet.title}</h5>
    </RelatedVideo>
  );
};

export default RelatedVideos;
