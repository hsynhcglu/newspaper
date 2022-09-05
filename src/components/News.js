import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineSaveAlt } from 'react-icons/md';

const News = ({image,name,description}) => {

  return (
        <div>
            <img className='h-36 w-full mb-4' src={image} />
            <h1 className='mb-2 font-bold'>{name}</h1>
            <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap'>{description}</p>
            <div className='flex space-x-4 text-gray-400 justify-center mt-8'>
                <h2>2 hours ago</h2>
                <h2>By Lucy Hiddleston &nbsp;</h2>
                <span>|&nbsp;4min read</span>
            </div>
            <div className='flex space-x-4 justify-center mt-4'>
                <AiOutlineHeart size={20} />
                <AiOutlineShareAlt size={20} />
                <MdOutlineSaveAlt size={20} />
            </div>
        </div>
  )
}

export default News