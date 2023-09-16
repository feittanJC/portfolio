import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import NavItem from '../components/NavItem';

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {

      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  var bg = ""

  navbar ? bg = 'bg-black ease-in' : bg = 'bg-transparent ease-in'

  return (

    <>
      <header className={`${bg} z-20 rounded-full fixed w-[98%] left-[1%] duration-300 py-6 px-12 mt-2  h-[10%] flex justify-between `}>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className="flex items-center">
          <img src={logo} alt="" width="10%" />
          <h1 className='text-2xl text-white'> &lt;<span className='nes-text is-primary'>feittan</span>/&gt; </h1> 
        </motion.div>
        <motion.ul initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className='flex nes-text is-warning justify-between items-center w-[55%] text-sm'  >
          <NavItem redirect={"inicio"} text={"Inicio"}/>
          <NavItem redirect={"sobremi"} text={"Sobre mi"}/>
          <NavItem redirect={"experiencia"} text={"Experiencia"}/>
          <NavItem redirect={"proyectos"} text={"Proyectos"}/>
          <NavItem redirect={"habilidades"} text={"Habilidades"}/>
          <NavItem redirect={"contactame"} text={"Contactame"}/>
        </motion.ul>
        
      </header>
    </>


  )
}
