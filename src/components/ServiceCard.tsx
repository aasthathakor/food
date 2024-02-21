import React from 'react'
import Image from 'next/image';

interface propsType {
    img:    string;
    title:  string;
    desc:   string;
}


const ServiceCard: React.FC<propsType> = ({ img, title, desc}) => {
  return (
    <div className='space-y-3 text-center'>
        <Image
        className="mx-auto"
        src={img}
        width={70}
        height={70}
        alt={title}
        />
        <div className='uppercase'>
            {title}

            <div className='flex gap-2 w-fit mx-auto mt-2'>
                <div className='bg-red-500 w-[7px] h-[7px] rounded-full'></div>
                <div className='bg-red-500 w-[7px] h-[7px] rounded-full'></div>
                <div className='bg-red-500 w-[7px] h-[7px] rounded-full'></div>   
            </div>
        </div>
        <p className='text-[14px] text-gray-700'>{desc}</p>
    </div>
  )
}

export default ServiceCard