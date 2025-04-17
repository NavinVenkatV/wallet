"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaChevronDown } from "react-icons/fa";


let i = 0;
function Keys() {
    const [keyPairs, setKeyPairs] = useState([])
    const [ showPhrases, setShowPhrases ] = useState(false);
    useEffect(() => {
        const res = async () => {
            try {
                const res = await axios.post('/solana', {
                    i
                })
                console.log(res.data)
                setKeyPairs(res.data)
            } catch (e) {
                alert(e);
            }
        }
        res();
    }, [])
    return (
        <div className='mt-10'>
            <div className=' border-1 border-neutral-800 p-7'>
                <div className='flex justify-between'>
                    <p className="text-3xl font-bold ">Your Secret Phase</p>
                    <p 
                    onClick={()=>{
                        setShowPhrases(prev => !prev)
                    }} className='flex cursor-pointer flex-col justify-center'><FaChevronDown /></p>
                </div>
                {showPhrases && (
                    <div className='mt-7 transition-all duration-300 eas'>{keyPairs.phrases}</div>
                )}
            </div>
        </div>
    )
}

export default Keys
