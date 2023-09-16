import React from 'react'

function ExperienceItem({titulo,fecha,descrip}) {
  return (
   <section className='bg-[#17161d] mb-4 p-4 text-left w-[90%] rounded-xl'>
    <h1 className='nes-text is-warning'>{titulo} </h1>
    <h1 className='text-white'>{fecha} </h1>
    <p className='text-gray-500'>{descrip} </p>
   </section>
  )
}

export default ExperienceItem