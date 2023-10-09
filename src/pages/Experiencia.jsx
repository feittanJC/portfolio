import React from 'react'
import ExperienceItem from '../components/ExperienceItem'
import { motion } from "framer-motion"
export default function Experiencia() {
  return (
    <section id='experiencia' className='md:h-screen bg-[#209cee] py-32 lg:px-24 overflow-hidden'>
      <h1 className='nes-text text-white text-4xl'>Experiencia</h1>
      <section className='flex items-center flex-col justify-around py-12 sm:flex-row sm:items-start'>
        <motion.div initial={{x:-300 }} whileInView={{x:0}} transition={{duration:1}} viewport={{ once: true }} className="flex flex-col items-center text-center sm:w-1/2">
          <h1 className='nes-text is-warning text-2xl pb-8'>Educación</h1>
          <ExperienceItem titulo={"Tecsup"} fecha={"2021-2023"} descrip={"Tecnico en Diseño y Desarrollo de Software"}/>
          <ExperienceItem titulo={"Britanico"} fecha={"2017-2020"} descrip={"Nivel intermedio de ingles"}/>
        </motion.div>

        <motion.div initial={{x:300 }} whileInView={{x:0}} transition={{duration:1}} viewport={{ once: true }} className="flex flex-col items-center text-center sm:w-1/2">
          <h1 className='nes-text is-warning text-2xl pb-8'>Experiencia</h1>
          <ExperienceItem titulo={"Sapiens Consulting"} fecha={"2023 - Actual"} descrip={"Analista Programador"}/>
          <ExperienceItem titulo={"Retail 100%"} fecha={"2023"} descrip={"Desarrollador Frontend"} />
          <ExperienceItem titulo={"Puka&Yurac"} fecha={"2023"} descrip={"Desarrollador Frontend"} />
          <ExperienceItem titulo={"Tecsup"} fecha={"2022"} descrip={"Pasantia"} />
        </motion.div>
      </section>
    </section>
  )
}
