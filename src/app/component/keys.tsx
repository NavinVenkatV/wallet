"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaChevronDown, FaRegTrashAlt } from "react-icons/fa";
import Button from './ui/Button';
import { motion } from "motion/react"

interface KeyPair {
    publicKey: string;
    privateKey: string;
}

function Keys({ coin }: { coin: string }) {
    const [keyPairs, setKeyPairs] = useState<KeyPair[]>([]);
    const [showPhrases, setShowPhrases] = useState(false);
    const [mnemonic, setMnemonic] = useState("");
    const [phrases, setPhrases] = useState<string[]>([]);
    const [i, setI] = useState(0);

    useEffect(() => {
        const fetchKeyPair = async () => {
            try {
                const res = await axios.post('/solana', { i });
                console.log(res.data);
                setKeyPairs([{ publicKey: res.data.publicKey, privateKey: res.data.privateKey }]);
                setMnemonic(res.data.phrases);
                // Split the mnemonic into words after it's set
                const words = res.data.phrases.split(" ");
                setPhrases(words);
                setI(prev => prev + 1);
            } catch (e) {
                alert(e);
            }
        };
        fetchKeyPair();
    }, []);

    const handleKey = async () => {
        try {
            const res = await axios.post('/solana', { i, mnemonic });
            setKeyPairs(prev => [...prev, { publicKey: res.data.publicKey, privateKey: res.data.privateKey }]);
            setMnemonic(res.data.phrases);
            // Split the new mnemonic into words
            const words = res.data.phrases.split(" ");
            setPhrases(words);
            setI(prev => prev + 1);
        } catch (e) {
            alert(e);
        }
    };

    const handleClear = async () => {
        setKeyPairs([]);
        setI(0);
        setMnemonic("");
        setPhrases([]);
    }

    return (
        <div className='mt-10'>
            <motion.div
            initial = {{ y: -30 }}
            animate = {{ y: 0 }}
            transition={{duration : 0.1, ease : 'easeInOut'}}
             className='border-1 border-neutral-800 p-7'>
                <div className='flex justify-between'>
                    <p className="text-3xl font-bold">Your Secret Phrase</p>
                    <p
                        onClick={() => setShowPhrases(prev => !prev)}
                        className='flex cursor-pointer flex-col justify-center hover:bg-neutral-800 self-center p-3 rounded-xl'>
                        <FaChevronDown />
                    </p>
                </div>
                {showPhrases && (
                    <motion.div
                    initial = {{ y: -10 }}
                    animate = {{ y: 0 }}
                    transition={{duration : 0.1, ease : 'linear'}}
                     className='mt-7 transition-all duration-300 ease'>
                        <div className="grid grid-cols-3 gap-2">
                            {phrases.map((word, index) => (
                                <div key={index} className='p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-center'>
                                    {word}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
            <motion.div
            initial = {{ y: 30 }}
            animate = {{ y: 0 }}
            transition={{duration : 0.4, ease : 'easeInOut'}}
            className='mt-7'>
                <div className='flex justify-between'>
                    <div className='text-4xl font-bold'>{coin} Wallet</div>
                    <div className='flex gap-2'>
                        <Button onClick={handleClear} title='Clear Wallet' />
                        <Button onClick={handleKey} title='Add Wallet' />
                    </div>
                </div>
                {keyPairs.map((pair, index) => (
                    <motion.div
                    initial = {{ y: 10, opacity:0 }}
                    animate = {{ y: 0, opacity:1 }}
                    transition={{duration : 0.2, ease : 'easeInOut'}}
                     key={index} className='mt-10 border-1 px-10 py-5 border-neutral-800'>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold my-2'>Wallet {index + 1}</h1>
                            <div
                                onClick={() => {
                                    setKeyPairs(prev => prev.filter((_, i) => i !== index));
                                }}
                                className='flex hover:bg-neutral-800 self-center p-3 rounded-xl cursor-pointer flex-col justify-center'>
                                <FaRegTrashAlt color='red' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-2xl font-bold'>Public Key</p>
                            <div className='bg-neutral-800 p-3 mt-3 rounded-xl break-all'>{pair.publicKey}</div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-2xl font-bold'>Private Key</p>
                            <div className='bg-neutral-800 p-3 mt-3 rounded-xl break-all'>{pair.privateKey}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Keys;
