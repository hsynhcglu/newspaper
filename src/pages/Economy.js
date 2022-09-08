import React from 'react'
import EconomyItem from '../components/EconomyItem'
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import Footer from '../components/Footer';

const Economy = () => {
  const [loading,setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchData=async ()=>{
        setLoading(true)
        const response=await axios.get(`${API_URL}?country=tr&tag=economy`,{
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
    <>
      <div className='container mx-auto p-10'>
        {loading && <p>Loading...</p>}
        <div className='flex'>
          <div className='grid grid-cols-3 gap-4'>
            {data?.map((item) => {
              return (
                <EconomyItem keya={item.key} key={item.key} image={item.image} name={item.name} description={item.description} source={item.source}/>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Economy