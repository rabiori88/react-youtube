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
            {videos && <ul>
                {
                    videos.map(video => <VideoCard key={video.id} video={video}/>) 
                }</ul>}
        </div>
    )
}