import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import Footer from './Footer';
import EditorPicks from './EditorPicks';
import { AiOutlineMail, AiOutlineComment, AiOutlineHeart, AiOutlineTwitter } from 'react-icons/ai';
import { MdIosShare, MdSaveAlt } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Hashtags from './Hashtags';
import Caroline from '../images/caroline.jpg';

const NewsDetail = () => {

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
        setData(response.data.result[id])
    }
    useEffect(()=>{
      fetchData()
  },[])

    const { id } = useParams();
    // const [newData, setNewData] = useState(null);

    // useEffect(() => {
    //     let newData = data?.find((newData) => data.id === parseInt(id));
    //     if (newData) {
    //     setData(newData);
    //     }
    // }, []);


  return (
    <div>
      {loading && <p>Loading...</p>}
      {data ? (
        <div>
          <div className='bg-[#0E1E32] w-full h-80'>
            <div className='container mx-auto'>
              <div className='w-full h-48 items-center flex justify-center'>
                <h1 className='text-white text-4xl'>{data?.name}</h1>
              </div>
            </div>
          </div>
          <div className='container mx-auto -mt-32 mb-32'>
            <div className='w-full mb-10'>
              <img className='w-full h-96' src={data?.image} alt='newsimage' />
            </div>
            <div className='w-full flex'>
              <div className='space-y-10'>
                <div className='flex space-x-4'>
                      <h2>2 hours ago</h2>
                      <h2>By {data?.source}</h2>
                      <span>|&nbsp;4min read</span>
                </div>
                <div>{data?.description}</div>
                <div className='p-8 h-64 shadow-xl border-t-4 border-black space-y-4'>
                  <h1 className='text-2xl font-semibold'>Sign Up for The NBC Newsletter</h1>
                  <h2 className='text-gray-500'>By Caroline Casey</h2>
                  <p className='text-black'>A weekly, ad-free newsletter that helps 786,000+ readers stay in the know, be productive and think more critically about the world. <span className='underline'>Take a look</span></p>
                  <button className='w-64 h-12 bg-red-600 text-white flex items-center justify-center'><AiOutlineMail size={25} />&nbsp; GET THIS NEWSLETTER</button>
                </div>
                <div className='flex space-x-4'>
                  <Hashtags title='NBCBLK' />
                  <Hashtags title='TRENDING' />
                  <Hashtags title='LEWIS' />
                  <Hashtags title='FREEBIE' />
                </div>
                <div className='flex justify-between pb-6 border-b-2'>
                  <div className='flex items-center space-x-6'>
                    <AiOutlineHeart size={35} /> 28
                    <AiOutlineComment size={35} /> 21 response
                  </div>
                  <div className='flex items-center space-x-6'>
                    <MdIosShare size={25} />
                    <MdSaveAlt size={25} />
                    <BiDotsHorizontalRounded size={25} />
                  </div>
                </div>
                <div className='flex h-52 space-x-10 pt-8'>
                  <img className='w-32 h-32 rounded-full' src={Caroline} alt='caroline'  />
                  <div>
                    <h1 className='text-semibold text-gray-500'>Author</h1>
                    <h2 className='text-xl font-bold'>Caroline Casey</h2>
                    <p>Caroline Casey is an award-winning social activist and founder of <span className='text-red-600'>The Valuable 500,</span>a global movement aimed at getting 500 companies to commit to disability inclusion.</p>
                  </div>
                  <button className='border-2 border-red-300 w-64 h-12 flex items-center justify-center text-red-500 font-semibold tracking-wider mt-6 transition-all hover:bg-red-300 hover:text-white'><AiOutlineTwitter size={25} /> FOLLOW</button>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <EditorPicks />
          <Footer />
        </div>
        
      ) : (
        <p className='text-white'>Hata!</p>
      )}
    </div>
  )
}

export default NewsDetail