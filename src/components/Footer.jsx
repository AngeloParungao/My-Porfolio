import React from 'react'
import logos from '../assets/images'

function Footer({ dark }) {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-2 p-16 md:p-10'>
      <img src={logos.icon} className="w-6" alt="logo" />
      <img src={dark ? logos.logo_white : logos.logo_black} className="w-14" alt="Title" />
      <span className='text-sm'>All Rights Reserved</span>
      <span className='text-sm'>Designed and Developed by Angelo Miguel Parungao</span>
      <span className='text-sm'>© 2024</span>
    </div>
  )
}

export default Footer

