import React from 'react';
import Proyecto from '../components/Proyecto';
import puka from '../assets/proyectos/puka.png';
import retail from '../assets/proyectos/retail.png';
import dc from '../assets/proyectos/dc.png';
import reactImage from '../assets/tecnologias/react.png';
import tailwindImage from '../assets/tecnologias/tailwind.png';
import viteImage from '../assets/tecnologias/vite.svg';
import htmlImage from '../assets/tecnologias/html.png';
import cssImage from '../assets/tecnologias/css.png'

export default function Proyectos() {
  return (
    <section id='proyectos' className=' bg-[#131219] py-32 lg:px-24'>
      <h1 className='text-white text-4xl'>Mis proyectos</h1>
      <div className="flex justify-around flex-wrap">
        <Proyecto
          img={puka}
          titulo={"Puka Yurac Page"}
          tecnologias={[reactImage, tailwindImage, viteImage]}
          descripcion={"Pagina hecha para la empresa Puka Yurac en donde muestra sus productos y servicios de una forma llamativa"}
        />
        <Proyecto
          img={retail}
          tecnologias={[htmlImage, cssImage]}
          titulo={"Retail 100% Page"}
          descripcion={"Pagina hecha para la empresa Retail 100% para ofrecer sus productos y servicios"}
        />
        <Proyecto
          img={dc}
          tecnologias={[reactImage, tailwindImage, viteImage]}
          titulo={"Clon de Página de DC Shoes"}
          descripcion={"Clon de la página principal de DC para practicar"}
        />
      </div>
    </section>
  )
}

