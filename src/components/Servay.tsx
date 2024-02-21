import Image from 'next/image'
import React from 'react'

const Servay = () => {
  return (
    <div className='container pt-40'>
        <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
            <div>
                <Image
                className='w-[100%] h-auto lg:h-[90vh]'
                src="/survey.png"
                width={1000}
                height={600}
                alt='servey image'
                />
            </div>

            <div className='self-center'>
                <h2 className='text-4x1 md:text-6xl font-bold'>Survey</h2>
                <h2 className='text-4xl md:text-6xl font-bold pt-3'>
                    About our <span className='text-red-500'>Food</span>
                </h2>

                <p className='text-gray-700 pt-16'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Iusto aliquam excepturi voluptatum obcaecati odio delectus accusamus accusantium est provident sequi?
                </p>
                <p className='text-gray-700 pt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quam neque numquam excepturi cupiditate provident eum, aut illo asperiores sequi dicta?

                </p>

            </div>
        </div>
    </div>
  );
}

export default Servay