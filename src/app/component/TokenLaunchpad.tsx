"use client"
import React, { useState } from 'react'
import Button from './ui/Button'

function TokenLaunchpad() {
    const [ name, setName ] = useState("");
    const [ symbol, setSymbol ] = useState("");
    const [ supply, setSupply ] = useState(0);
    const [ image, setImage ] = useState();

  return (
    <div className='md:min-w-[800px] mx-auto p-6 border-1 border-neutral-800 rounded-lg space-y-4'>
      <div className='space-y-2'>
        <label className='block text-lg font-medium text-gray-200'>Token Name</label>
        <input 
          type="text" 
          placeholder='Ex. Solana'
          className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400'
        />
      </div>
      
      <div className='space-y-2'>
        <label className='block text-lg font-medium text-gray-200'>Token Symbol</label>
        <input 
          type="text" 
          placeholder='Ex. SOL'
          className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400'
        />
      </div>
      
      <div className='space-y-2'>
        <label className='block text-lg font-medium text-gray-200'>Initial Supply</label>
        <input 
          type="number" 
          placeholder='1'
          className='w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400'
        />
      </div>
      
      <div className='space-y-2'>
        <label className='block text-lg font-medium text-gray-200'>Token Image</label>
        <input 
          type="file" 
          accept="image/*"
          className='w-full cursor-pointer p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400'
        />
      </div>
      <div className='mt-7'>
      <Button title='Submit'/>
      </div>
    </div>
  )
}

export default TokenLaunchpad
