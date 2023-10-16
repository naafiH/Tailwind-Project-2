import React from 'react'
import "../assets/img"
import { Imgs } from '../assets/img'
export default function footer() {
  return (
    <div className='max-w-[1240px] mx-auto  grayscale opacity-50 border-y-2 h-24 flex flex-wrap justify-around items-center '>
        <div className='w-[100px]'>
            <img className='' src={Imgs.airbnb} alt="" />
        </div>
        <div className='w-[100px]'>
            <img className='' src={Imgs.dropebox} alt="" />
        </div>
        <div className='w-[100px]'>
            <img className='' src={Imgs.evernote} alt="" />
        </div>
        <div className='w-[100px]'>
            <img className='' src={Imgs.instapage} alt="" />
        </div>
        <div className='w-[100px]'>
            <img className='' src={Imgs.google} alt="" />
        </div>
        <div className='w-[100px]'>
            <img className='' src={Imgs.timeline} alt="" />
        </div>
    </div>
  )
}
