import React from 'react'
import htmlImage from '../assets/tecnologias/html.png';

export default function HabilidadesIcon({text,img}) {
  return (
    <section className='flex items-center px-4 py-2 mx-4 mb-6 bg-white rounded-xl hover:shadow-red-500/50 hover:shadow-lg hover:-translate-y-4 ease-in duration-100 '>
        <img src={img} width={"100px"}  className='py-2 w-[50px] h-[70px]'/>
        <h1 className='pl-2'> {text} </h1>
    </section>
  )
}
