import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { skills } from '@/data/index';

const ScrollingSkills = () => {
    return (
        <div className="h-[10rem] mb-5 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
          />
        </div>
      );
    }

export default ScrollingSkills