import React from 'react'
import Dash from './Dash';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        img:    "/services__1.png",
        title:  "Professional Kitchen",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, quas?",
    },
    {
        img:    "/services__2.png",
        title:  "Delevery",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ipsum.",

    },
    {
        img:    "/services__3.png",
        title:  "Wine List",
        desc:   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ipsa!",

    },
    {
        img:    "/services__4.png",
        title:  "Free Wifi",
        desc:   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ipsa!",

    },
]

const Services = () => {
  return (
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Choose Best <span className='text-red-500'>Service</span>
            </h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, repudiandae?<br></br>
                Lorem ipsum dolor sit amet.
            </p>
            <div className='w-fit mx-auto'>
                <Dash />

            </div>
        </div>
    
    
        <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>
            {servicesData.map((item, index) => (
                <ServiceCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                />
            ))}
        </div>
    </div>
  );
}

export default Services;