import React from  'react'
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom' 
import { useYoutubeApi } from '../context/YoutubeContext';


export default function Videos() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();

    const {
        isLoading,
        error,
        data: videos,
    } = useQuery(
        ['list', keyword] , ()=> youtube.search(keyword));

    return ( 
        <div>
            <p>Viedos {keyword? `🔎${keyword}` : `🚀`} </p>   
            {isLoading && <p>Loading...</p> }
            {error && <p>Something is wrong</p>}
            {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg:graid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                {
                    videos.map(video => <VideoCard key={video.id} video={video}/>) 
                }</ul>}
        </div>
    )
}