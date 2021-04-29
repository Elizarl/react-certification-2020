import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';

const Favorites = () => {
  const { query } = useGlobal();
  const [youtubeVideos, setYoutubeVideos] = useState(null);
  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `${YOUTUBE_API}?part=snippet&q=${query}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`
      );
      const data = await res.json();
      setYoutubeVideos(data);
    }
    getServerSideProps();
  }, [query]);

  return (
    <Layout>
      <section>
        <StyledCardsContainer>
          {youtubeVideos !== null &&
            youtubeVideos.items.map((ytvideo) => (
              <VideoCard
                key={ytvideo.id.videoId}
                id={ytvideo.id.videoId}
                title={ytvideo.snippet.title}
                description={ytvideo.snippet.description}
                thumbnail={ytvideo.snippet.thumbnails.default.url}
              />
            ))}
        </StyledCardsContainer>
      </section>
    </Layout>
  );
};

export default Favorites;
