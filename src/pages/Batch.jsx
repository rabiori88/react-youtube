import axios from 'axios';
import React from 'react'

export default function Batch() {

    // var data =  axios.create({
    //   baseURL: "https://www.googleapis.com/youtube/v3",      
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    //   headers: {
    //     'X-Requested-With': 'XMLHttpRequest'
    //   }
    // });

    const Test = async () =>{
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3',
            {
                params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                part: "snippet",
                maxResults: 25,
                chart: "mostPopular",
                },

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  

        } catch(err) {

        }
    }
    
    return (
    <div>
        <button className='bg-zinc-600 px-4'> 
            Batch Test
        </button>
    </div>
  )
}
