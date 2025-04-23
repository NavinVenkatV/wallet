import React from 'react'
import Button from './ui/Button';
import { useRouter } from 'next/navigation';
import Logo from './Logo';

function Header() {
    const router = useRouter();
    return (
        <div className='flex justify-between'>
            {/* <img src="logo2.png" width={50} height={5} alt="logo" className='flex flex-col justify-center' /> */}
            <Logo/>
            <Button title='Launch Token' onClick={() => {
                router.push('/Token')
            }}/>
        </div>
    )
}

export default Header
