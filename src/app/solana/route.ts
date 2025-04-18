import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { NextRequest, NextResponse } from 'next/server';
import bs58 from 'bs58';

export async function POST(req : NextRequest){
    const { i, mnemonic } = await req.json();
   try {
    let mnemonicWords = generateMnemonic();
    if(mnemonic){
        mnemonicWords = mnemonic;
    }
    const seed = mnemonicToSeedSync(mnemonicWords);
    //Assume we can retrieve upto 5 wallets;
        const path = `m/44'/501'/${i}'/0'`; //derivation path
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
        const privateKey = bs58.encode(Keypair.fromSecretKey(secret).secretKey);
        // console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
        // console.log(Keypair.fromSecretKey(secret).secretKey);
        return NextResponse.json({
            publicKey : publicKey,
            privateKey : privateKey,
            phrases : mnemonicWords
        })

    }catch(e){
    console.log("Error fetching key pairs ", e);
    return NextResponse.json({message : "Something went wrong"})
   }
}