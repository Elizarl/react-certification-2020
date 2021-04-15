import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledVideoDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

function YtVideoDescription({ id }) {
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
    <StyledVideoDescription>
      {ytVideoDetails !== null && (
        <>
          <h1>{ytVideoDetails.items[0].snippet.title}</h1>
          <div>{ytVideoDetails.items[0].snippet.description}</div>
        </>
      )}
    </StyledVideoDescription>
  );
}
export default YtVideoDescription;
