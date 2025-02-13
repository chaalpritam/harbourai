"use client"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ConnectKitButton } from "connectkit"
import { Web3Provider } from "@/utils/web3provider"

const Navbar = () => {
    return (
        <Web3Provider>
            <div className="p-2 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">Harbour AI</h2>
                <div className="flex space-x-4">
                    <Link href="/home"><Button variant="ghost">Home</Button></Link>
                    <Link href="/home/dao"><Button variant="ghost">DAO</Button></Link>
                    <Link href="/home/proposal"><Button variant="ghost">Proposal</Button></Link>
                    <Link href="/home/agents"><Button variant="ghost">Create Agents</Button></Link>
                    <Link href="/home/token"><Button variant="ghost">Token</Button></Link>
                </div>
                <ConnectKitButton />
            </div>
        </Web3Provider>
    )
}

export default Navbar 