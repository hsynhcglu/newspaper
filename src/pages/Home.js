import React from 'react'
import TrendNews from '../components/TrendNews'
import HotNews from '../components/HotNews';
import News from '../components/News';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import { GoPrimitiveDot } from 'react-icons/go';
import Lewis from '../images/lewis.jpg'
import LocationNews from '../components/LocationNews';
import EditorPicks from '../components/EditorPicks';
import Footer from '../components/Footer';

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
    
  return (
    <div>
      <div className='bg-gray-100 h-full p-6'>
        <TrendNews />
        <HotNews />
        <div className='container mx-auto'>
          <div className='flex'>
            <div className='grid grid-cols-2 gap-6 w-4/6'>
              {data?.map((item) => {
                return (
                  <News key={item.key} image={item.image} name={item.name} description={item.description} />
                )
              })}
            </div>
            <div className='flex-1 pl-12 pr-12'>
              <div className='flex items-center h-8 space-x-6 mb-4'>
                <h1 className='text-red-600 text-xl font-bold'>Live</h1>
                <GoPrimitiveDot size={20}  className='text-red-600'/>
              </div>
              <div className='mb-8'>
                <img className='w-full h-60' src={Lewis} />
                <h1 className='mt-4 text-2xl'>Lewis Hamilton on a Live</h1>
              </div>
              <LocationNews />
            </div>
          </div>
        </div>
        <EditorPicks />
        
    </div>
    <Footer />
    </div>
  )
}

export default Home