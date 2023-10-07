import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import NavItem from '../components/NavItem';
import HamburgerIcon from '../components/HamburgerIcon';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  var bg = '';

  navbar ? (bg = 'bg-black ease-in') : (bg = 'bg-transparent ease-in');

  return (
    <>
      <header className={`${bg} z-20 rounded-full fixed w-[98%] left-[1%] duration-300 py-6 px-4 md:px-12 mt-2 h-[10%] flex justify-between `}>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut', duration: 0.5 }} className="flex items-center">
          <img src={logo} alt="" width="10%" />
          <h1 className='md:text-2xl text-white'> &lt;<span className='nes-text is-primary'>feittan</span>/&gt; </h1>
        </motion.div>
        <motion.ul initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut', duration: 0.5 }} className='xl:w-[80%] hidden xl:flex text-xs nes-text is-warning justify-between items-center w-[55%] 2xl:text-sm'>
          <NavItem redirect={'inicio'} text={'Inicio'} />
          <NavItem redirect={'sobremi'} text={'Sobre mi'} />
          <NavItem redirect={'experiencia'} text={'Experiencia'} />
          <NavItem redirect={'proyectos'} text={'Proyectos'} />
          <NavItem redirect={'habilidades'} text={'Habilidades'} />
          <NavItem redirect={'contactame'} text={'Contactame'} />
        </motion.ul>

        <HamburgerIcon onClick={toggleMenu} /> 
      </header>
      {menuOpen && (
        <div className="bg-gray-700 fixed top-0 left-0 w-[80%] h-[80%] z-30" onClick={toggleMenu}> 
          {/* Agrega aquí los elementos del menú desplegable */}
          {/* Por ejemplo, puedes usar una lista de enlaces */}
          <ul>
            <li>
            <NavItem redirect={'inicio'} text={'Inicio'} onClick={toggleMenu}/>
            </li>
            <li>
            <NavItem redirect={'sobremi'} text={'Sobre mi'} onClick={toggleMenu}/>
            </li>
            {/* ...otros elementos de menú... */}
          </ul>
        </div>
      )}
    </>
  );
}
