// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RelatedVideo = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  color: black;
  padding-left: 5px;
  padding-top: 5px;
`;

const RelatedVideos = ({ ytrelatedvideo }) => {
  return (
    <RelatedVideo
      key={ytrelatedvideo.id.videoId}
      to={`/video/${ytrelatedvideo.id.videoId}`}
    >
      <img alt="" src={ytrelatedvideo.snippet.thumbnails.default.url} />
      <h5>{ytrelatedvideo.snippet.title}</h5>
    </RelatedVideo>
  );
};

export default RelatedVideos;
