import React from 'react'
import  "../assets/img"
import image1 from "../assets/img.png"

export default function body() {
  return (
    <div className='w-full '>
        <div className='max-w-[1240px] px-10  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
            <div className='lg:col-span-2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-10 px-2'>Our Creativity is your <br /><span className='text-blue-700'>success</span></h1>
                <p>launch campaign and benefit from experties on designing and <br />managing convertion centerd bootsrap 4 html page</p>
                <div className='space-x-4 my-10'>
                    <button className='px-4 py-2 rounded-lg  border-blue-700 bg-blue-700 text-sm text-white '>Get started</button>
                    <button className='px-4 py-1 rounded-lg border-2 border-blue-700  '>Documentation</button>
                </div>
            </div>
            <div className=''>
                <img className='mx-auto' src={image1} alt="" />
            </div>
        </div>
    </div>
  )
}
