"use client"
import React from 'react'
import { VscTerminalUbuntu } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'

function Logo() {
    const router = useRouter();
    return (
        <div
        onClick={()=>{
            router.push('/')
        }}
         className='flex gap-2 cursor-pointer'>
            <div className='flex flex-col justify-center'><VscTerminalUbuntu size={30} /></div>
            <div className='flex flex-col justify-center'>
                <div className='flex gap-2'>
                    <p className='text-4xl font-bold'>Nav</p>
                    <div className='bg-white text-black p-1 text-xs rounded-full flex flex-col justify-center self-center'>secured</div>
                </div>
            </div>
        </div>
    )
}

export default Logo
