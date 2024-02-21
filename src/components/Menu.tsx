import React from 'react';
import Dash from './Dash';
import Image from 'next/image';
import MenuCard from './MenuCard';


const menuData = [
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },
    {
        img:    "/cake.avif",
        title:  "Delicious Cake",
        desc:   "suger chocolate brownie, coco powder",
        price:  "$29.50",
    },    
];





const Menu = () => {
  return (
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                our <span className='text-red-500'>Menu</span>
            </h2>
            <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure.
            <br></br>
            Lorem ipsum dolor sit amet.
            </p>
            <div className='w-fit mx-auto'>
                <Dash />
            </div>
        </div>
        <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
            <li className='bg-red-500 text-white p-1'>Appetizers</li>
            <li>Breakfast</li>
            <li>Salad</li>
            <li>Meat & fish</li>
            <li>Soup</li>
            <li>Desert</li>            
            <li>Drink</li>
        </ul>


    <div className='grid lg:grid-cols-[35%,1fr] gap-10 pt-10'>
        <div className='w-fit mx-auto'>
            <Image 
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
            />
        </div>
        <div className='grid w-fit mx-auto sm:grid-cols-2 gap-4'>
            {menuData.map((item, index) => (
                <MenuCard 
                key={index}
                img={item.img as string}
                title={item.title}
                desc={item.desc}
                price={item.price}
                />
            ))}
        </div>
    </div>
    </div>
  );
};

export default Menu;