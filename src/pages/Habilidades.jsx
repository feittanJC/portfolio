import React from 'react'
import HabilidadesItem from '../components/HabilidadesItem'
import reactImage from '../assets/tecnologias/react.png';
import tailwindImage from '../assets/tecnologias/tailwind.png';
import htmlImage from '../assets/tecnologias/html.png';
import cssImage from '../assets/tecnologias/css.png'
import angularImage from '../assets/tecnologias/angular.png';
import nodeImage from '../assets/tecnologias/nodejs.png'
import netImage from '../assets/tecnologias/net.png'
import gitImage from '../assets/tecnologias/git.png'
import jsImage from '../assets/tecnologias/js.png'
import xamarinImage from '../assets/tecnologias/xamarin.png'
import sqlImage from '../assets/tecnologias/sql.png'
import javaImage from '../assets/tecnologias/java.png'
import pythonImage from '../assets/tecnologias/python.png'
import cImage from '../assets/tecnologias/c.svg'
import viteImage from '../assets/tecnologias/vite.svg';
import firebaseImage from '../assets/tecnologias/firebase.png';
import vercelImage from '../assets/tecnologias/vercel.png';
import awsImage from '../assets/tecnologias/aws.png'
import { motion } from "framer-motion"

export default function Habilidades() {

  const frontEndData = [
    { nombre: 'Html',img:[htmlImage] },
    { nombre: 'Css', img:[cssImage] },
    { nombre: 'Javascript', img:[jsImage] },
    { nombre: 'React', img:[reactImage] },
    { nombre: 'Angular',img:[angularImage] },
    { nombre: 'Tailwind',img:[tailwindImage] },
    { nombre: 'Vite',img:[viteImage] },
  ];

  const backEndData = [
    { nombre: 'NodeJS ', img:[nodeImage] },
    { nombre: 'C#', img:[cImage] },
    { nombre: 'Python', img:[pythonImage] },
    { nombre: 'Java', img:[javaImage] },
    { nombre: '.NET Core', img:[netImage] },
    { nombre: 'SQL Server', img:[sqlImage] },
  ];

  const otherData = [
    { nombre: 'Git', img:[gitImage] },
    { nombre: 'Xamarin', img:[xamarinImage]},
    { nombre: 'Vercel',img:[vercelImage] },
    { nombre: 'Firebase',img:[firebaseImage] },
    { nombre: 'AWS',img:[awsImage] },
  ];

  return (
    <div id='habilidades' className='2xl:h-screen bg-[#209cee] px-4 py-32 lg:px-24'>
       <h1 className='text-white text-2xl md:text-4xl'>Habilidades</h1>

        <motion.div initial={{x:-300 }} whileInView={{x:0}} transition={{duration:0.5}} viewport={{ once: true }}>
        <HabilidadesItem data={frontEndData} titulo={"FrontEnd"}/>
        </motion.div>
        <motion.div initial={{x:-300,opacity:0 }}  whileInView={{x:0,opacity:1}} transition={{duration:0.5, delay:0.5}} viewport={{ once: true }} className="">
          <HabilidadesItem data={backEndData} titulo={"BackEnd"}/>
        </motion.div>
        <motion.div initial={{x:-300,opacity:0 }}  whileInView={{x:0,opacity:1}} transition={{duration:0.5, delay:1}} viewport={{ once: true }} className="">
          <HabilidadesItem data={otherData} titulo={"Otros"}/>
        </motion.div>
        
       

    </div>
  )
}
