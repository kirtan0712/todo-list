import React from 'react'
import { useEffect, useState } from 'react'
export default function Weather() {
const[data, setData ]=useState([]);
const key = 'a71f93c74b7db7b63a7ed5fb3fcaf90a'
const location = 'london'
useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)
    .then(res=> res.json())
    .then(data=> setData(data))
},[]);
return <>
    {data && data.main ? <ul>
        <li>{data.name}</li> 
        <li>{data.main.temp}</li>
        <li>{data.main.humidity}</li>
        <li>{data.wind.speed}</li>
    </ul>
     : <p>Loading</p>
     }
    </>
}   
 