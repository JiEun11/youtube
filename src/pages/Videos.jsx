import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
import ErrorPage from './ErrorPage';
import FakeYoutube from '../api/fakeYoutube';

function Videos() {
  const { keyword } = useParams();
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
  });
  return (
    <>
      <div>Videos {keyword ? `${keyword}` : `hot`} </div>
      {isLoading && <p>Loading...</p>}
      {error && <ErrorPage />}
      {videos && <ul>
        {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>
      }
    </>
  )
}

export default Videos