import React from 'react'

function Header() {
    return (
        <div className='flex gap-2'>
            <img src="logo2.png" alt="logo" className='flex flex-col justify-center' />
            <div className='flex flex-col justify-center'>
                <div className='flex gap-2'>
                    <p className='text-4xl font-bold'>Nav</p>
                    <div className='bg-white text-black p-1 text-xs rounded-full flex flex-col justify-center self-center'>secured</div>
                </div>
            </div>
        </div>
    )
}

export default Header
