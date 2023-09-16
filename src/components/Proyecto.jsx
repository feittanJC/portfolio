import React from 'react'



export default function Proyecto({ img, titulo, descripcion, tecnologias, github, deploy }) {
  return (
    <section className='w-[90%] lg:w-[40%] xl:w-[30%] flex flex-col items-center relative pt-12'>
      <img src={img} className='rounded-lg' />
      <div className='bg-[#17161d] z-10 w-[90%] p-3 rounded-lg text-center -translate-y-8 text-white'>
        <h1 className='pb-8 pt-4 nes-text is-warning'>{titulo}</h1>
        <p className='text-left pb-4 text-sm'>{descripcion}</p>
        <div className="flex justify-center">
          {tecnologias.map((tecnologia, index) => (
            <img key={index} src={tecnologia} className='w-[30px]' alt={`Tecnología ${index}`} />
          ))}
        </div>
        <div className="flex pt-4 hover:decoration-0 justify-around">
          <a href={deploy} className=''>Ver página</a>
          <a href={github}>Github</a>
        </div>
      </div>
    </section>
  )
}

