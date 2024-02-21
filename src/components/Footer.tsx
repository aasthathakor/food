import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container pt-40'>
        <div className='grid md:grid-cols-3 gap-16'>
            <div className='space-y-4'>
                <h2 className='text-xl font-bold'>About Us</h2>
                <p className='leading-[1.8]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Sit eligendi maiores sequi delectus facilis! Sit, 
                debitis? Commodi placeat atque praesentium veritatis autem. 
                </p>
            </div>
        <div className='space-y-4'>
            <h2 className='text-xl font-bold'>The Restaurent</h2>

            <ul className='space-y-2'>
                <li>About us</li>
                <li>Chefs</li>
                <li>Events</li>
                <li>Contect</li>
                <li>Address</li>
            </ul>
        </div>

        <div>
            <div className='flex gap-8 text-red-500 text-2xl pt-16'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaPinterest />

            </div>
        </div>

        </div>

    </div>
  )
}

export default Footer;