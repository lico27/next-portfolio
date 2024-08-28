import React from 'react'
import { socialMedia } from "@/data/index";

const Socials = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6 my-10">
    {socialMedia.map((info) => (
      <div
        key={info.id}
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 rounded-lg border border-black-300"
      >
        <info.img width={100} height={70} />
      </div>
    ))}
  </div>
  )
}

export default Socials