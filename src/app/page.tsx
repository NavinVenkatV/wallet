import Image from "next/image";
import Header from "./component/header";
import { Nunito } from "next/font/google";
import Button from "./component/ui/Button";

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: '500'
})

export default function Home() {
  return (
    <div className={`w-screen h-screen px-20 py-5 ${nunito.className}`}>
      <Header/>
      <div className="mt-20">
        <p className="text-5xl font-bold">Nav Wallet is multi-chain ready.</p>
        <p className="text-neutral-500 text-xl">Pick your blockchain to begin.</p>
      </div>
      <div className="flex gap-3 mt-5">
        <Button title="Solana"/>
        <Button title="Ethereum"/>
        <Button title="Coming Soon"/>
      </div>
    </div>
  );
}
