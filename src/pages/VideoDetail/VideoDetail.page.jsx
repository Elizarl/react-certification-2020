import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import YtVideoDescription from '../../components/YtVideoDescription';
import RelatedVideos from '../../components/RelatedVideo';

const StyleYtEmbed = styled(YoutubeEmbed)`
  grid-area: video;
`;

const StyledYtVideoDescription = styled(YtVideoDescription)`
  grid-area: description;
`;

const StyledRelatedVideos = styled(RelatedVideos)`
  grid-area: related;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'video related'
    'description related';
`;

function VideoDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <DetailsGrid>
        <StyleYtEmbed id={id} />
        <StyledRelatedVideos id={id} />
        <StyledYtVideoDescription id={id} />
      </DetailsGrid>
    </Layout>
  );
}

export default VideoDetail;
