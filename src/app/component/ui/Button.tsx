"use client"
import React from 'react'
import { SiSolana } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";


function Button({title, onClick} : {
    title : string,
    onClick ?: () => void
}) {
  return (
    <div 
    onClick={onClick}
     className={`p-3 font-semibold rounded-lg font-xl bg-white
        hover:bg-neutral-400 transition-all ease-in-out
     text-black ${title != "Coming Soon" ? "cursor-pointer" : "cursor-not-allowed" }`}>
    <div className='flex gap-1'>
        {title === "Solana" && <div className='flex flex-col justify-center'><SiSolana/></div>}
        {title === "Ethereum" && <div className='flex flex-col justify-center'><FaEthereum/></div>}
      {title}
    </div>
    </div>
  )
}

export default Button
