import React from 'react'
import instagramImage from '../assets/instagram.png'

export default function SocialMediaItem({ img, url, color }) {
    
    //const gradientClass = `bg-gradient-to-r from-purple-600 to-${color}-500`;
  
    const colorClasses = {
        blue: 'to-blue-600',
        pink: 'to-pink-600',
        gray: 'to-gray-600',
      };

      const colorClassesFrom = {
        blue: 'from-blue-400',
        pink: 'from-pink-400',
        gray: 'from-gray-400',
      };
    
      const gradientClass = colorClasses[color] || 'from-purple-600';
      const gradientFromClass = colorClassesFrom[color] || 'from-pink-600';

    return (
      <div className="relative group w-[47%] mb-5">
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${gradientFromClass} ${gradientClass} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
        ></div>
        <div className="relative px-7 py-6 bg-[#181818] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6">
          <a href={url} target="_blank">
            <img src={img} width={"300px"} height={"300px"} />
          </a>
        </div>
      </div>
    );
  }