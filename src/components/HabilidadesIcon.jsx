import React from 'react'
import htmlImage from '../assets/tecnologias/html.png';

export default function HabilidadesIcon({text,img}) {
  return (
    <section className='flex flex-col items-center p-2 mx-4 bg-white rounded-xl hover:shadow-red-500/50 hover:shadow-lg hover:-translate-y-4 ease-in duration-100'>
        <img src={img} width={"100px"}  className='py-2 w-[100px] h-[130px]'/>
        <h1> {text} </h1>
    </section>
  )
}
