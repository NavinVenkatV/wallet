import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest){
    const { i } = await req.json();
   try {
    const mnemonicWords = generateMnemonic();
    const seed = mnemonicToSeedSync(mnemonicWords);
    let keyPairs = [];
    //Assume we can retrieve upto 5 wallets;
        const path = `m/44'/60'/${i}'/0'`; //derivation path
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        let publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
        let privateKey = Keypair.fromSecretKey(secret).secretKey;
        console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
        console.log(Keypair.fromSecretKey(secret).secretKey);
        keyPairs.push({publicKey, privateKey})
        
    }catch(e){
    console.log("Error fetching key pairs ", e);
    return NextResponse.json({message : "Something went wrong"})
   }
}