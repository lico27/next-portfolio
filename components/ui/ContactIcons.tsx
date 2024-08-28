import React from 'react'
import { contactDetails } from "@/data/index";
import { HoverBorderGradient } from "./HoverBorderGradient";

const ContactIcons = () => {
  return (
    <div className="flex items-center gap-3">
      {contactDetails.map((info) => (
        <HoverBorderGradient
          key={info.id}
          as="a"
          href={info.link}
          className="dark:bg-black dark:text-white flex items-center justify-center p-3 rounded-lg"
          duration={0.75}
        >
          <div className='rounded-lg'>
            <info.img  
              className='size-6 md:size-8'
            />
          </div>
        </HoverBorderGradient>
      ))}
    </div>
  );
}

export default ContactIcons;


