import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RelatedVideo = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-left: 5px;
  color: black;
`;

function RelatedVideos({ id }) {
  const [ytRelatedVideos, setYtRelatedVideos] = useState(null);
  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&relatedToVideoId=${id}&maxResults=10`
      );
      const data = await res.json();
      setYtRelatedVideos(data);
      console.log(data);
    }
    getServerSideProps();
  }, [id]);

  return (
    <div>
      {ytRelatedVideos !== null &&
        ytRelatedVideos.items
          // sometimes api returns video without snippet
          .filter(({ snippet }) => snippet)
          .map((ytrelatedvideo) => (
            <RelatedVideo
              key={ytrelatedvideo.id.videoId}
              to={`/video/${ytrelatedvideo.id.videoId}`}
            >
              <img alt="" src={ytrelatedvideo.snippet.thumbnails.default.url} />
              <h5>{ytrelatedvideo.snippet.title}</h5>
            </RelatedVideo>
          ))}
    </div>
  );
}

export default RelatedVideos;
