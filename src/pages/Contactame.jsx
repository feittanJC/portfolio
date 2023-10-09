import React from 'react'
import SocialMediaGroup from '../components/SocialMediaGroup'
import Email from '../components/Email'


export default function Contactame() {

  
  return (
    <div id='contactame' className='lg:h-screen bg-[#181818] px-4 py-32 md:px-8 lg:px-24'>

      <h1 className='text-white  text-2xl md:text-4xl'>Contactame</h1>
      <div className="flex flex-col items-center  lg:flex-row justify-around  pt-10">
        <div className=" w-2/3 lg:w-1/3 grid place-content-center">
          <SocialMediaGroup />
        </div>
        <div className=" md:w-[75%] lg:w-1/2 grid place-items-center">
          <Email />
        </div>





      </div>



    </div>
  )
}
