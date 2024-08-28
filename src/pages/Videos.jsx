import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
import ErrorPage from './ErrorPage';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

function Videos() {
  const { keyword } = useParams();
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
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