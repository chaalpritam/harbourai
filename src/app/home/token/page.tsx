"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react";

// const walletAddress = process.env.WALLET_ADDRESS || "";
// const alchemyApiKey = process.env.ALCHEMY_API_KEY || "";

interface Token {
    walletAddress: string;
    tokenName: string;
    symbol: string;
    supply: number;
    address: string;
}

export default function Token() {
    const [tokens] = useState<Token[]>([]);

    // useEffect(() => {
    //     const fetchTokens = async () => {
    //         const oneHourAgo = Math.floor(Date.now() / 1000) - 3600; // Current time minus 1 hour in seconds
    //         const response = await fetch(`https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}/getTokenBalances/?owner=${walletAddress}&createdAfter=${oneHourAgo}`);
    //         const data = await response.json();
    //         console.log(data);
    //         setTokens(data.tokenBalances);
    //     };

    //     fetchTokens();
    // }, []);

    return (
        <div className="max-w-[1100px] mx-auto pt-20">
            <Table>
                <TableCaption>A list of your recent tokens created.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Wallet Address</TableHead>
                        <TableHead>Token Name</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Supply</TableHead>
                        <TableHead className="text-right">Address</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tokens.map((token: Token) => (
                        <TableRow key={token.walletAddress}>
                            <TableCell className="font-medium">{token.walletAddress}</TableCell>
                            <TableCell>{token.tokenName}</TableCell>
                            <TableCell>{token.symbol}</TableCell>
                            <TableCell>{token.supply}</TableCell>
                            <TableCell className="text-right">{token.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}