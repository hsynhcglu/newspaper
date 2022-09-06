import React from 'react'
import Logo from '../images/logo.png'
import { AiOutlineWifi, AiOutlineReddit } from 'react-icons/ai';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='bg-[#0E1E32] w-full h-72 flex items-center justify-around'>
        <div className='grid grid-cols-3 container mx-auto'>
            <div>
                <img className='w-44 h-32' src={Logo} />
                <h2 className='text-gray-400'>copyright &copy; 2020 | NBC NEWS</h2>
            </div>
            <div>
                <ul className='space-y-4'>
                    <li className='text-white font-semibold cursor-pointer'>Privacy Policy</li>
                    <li className='text-white font-semibold cursor-pointer'>Do not sell my personal info</li>
                    <li className='text-white font-semibold cursor-pointer'>Terms of Service</li>
                    <li className='text-white font-semibold cursor-pointer'>nbcnews.com Site Map</li>
                </ul>
            </div>
            <div className='grid'>
                <div>
                    <ul className='flex space-x-10'>
                        <li className='text-white font-semibold cursor-pointer'>About</li>
                        <li className='text-white font-semibold cursor-pointer'>Contact</li>
                        <li className='text-white font-semibold cursor-pointer'>Careers</li>
                        <li className='text-white font-semibold cursor-pointer'>Coupons</li>
                    </ul>
                </div>
                <div className='flex space-x-10'>
                    <AiOutlineWifi className='text-white cursor-pointer' size={40} />
                    <FiTwitter className='text-white cursor-pointer' size={40} />
                    <AiOutlineReddit className='text-white cursor-pointer' size={40} />
                    <FiFacebook className='text-white cursor-pointer' size={40} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer