"use client"
import Image from "next/image";
import Header from "./component/header";
import { Nunito } from "next/font/google";
import Button from "./component/ui/Button";
import SolanaPage from "./component/SolanaPage";
import { useState } from "react";
import Keys from "./component/keys";
import { motion } from "motion/react"

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: '500'
})

export default function Home() {
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false);
  const solSubmit = () => {
    setSecond(true)
  }
  return (
    <div className={`w-full  h-screen px-3 md:px-20 overflow-x-hidden py-5 ${nunito.className}`}>
      <div>
        <Header />
        {!second &&
          <motion.div
          initial = {{ y: -30 }}
          animate = {{ y: 0 }}
          transition={{duration : 0.1, ease : 'easeInOut'}}
          >
            <div className="mt-10">
              <p className="text-3xl md:text-5xl font-bold">Nav Wallet is multi chain ready.</p>
              <p className="text-neutral-500 text-lg  md:text-xl">Pick your blockchain to begin.</p>
            </div>
            <div className="flex gap-3 mt-5">
              <Button onClick={solSubmit} title="Solana" />
              <Button title="Ethereum" />
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
          </motion.div>}
        {second && !third &&
          <motion.div
          initial = {{ y: -30 }}
          animate = {{ y: 0 }}
          transition={{duration : 0.1, ease : 'easeInOut'}}
           className="mt-10">
            <div className="mt">
              <SolanaPage setThird={setThird} />
            </div>
          </motion.div>
        }
        {third && (
          <Keys coin="Solana" />
        )}
      </div>
      <div className="mt-10 text-sm md:text-xl">
        <b/>
        2025- Developed by <a href="navinvenkat.xyz" className="font-bold">Navin Venkat</a>
      </div>
    </div>
  );
}
