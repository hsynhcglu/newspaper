import React from 'react'

const LocationNews = () => {
  return (
    <div>
        <h1 className='text-2xl mb-4 font-bold'>
            Location News
        </h1>
        <div className='bg-white p-8 w-full space-y-6'>
            <h1>Get Location Specific News</h1>
            <input type='text' className='border-2 border-solid border-gray-300 p-3 w-full' placeholder='Enter Your Location'></input>
            <button className='bg-red-600 p-3 text-white w-32'>SUBMIT</button>
        </div>
    </div>
  )
}

export default LocationNews