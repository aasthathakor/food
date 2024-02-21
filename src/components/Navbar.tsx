import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px] rounded bg-orange-100'>
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Dish</li>
                <li>Content</li>

            <button className='bg-red-500 text-white px-6 py-2 rounded-3xl'>
                Sign up
            </button>
            </ul>
            <AiOutlineMenu className='md:hidden text-red-500' size={30} />
        
        </div>

    </div>
  )
}

export default Navbar