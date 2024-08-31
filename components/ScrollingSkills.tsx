import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { skills } from '@/data/index';

const ScrollingSkills = () => {
    return (
        <div>
            <div>
                <h2 className="relative z-10 heading !text-xl !md:text-2xl underline decoration-green-200">I have experience using:</h2>
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