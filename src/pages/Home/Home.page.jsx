import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import VideoCard from '../../components/VideoCard';
import { useSearch } from '../../providers/SearchContext';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';

function HomePage() {
  const { query } = useSearch();
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
        <CardsContainer>
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
        </CardsContainer>
      </section>
    </Layout>
  );
}

export default HomePage;
