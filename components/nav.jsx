"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Trophy, Users } from "lucide-react"

export function Nav() {
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 glassmorphism">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span>ForceCode</span>
        </Link>
        <div className="flex gap-6">
          {[
            { href: "#competitions", icon: Trophy, label: "Competitions" },
            { href: "#leaderboard", icon: Users, label: "Leaderboard" },
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
      </div>
    </motion.nav>
  )
}

