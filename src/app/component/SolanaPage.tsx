import React from 'react'
import Button from './ui/Button'
import Image from 'next/image'

function SolanaPage({setThird} : {
    setThird : (value : boolean) => void
}) {
    return (
        <div>
            <div className="text-3xl md:text-5xl font-bold" >Wallet Recovery Phrase</div>
            <p className="text-neutral-500 text-lg md:text-xl">Write it down and store it safely. Do not share with anyone.</p>
            <div className='flex flex-col md:flex-row gap-2 mt-7'>
                <input className='w-full px-2 py-1 focus:outline-none rounded-lg border-1 border-neutral-700' type="password" placeholder='Enter your Secret phase or leave blank to generate' />
                <Button onClick={() => setThird(true)} title='Generate' />
            </div>
            <div className="mt-7 relative w-full h-[500px]">
          <Image
            src="/front.jpg"
            alt="Wallet interface"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        </div>
    )
}

export default SolanaPage
