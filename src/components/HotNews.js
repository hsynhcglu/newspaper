import React from 'react'

const HotNews = () => {
  return (
    <div className='container mx-auto bg-red-600 h-16 mt-6 mb-6 p-2 flex items-center space-x-8 justify-center'>
        <div className='bg-white w-36 h-full flex justify-center items-center text-red-600 cursor-pointer'>Breaking News</div>
        <h3 className='text-white font-bold text-xl'>Kanye West says he's running for president in 2020.</h3>
    </div>
  )
}

export default HotNews