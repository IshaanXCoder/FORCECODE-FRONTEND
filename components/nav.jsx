"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Trophy, Users, Wallet, UserPlus } from "lucide-react"
import { Button } from "../components/ui/button"

export function Nav() {
  const [isConnected, setIsConnected] = useState(false)

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" })
        setIsConnected(true)
      } catch (error) {
        console.error("User denied account access")
      }
    } else {
      console.log("MetaMask is not installed")
    }
  }

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 glassmorphism">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span>ForceCode</span>
        </Link>
        <div className="flex gap-6 px-2">
          {[
            { href: "/register-player", icon: Trophy, label: "Register Yourself" },
            { href: "/register-team", icon: UserPlus, label: "Register Team" },
            { href: "/dashboard", icon: Users, label: "Team Home Page" },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Button onClick={connectToMetaMask} variant="outline">
            <Wallet className="mr-2 h-4 w-4" />
            {isConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

