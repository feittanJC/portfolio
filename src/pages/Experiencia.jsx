import React from 'react'
import ExperienceItem from '../components/ExperienceItem'

export default function Experiencia() {
  return (
    <section id='experiencia' className='h-screen bg-[#209cee] py-32 lg:px-24'>
      <h1 className='nes-text text-white text-4xl'>Experiencia</h1>
      <section className='flex justify-around py-12'>
        <div className="flex flex-col items-center text-center w-1/2">
          <h1 className='nes-text is-warning text-2xl pb-8'>Educación</h1>
          <ExperienceItem titulo={"Tecsup"} fecha={"2021-2023"} descrip={"Tecnico en Diseño y Desarrollo de Software"}/>
          
        </div>
        <div className="flex flex-col items-center text-center w-1/2">
          <h1 className='nes-text is-warning text-2xl pb-8'>Experiencia</h1>
          <ExperienceItem titulo={"Tecsup"} fecha={"2022"} descrip={"Pasantia"} />
          <ExperienceItem titulo={"Retail 100%"} fecha={"2023"} descrip={"Desarrollador Frontend"} />
          <ExperienceItem titulo={"Puka&Yurac"} fecha={"2023"} descrip={"Desarrollador Frontend"} />
          <ExperienceItem titulo={"Sapiens Consulting"} fecha={"2023 - Actual"} descrip={"Analista Programador"}/>
        </div>
      </section>
    </section>
  )
}
