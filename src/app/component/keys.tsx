"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaChevronDown } from "react-icons/fa";
import Button from './ui/Button';
import { FaRegTrashAlt } from "react-icons/fa";


function Keys({ coin }: { coin: string }) {
    const [keyPairs, setKeyPairs] = useState([]);
    const [showPhrases, setShowPhrases] = useState(false);
    const [mnemonic, setMnemonic] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const fetchKeyPair = async () => {
            try {
                const res = await axios.post('/solana', { i });
                console.log(res.data);
                setKeyPairs([{ publicKey: res.data.publicKey, privateKey: res.data.privateKey }]);
                setMnemonic(res.data.phrases);
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
            setI(prev => prev + 1);
        } catch (e) {
            alert(e);
        }
    };

    const handleClear = async()=>{
        setKeyPairs([]);
        setI(0)
    }

    return (
        <div className='mt-10'>
            <div className='border-1 border-neutral-800 p-7'>
                <div className='flex justify-between'>
                    <p className="text-3xl font-bold">Your Secret Phrase</p>
                    <p
                        onClick={() => setShowPhrases(prev => !prev)}
                        className='flex cursor-pointer flex-col justify-center'>
                        <FaChevronDown />
                    </p>
                </div>
                {showPhrases && (
                    <div className='mt-7 transition-all duration-300 ease'>{mnemonic}</div>
                )}
            </div>
            <div className='mt-7'>
                <div className='flex justify-between'>
                    <div className='text-4xl font-bold'>{coin} Wallet</div>
                    <div className='flex gap-2'>
                        <Button onClick={handleClear} title='Clear Wallet' />
                        <Button onClick={handleKey} title='Add Wallet' />
                    </div>
                </div>
                {keyPairs.map((pair, index) => (
                    <div key={index} className='mt-10 border-1 px-10 py-5 border-neutral-800'>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold my-2'>Wallet {index + 1}</h1>
                            <div 
                            onClick={() =>{
                                setKeyPairs(prev => prev.filter((_, i) => i !== index));
                            }}
                            className='flex hover:bg-neutral-800 self-center p-3 rounded-xl cursor-pointer flex-col justify-center'><FaRegTrashAlt color='red'/></div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-2xl font-bold'>Public Key</p>
                            <div className='bg-neutral-800 p-3 mt-3 rounded-xl'>{pair.publicKey}</div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-2xl font-bold'>Private Key</p>
                            <div className='bg-neutral-800 p-3 mt-3 rounded-xl'>{pair.privateKey}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Keys;
