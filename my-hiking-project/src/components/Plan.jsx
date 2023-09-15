/* eslint-disable no-unused-vars */
import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1548217395-6c6095abb49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="/" />
        </div>
        {/* Right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde.</p>
            <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eaque exercitationem perspiciatis maiores, facilis aperiam eveniet quasi sequi! Alias veritatis eos, dolorum suscipit consequatur doloribus quidem in corporis labore fugit!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan