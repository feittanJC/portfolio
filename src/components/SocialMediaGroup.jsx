import React from 'react'
import SocialMediaItem from './SocialMediaItem'

export default function SocialMediaGroup() {
  return (
    <section className='flex flex-wrap justify-between'>
        <SocialMediaItem/>
        <SocialMediaItem/>
        <SocialMediaItem/>
        <SocialMediaItem/>
    </section>
  )
}
