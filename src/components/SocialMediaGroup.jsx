import React from 'react'
import SocialMediaItem from './SocialMediaItem'
import instagramImage from '../assets/instagram.png'
import githubImage from '../assets/github.png'
import linkdnImage from '../assets/linkdin.png'
export default function SocialMediaGroup() {

  const data = [
    { "url": "https://www.linkedin.com/in/josuecastillomurrieta/", "img": [linkdnImage],"color":"blue"},
    { "url": "https://www.instagram.com/feittanj/", "img": [instagramImage],"color":"pink" },
    { "url": "https://github.com/feittanJC", "img": [githubImage],"color":"gray" },

  ]

  return (
    <section className='flex flex-wrap justify-between'>

      {data.map((data, index) => (
        <SocialMediaItem img={data.img} url={data.url} color={data.color} key={index}/>
      ))}


    </section>
  )
}
