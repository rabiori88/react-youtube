import React, { createContext, useContext } from 'react'
import Youtube from '../api/Youtube';
import YoutubeClient from '../api/YoutubeClient';
//  import FakeYoutube from '../api/fakeYoutube';
//  import FakeYoutubeClient from '../api/fakeYoutubeClient';


export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children})
{
    return (
        <YoutubeApiContext.Provider value = {{youtube}} >
            {children}
        </YoutubeApiContext.Provider>
    )
}

export function useYoutubeApi() {    
    return useContext(YoutubeApiContext);
}