import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import ErrorPage from '../pages/ErrorPage';

export default function ChannelInfo({id, name}) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => {
      return youtube.channelImageUrl(id);
    },
  });

  return (
    <div>
      {url && <img src={url} alt={name}/> }
      <p>{name}</p>
    </div>
  )
}
