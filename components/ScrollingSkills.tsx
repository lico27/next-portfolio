import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { skills } from '@/data/index';

const ScrollingSkills = () => {
    return (
        <div>
            <div className="flex w-full items-center justify-center">
                <h2 className="relative z-10 subheading">I have&nbsp;</h2>
                <h2 className="relative z-10 subheading underline decoration-2 decoration-green-100 underline-offset-4">experience</h2>
                <h2 className="relative z-10 subheading">&nbsp;with these&nbsp;</h2>
                <h2 className="relative z-10 subheading underline decoration-2 decoration-green-100 underline-offset-4">technologies</h2>
                <h2 className="relative z-10 subheading">:</h2>
            </div>
            <div className="h-[10rem] mb-5 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
              />
            </div>
            <div className="flex w-full items-center justify-center">
                <h2 className="relative z-10 subheading underline decoration-2 decoration-green-100 underline-offset-4">Certifications</h2>
                <h2 className="relative z-10 subheading">&nbsp;that I have&nbsp;</h2>
                <h2 className="relative z-10 subheading underline decoration-2 decoration-green-100 underline-offset-4">completed</h2>
                <h2 className="relative z-10 subheading">&nbsp;or am&nbsp;</h2>
                <h2 className="relative z-10 subheading underline decoration-2 decoration-green-100 underline-offset-4">working towards:</h2>
            </div>
        </div>
      );
    }

export default ScrollingSkills