import React from 'react'
import instagramImage from '../assets/instagram.png'

export default function SocialMediaItem({ img, url,color }) {
    return (
        <div className="relative group w-[47%] mb-5 ">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-[#181818] ring-1 ring-gray-900/5 rounded-lg leading-none flex  items-center justify-center space-x-6">
                <a href={url} target='_blank'>
                    <img src={img} width={"300px"} height={"300px"} />
                </a>


            </div>
        </div>
    )
}
