import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";



const Socials = () => {
  return (
    <div className='my-10 z-10 flex'>
        <div className='hover:shadow-2xl hover:shadow-emerald-500/[0.3] bg-transparent rounded-xl p-1'>
            <a href="https://github.com/lico27"> 
            <FaGithubSquare 
            className="text-white-100 w-14 h-14"
            /></a>
        </div>

        <div className='hover:shadow-2xl hover:shadow-emerald-500/[0.3] bg-transparent rounded-xl p-1'>
            <a href="https://github.com/lico27"> 
            <FaLinkedin 
            className="text-white-100 w-14 h-14"
            /></a>
        </div>

        <div className='hover:shadow-2xl hover:shadow-emerald-500/[0.3] bg-transparent rounded-xl p-1'>
            <a href="https://github.com/lico27"> 
            <FaSquareThreads 
            className="text-white-100 w-14 h-14"
            /></a>
        </div>
    </div>
  )
}

export default Socials


