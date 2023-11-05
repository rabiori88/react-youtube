import React from 'react'
import { useYoutubeApi } from '../context/YoutubeContext'
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({channelId}) {
  const {youtube} = useYoutubeApi();
  const { isLoading, error, data: videos} = useQuery(['related', channelId] , () => 
  youtube.relatedVideos(channelId) , {staleTIme:1000 * 60 * 5});


  return (
    <>
    <div>           
        {isLoading && <p>Loading...</p> }
        {error && <p>Something is wrong</p>}
        {videos && 
          <ul>
            {
              videos.map(video => <VideoCard key={video.id} video={video} type='list' /> ) 
            }
          </ul>}
        </div>
    </>
    
  )
}
