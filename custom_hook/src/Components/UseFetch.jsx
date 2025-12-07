import { useEffect } from "react"
import {useState} from "react";

const UseFetch = (url) => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((data) => {setData(data)})
        .catch((error) => {console.error(error);})
    },[])

    return [data];
}

export default UseFetch
