import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineSaveAlt } from 'react-icons/md';

const TrendNews = () => {

    const [loading,setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchData=async ()=>{
        setLoading(true)
        const response=await  axios.get(`${API_URL}?country=tr&tag=general`,{
            headers:{
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result[0])
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='container mx-auto flex'>
        <div className='flex-1'>
            <img className='object-cover w-full h-96' src={data?.image}/>
        </div>
        <div className='flex-1 grid items-center h-96 justify-center pl-20 pr-20'>
            <div className='justify-between flex h-4 items-center w-full'>
                <h4 className='text-red-600 font-bold'>Trending</h4>
                <div className='flex space-x-2'>
                    <AiOutlineHeart size={20} />
                    <AiOutlineShareAlt size={20} />
                    <MdOutlineSaveAlt size={20} />
                </div>
            </div>
            <h1 className='text-5xl font-semibold '>
                {data?.name}
            </h1>
            <p>
                {data?.description}
            </p>
            <div className='flex space-x-4 text-gray-400'>
                <h2>2 hours ago</h2>
                <h2>By Lucy Hiddleston &nbsp;</h2>
                <span>|&nbsp;4min read</span>
            </div>
        </div>
    </div>
  )
}

export default TrendNews