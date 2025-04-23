"use client"
// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

import React from 'react'
import { Nunito } from "next/font/google";
import Logo from '../component/Logo';
import TokenLaunchpad from '../component/TokenLaunchpad';



const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: '500'
})

function Token() {
    return (
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className={`min-h-screen px-3 md:px-20 overflow-x-hidden py-5 ${nunito.className}`}>
                        <div className='flex justify-between'>
                            <Logo />
                            <div className='flex gap-2'>
                                <WalletMultiButton />
                                <WalletDisconnectButton />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full mt-10'>
                            <p className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-900 to-red-500 animate-gradient font-bold'>Create your Own Token</p>
                            <div className='mt-7'>
                                <TokenLaunchpad/>
                            </div>
                        </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

    )
}

export default Token 