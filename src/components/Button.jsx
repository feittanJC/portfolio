import React from 'react'
import { Link } from 'react-scroll'

export default function Button() {
  return (
    <Link to='inicio'>
        <button className='bottom-[2%] right-[2%] fixed z-10 nes-btn is-error rotate-90'> &lt; </button>
    </Link>
    
  )
}
