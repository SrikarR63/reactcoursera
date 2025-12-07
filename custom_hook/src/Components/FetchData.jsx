import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
    const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);

  return (
    <>
    <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     <ul className='list_data_main'>
        {
        data.map((d,index)=>(
            <>
            <li key={index} className='list_data'>
            <h3>Name: {d.name}</h3>
            <img src={d.image} alt="Image" width="45px" height="75px"></img>
            <p>Importance: <strong>{d.importance}</strong></p>
            <p>Benefits: <strong>{d.benefits}</strong></p>
            </li>   
            </>
            )
        )
    }
     </ul>
    </>
  )
}

export default FetchData