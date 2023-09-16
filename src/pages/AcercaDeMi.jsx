import React from 'react'
import avatar from '../assets/avatar.png'
import { motion } from "framer-motion"

export default function AcercaDeMi() {
  return (
    <section  id="sobremi" className='bg-[#0F2866] h-screen text-center py-12 flex justify-center items-center'>

      <motion.div initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:1}} viewport={1} className="bg-[#181818] w-3/4 my-12 p-12 text-white rounded-xl flex ">
        <img src={avatar} alt="" className='w-1/2' />
        <div className="flex flex-col w-1/2">
          <h1 className='nes-text is-warning text-5xl text-center pb-20 pt-12'>Sobre mi</h1>
          <div className="pb-20">
            <h1 className='nes-text is-primary text-4xl text-left pb-4'>Josue Castillo</h1>

            <h1 className='nes-text is-primary text-2xl text-left'>Desarrollador Frontend</h1>
          </div>

          <p className='text-left '>Desarrollador Frontend Junior de 19 años nacido en Lima, Peru. Apasionado por la tecnologia y dispuesto a afrontar nuevos retos.  </p>
        </div>
      </motion.div>
    </section>
  )
}
