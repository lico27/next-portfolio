import React from 'react'
import { contactDetails } from "@/data/index";
import { HoverBorderGradient } from "./HoverBorderGradient";

const ContactIcons = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {contactDetails.map((info) => (
        <HoverBorderGradient
          key={info.id}
          className="dark:bg-black dark:text-white flex items-center justify-center p-3 rounded-lg"
          duration={0.75}
        >
          <div className='rounded-lg'>
            <info.img size={30} />
          </div>
        </HoverBorderGradient>
      ))}
    </div>
  );
}

export default ContactIcons;


