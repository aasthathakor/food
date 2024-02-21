import React from 'react'
import Dash from './Dash';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className='container pt-40 feature'>
        <div className='feature-heading'> 

        <h2 className='text-6xl  font-bold'>Our</h2>
        <h2 className='text-6xl font-bold pt-2'>Featured
        <span className='text-red-500'>Food</span>
        </h2>
        </div>

        <p className='max-w-[550px] pt-10 text-gray-700'>
        Forget reinventing food—we’ve gone with popular catering requests, 
        offering generous portions of BBQ, Southern, 
        and Cajun/Creole meals. 
        Our menu also features a touch of Caribbean fun.
        And don’t worry—we’ve saved room for dessert.

        </p>
        <Dash />
        <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
                src="/grid__1.png"
                width={300}
                height={600}
                alt='grid image'
                />

                <div className='space-y-4'>
                    <Dash />
                <h2 className='font-medium text-xl'>Veg Salad</h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vitae tempore ea illum! 
                    Sapiente praesentium quam quo, 
                    ipsa nisi ducimus officiis corrupti repudiandae ex soluta quia eligendi 
                    aperiam perspiciatis dignissimos assumenda.</p>    
                </div>
            </div>

            <div className='w-fit mx-auto'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
                src="/grid__2.png"
                width={500}
                height={900}
                alt='grid image'
                />

                <div className='space-y-4'>
                    <Dash />
                <h2 className='font-medium text-xl'>Baked Apple</h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vitae tempore ea illum! 
                    Sapiente praesentium quam quo, 
                    ipsa nisi ducimus officiis corrupti repudiandae ex soluta quia eligendi 
                    aperiam perspiciatis dignissimos assumenda.</p>    
                </div>
            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
                src="/grid__3.png"
                width={300}
                height={600}
                alt='grid image'
                />

                <div className='space-y-4'>
                    <Dash />
                <h2 className='font-medium text-xl'>Veg Salad</h2>
                <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vitae tempore ea illum! 
                    Sapiente praesentium quam quo, 
                    ipsa nisi ducimus officiis corrupti repudiandae ex soluta quia eligendi 
                    aperiam perspiciatis dignissimos assumenda.</p>    
                </div>
            </div>

        </div>

    </div>
  )
}

export default Feature;