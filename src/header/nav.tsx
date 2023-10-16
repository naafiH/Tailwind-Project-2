import React from 'react'
import  "../assets/img"

export default function nav() {
  return (
    <div className='flex px-10 justify-between max-w-[1240px] mx-auto items-center px-2 text-sm  h-20'>
        {/* <div className='flex'> */}
            <h1 className='font-bold'>Landrick.</h1>
            <ul className='flex uppercase '>
                <li className='px-4'>Home</li>
                <li className='px-4'>Landing</li>
                <li className='px-4'>Pages</li>
                <li className='px-4'>Contact</li>
            </ul>
            <button className='px-4 py-1 bg-blue-700 text-white rounded-lg'>Buy Now</button>
        {/* </div> */}
    </div>
  )
}
 