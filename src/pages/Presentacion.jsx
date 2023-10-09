import React from 'react'
import gif from '../assets/gif.gif'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"

export default function Presentacion() {

  return (
    <section id='inicio' className='bg-[#181818] h-screen flex items-center px-4 md:px-12 justify-around'>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className="md:px-0">
        <h1 className='nes-text text-white pb-4'>Hola, mi nombre es</h1>
        <span className='nes-text is-primary  text-4xl md:text-5xl'>Josue Castillo</span>
        <p className='text-white pt-6 flex'>Soy&nbsp;
          <Typewriter
            options={{
              strings: [' Desarrollador Web', ' Desarrollador Junior', ' Estudiante de software', ' Gamer'],
              autoStart: true,
              loop: true,
            }} />
        </p>
        <div className="pt-12 flex justify-around w-[85%] lg:w-1/2">
          <a href="https://www.linkedin.com/in/josuecastillomurrieta/" target='_blank'><i className="nes-icon nes-pointer linkedin is-large"></i></a>
          <a href="mailto:josuecastillom07@gmail.com" target='_blank'><i className="nes-icon nes-pointer gmail is-large" ></i></a>
          <a href="https://github.com/feittanJC" target='_blank'><i className="nes-icon nes-pointer github is-large" ></i></a>
          <a href="https://www.instagram.com/feittanj/" target='_blank'><i className="nes-icon nes-pointer instagram is-large" ></i></a>
        </div>
      </motion.div>
      <motion.div animate={{ y: [-20, 20, -20] }} transition={{
        duration: 2,
        ease: "easeInOut",

        repeat: Infinity
      }} className="hidden md:flex md:w-[60%] lg:w-1/3">
        <motion.img initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className='hidden md:block rounded-full w-[100%]' src={gif} alt="" />
      </motion.div>
    </section>
  )

}
