import React from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='flex-1 h-16'>
        <div className='container mx-auto bg-white h-full items-center flex justify-between'>
            <img className='w-18 h-14' src={Logo}></img>
            {/* <Link to='/corona'> Corona </Link> */}
            <ul className='flex space-x-16'>
                <li className='font-medium'>
                    <Link to='/'>Anasayfa</Link>
                </li>
                <li className='font-medium'>
                    <Link to='/economy'>Ekonomi</Link>
                </li>
                <li className='font-medium'>
                    <Link to='/technology'>Teknoloji</Link>
                </li>
            </ul>
            <div className='flex space-x-4'>
                <AiOutlineUser size={25} />
                <AiOutlineSearch size={25} />
                <BiMenuAltRight size={25} />
            </div>
        </div>
    </div>
  )
}

export default Header