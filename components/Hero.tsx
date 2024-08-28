import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#3D7867' />
            {/* <Spotlight className='top-10 -right-200 h-[80vh] w-[50vw]' fill='#649672' /> */}
            <Spotlight className='top-28 left-80 h-[80vh]' fill='#5AD767' />
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.07] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>

                <p className='text-center heading !text-5xl md:!text-6xl'>
                    Hi, I'm Liam.
                </p>

                <TextGenerateEffect 
                    className="heading"
                    words="I'm an aspiring Data Scientist from the UK."
                />

                <Contact />

            </div>
        </div>

    </div>
  )
}

export default Hero