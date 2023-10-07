import React from 'react'
import { Link } from 'react-scroll';

export default function NavItem({redirect,text,onClick}) {
  return (
    <Link to={redirect} spy={true} smooth={true} onClick={onClick}  duration={200}><li className='nes-pointer hover:text-[#209cee] [&>span]:hover:inline-block'>  <span className='hidden '> &gt;</span> {text}
          </li>
    </Link> 
  )
}
