import React from 'react'
import SocialMediaGroup from '../components/SocialMediaGroup'
import Email from '../components/Email'


export default function Contactame() {



  return (
    <div id='contactame' className='h-screen bg-[#181818] py-32 lg:px-24'>

      <h1 className='text-white text-4xl'>Contactame</h1>
      <div className="flex justify-between pt-5">
        <div className="w-1/2">
          <SocialMediaGroup />
        </div>
        <div className="w-1/2">
          <Email />
        </div>





      </div>



    </div>
  )
}
