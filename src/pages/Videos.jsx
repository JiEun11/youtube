import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard';

function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => 
      fetch(`/videos/${keyword? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items)
  });

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : `hot`} </div>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is wrong</p>}
      {videos && <ul>
        { videos.map(video => <VideoCard key={video.id} video={video}/>)}
        </ul>}
    </>
  )
}

export default Videos