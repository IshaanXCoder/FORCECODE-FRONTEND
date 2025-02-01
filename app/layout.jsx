import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "ForceCode - Competitive Programming with Crypto Rewards",
  description: "Compete on Codeforces, pool Ethereum, win rewards based on your rank",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;