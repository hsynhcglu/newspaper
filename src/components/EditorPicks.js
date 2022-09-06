import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const EditorPicks = () => {

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
    <div className='container mx-auto mt-16 mb-8'>
        <div className='flex items-center space-x-4 mb-4'>
            <h1 className='font-semibold text-xl'>Editor Pick's</h1>
            <AiFillStar />
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper">
            
            {data?.map((item) => {
                return (
                    <SwiperSlide>
                        <div className='grid grid-cols-2 space-x-4'>
                            <img className='w-full h-60 grid' src={item.image}></img>
                            <div className='text-ellipsis overflow-hidden h-60'>
                                <h1 className='text-xl font-semibold mb-4'>{item.name}</h1>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default EditorPicks

