import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { skills } from '@/data/index';

const ScrollingSkills = () => {
    return (
        <div>
            <div className="flex w-full items-center justify-center">
                <h2 className="relative z-10 heading !text-xl !md:text-2xl">I have&nbsp;</h2>
                <h2 className="relative z-10 heading !text-xl !md:text-2xl  underline decoration-2 decoration-green-100 underline-offset-4">experience</h2>
                <h2 className="relative z-10 heading !text-xl !md:text-2xl">&nbsp;using:</h2>
            </div>
            <div className="h-[10rem] mb-5 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
              />
            </div>
        </div>
      );
    }

export default ScrollingSkills