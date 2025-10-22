import React from 'react';
import {useState} from 'react'
import UseFetch from './UseFetch';

const FetchYogaData = () =>{
    const[data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return(
        <>
        <h1 className='usefetch_heading'>Yoga Benefits</h1>
        <ul className='list_data_main'>
            {
                data.map((d,index)=>
                    (
                        <li className='list_data' key={index}>
                            <h3>Name: {d.name}</h3>
                            <p>Time Duration: <strong>{d.time_duration}</strong></p>
                            <p>Benefits: <strong>{d.benefits}</strong></p>
                        </li>
                    )
                )
            }
        </ul>
        </>
    )
}

export default FetchYogaData;