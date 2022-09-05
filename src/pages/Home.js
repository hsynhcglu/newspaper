import React from 'react'
import TrendNews from '../components/TrendNews'
import HotNews from '../components/HotNews';
import News from '../components/News';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";

const Home = () => {
  const [loading,setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchData=async ()=>{
        setLoading(true)
        const response=await axios.get(`${API_URL}?country=tr&tag=general`,{
            headers:{
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)
    
  return (
    <div className='bg-gray-100 h-full p-6'>
        <TrendNews />
        <HotNews />
        <div className='container mx-auto grid grid-cols-2 gap-6'>
          {data?.map((item) => {
            return (
              <News key={item.key} image={item.image} name={item.name} description={item.description} />
            )
          })}
        </div>
    </div>
  )
}

export default Home

{/* {data.map((item) => {
                return (
                    <p>{item.name}</p>
                )
            })} */}