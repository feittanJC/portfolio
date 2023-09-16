import React from 'react'
import HabilidadesIcon from './HabilidadesIcon'

export default function HabilidadesItem({data, titulo }) {
  return (
    <section className='py-5'>
        <h1 className='text-xl '> {titulo} </h1>
        <div className='flex pt-8'>

          {data.map((habilidad,index) =>(
            <HabilidadesIcon key={index} text={habilidad.nombre} img={habilidad.img}/>
          ))}


            
        </div>
    </section>
  )
}
