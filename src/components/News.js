import React from 'react'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineSaveAlt } from 'react-icons/md';
import {Link} from 'react-router-dom'

const News = ({image,name,description,keya,source}) => {

  return (
        <div className='max-h-[450px]'>
            <Link to={`/newsdetail/${keya}`}>
                <img className='w-full mb-4 h-60' src={image} alt='newsimage' />
                <h1 className='mb-2 font-bold'>{name}</h1>
                <p className='text-sm text-ellipsis overflow-hidden whitespace-nowrap'>{description}</p>
                <div className='flex space-x-4 text-gray-400 justify-center mt-8'>
                    <h2>2 hours ago</h2>
                    <h2>By {source} &nbsp;</h2>
                    <span>|&nbsp;4min read</span>
                </div>
                <div className='flex space-x-4 justify-center mt-4'>
                    <AiOutlineHeart size={20} />
                    <AiOutlineShareAlt size={20} />
                    <MdOutlineSaveAlt size={20} />
                </div>
            </Link>
        </div>
  )
}

export default News


                
            