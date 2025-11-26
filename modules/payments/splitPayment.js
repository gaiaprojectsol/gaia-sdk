import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { SOLANA_CONNECTION } from "../blockchain/solanaConnection.js";
import { PAYMENT_SPLITS, TREASURY_WALLET, REWARD_WALLET } from "../../config/constants.js";

export async function splitPayment({ wallet, amount, devWallet }) {
    if (!wallet?.publicKey) throw new Error("Wallet not connected.");

    const payer = wallet.publicKey;
    const lamports = Math.floor(amount * 1e9);

    const treasury = Math.floor(lamports * PAYMENT_SPLITS.TREASURY);
    const rewards  = Math.floor(lamports * PAYMENT_SPLITS.PLAYER_REWARDS);
    const dev      = Math.floor(lamports * PAYMENT_SPLITS.DEVELOPER);

    const tx = new Transaction();

    tx.add(
        SystemProgram.transfer({
            fromPubkey: payer,
            toPubkey: new PublicKey(TREASURY_WALLET),
            lamports: treasury
        }),
        SystemProgram.transfer({
            fromPubkey: payer,
            toPubkey: new PublicKey(REWARD_WALLET),
            lamports: rewards
        }),
        SystemProgram.transfer({
            fromPubkey: payer,
            toPubkey: new PublicKey(devWallet),
            lamports: dev
        })
    );

    tx.feePayer = payer;
    tx.recentBlockhash =
        (await SOLANA_CONNECTION.getLatestBlockhash()).blockhash;

    const signed = await wallet.signTransaction(tx);
    const txId = await SOLANA_CONNECTION.sendRawTransaction(signed.serialize());

    return { txId };
}
