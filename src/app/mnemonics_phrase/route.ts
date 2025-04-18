import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest){
    const { words} = await req.json();
    if(!words){
        return NextResponse.json({ message: "Invalid Phrases" }, { status: 400 })
    }
   try {
    const mnemonicWords = words.trim(" ");
    const seed = mnemonicToSeedSync(mnemonicWords);
    const keyPairs = [];
    //Assume we can retrieve upto 5 wallets;
    for(let i=0;i<5;i++){
        const path = `m/44'/501'/${i}'/0'`; //derivation path
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
        const privateKey = Keypair.fromSecretKey(secret).secretKey;
        console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
        console.log(Keypair.fromSecretKey(secret).secretKey);
        keyPairs.push({publicKey, privateKey})
    }
    
   }catch(e){
    console.log("Error fetching key pairs ", e);
    return NextResponse.json({message : "Something went wrong"})
   }
}