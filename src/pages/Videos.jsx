import React from  'react'
import { useParams } from 'react-router-dom'

export default function Videos() {
    const {keyword} = useParams();
    return ( 
        <div>
            <p>Viedos {keyword? `🔎${keyword}` : `🚀`} </p>           
        </div>
    )
}