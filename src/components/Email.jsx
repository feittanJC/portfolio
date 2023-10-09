import React, { useRef }  from 'react'
import { email } from './SendEmail';

export default function Email() {

  const form = useRef();

  const handleForm = (event) => {
    event.preventDefault()
    console.log(form.current)
    email(form)
  }

  return (
    <div className="mx-auto  flex w-[90%] items-center justify-center">
      <div className="h-auto w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex py-16 flex-col h-full w-full items-center justify-center bg-gray-800 back text-white ">
          <h1 className=' text-center text-2xl pb-12'>Contacta conmigo</h1>
          <form ref={form} onSubmit={handleForm} className='w-[75%] flex flex-col text-center py-5'>

            <div className="flex flex-col pb-2">
              <label className='text-left nes-text is-primary pt-5'>Nombre</label>
              <input type='text' name='user_name' className='bg-gray-800 pt-2 border-2 outline-none border-[#181818] border-t-0 border-x-0 hover:border-blue-900 duration-200' required  ></input>
            </div>
            <div className="flex flex-col pb-2">
              <label className='text-left nes-text is-primary pt-5'>Correo</label>
              <input type='email' name='user_email' className='bg-gray-800 pt-2 border-2 outline-none border-[#181818] border-t-0 border-x-0 hover:border-blue-900 duration-200' required ></input>
            </div>
            <div className="flex flex-col pb-2">
              <label className='text-left pt-5 nes-text is-primary' >Mensaje</label>
              <textarea name='message' className='bg-gray-800 pt-2 border-2 outline-none border-[#181818] border-t-0 border-x-0 hover:border-blue-900 duration-200' required ></textarea>
            </div>
            <div className="">

              <button type="submit" className="nes-btn is-primary mt-8">Enviar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
