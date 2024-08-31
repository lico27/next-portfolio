import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className='pb-1 pt-36'>

        
        <div className="h-screen w-full dark:bg-black-100 flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-10 md:my-18 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>

               <div className="flex">
                    <p className='text-center heading !text-5xl md:!text-6xl'>
                        Hi,&nbsp;
                    </p>
                    <p className='text-center heading !text-5xl md:!text-6xl underline decoration-4 decoration-green-100 underline-offset-4'>
                        I'm Liam!
                    </p>
               </div>

                <p className='text-center heading !text-2xl md:!text-3xl my-10'>
                    I'm an aspiring Data Scientist from the UK.
                </p>

                <Contact />

            </div>
        </div>

    </div>
  )
}

export default Hero