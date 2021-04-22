import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoCard from './VideoCard';
import videos from '../../mockData/videos';

test('renders title correctly', () => {
  const video = videos.items[0];
  const { getByText } = render(
    <VideoCard
      title={video.snippet.title}
      description={video.snippet.description}
      thumbnail={video.snippet.thumbnails.default.url}
    />
  );
  expect(getByText(video.snippet.title)).toBeInTheDocument();
});

test('renders description correctly', () => {
  const video = videos.items[0];
  const { getByText } = render(
    <VideoCard
      title={video.snippet.title}
      description={video.snippet.description}
      thumbnail={video.snippet.thumbnails.default.url}
    />
  );
  expect(getByText(video.snippet.description)).toBeInTheDocument();
});
