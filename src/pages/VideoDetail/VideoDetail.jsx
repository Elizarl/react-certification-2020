import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import YtVideoDescription from '../../components/YtVideoDescription/YtVideoDescription';
import RelatedVideos from '../../components/RelatedVideo/RelatedVideos';
import Layout from '../../components/Layout/Layout';

const StyledYtVideoDescription = styled(YtVideoDescription)`
  grid-area: description;
`;

const StyledRelatedVideos = styled(RelatedVideos)`
  grid-area: related;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'description related';
  padding-left: 5px;
  padding-top: 5px;
`;

function VideoDetail() {
  const { id } = useParams();
  const [ytRelatedVideos, setYtRelatedVideos] = useState(null);
  // const [addButton] = useState(false);
  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&relatedToVideoId=${id}&maxResults=25`
      );
      const data = await res.json();
      setYtRelatedVideos(data);
      console.log(data);
    }
    getServerSideProps();
  }, [id]);

  const [ytVideoDetails, setYtVideoDetails] = useState(null);
  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&id=${id}`
      );
      const data = await res.json();
      setYtVideoDetails(data);
    }
    getServerSideProps();
  }, [id]);

  return (
    <Layout>
      <DetailsGrid>
        {ytVideoDetails !== null && (
          <StyledYtVideoDescription id={id} ytVideoDetails={ytVideoDetails} />
        )}
        <div>
          {ytRelatedVideos !== null &&
            ytRelatedVideos.items
              // sometimes api returns video without snippet
              .filter(({ snippet }) => snippet)
              .map((ytrelatedvideo) => (
                <StyledRelatedVideos
                  id={id}
                  ytrelatedvideo={ytrelatedvideo}
                  key={ytrelatedvideo.id.videoId}
                />
              ))}
        </div>
      </DetailsGrid>
    </Layout>
  );
}

export default VideoDetail;
