"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";

const RegistrationForm = () => {
  const [players, setPlayers] = useState([
    { codeforces: "", wallet: "", discord: "" },
    { codeforces: "", wallet: "", discord: "" },
    { codeforces: "", wallet: "", discord: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering team:", players);
    // Add your registration logic here
  };

  const updatePlayer = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setPlayers(newPlayers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">Team Registration</h1>
        <p className="mt-2 text-gray-400">
          Enter the details for all three team members
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {players.map((player, index) => (
          <Card
            key={index}
            className="bg-gray-900/40 backdrop-blur-sm border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/10 relative overflow-hidden group"
          >
 <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
 <CardHeader className="relative z-10">
              <CardTitle className="text-white text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Player {index + 1}
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enter player {index + 1}'s details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 z-10 relative z-10">
              <div className="space-y-2 z-11 ">
                <Label
                  htmlFor={`codeforces-${index}`}
                  className="text-gray-200"
                >
                  Codeforces ID
                </Label>
                <Input
                  id={`codeforces-${index}`}
                  type="text"
                  placeholder="Enter Codeforces handle"
                  value={player.codeforces}
                  onChange={(e) =>
                    updatePlayer(index, "codeforces", e.target.value)
                  }
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`wallet-${index}`} className="text-gray-200">
                  Wallet Address
                </Label>
                <Input
                  id={`wallet-${index}`}
                  type="text"
                  placeholder="Enter ETH wallet address"
                  value={player.wallet}
                  onChange={(e) =>
                    updatePlayer(index, "wallet", e.target.value)
                  }
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`discord-${index}`} className="text-gray-200">
                  Discord ID
                </Label>
                <Input
                  id={`discord-${index}`}
                  type="text"
                  placeholder="Enter Discord ID"
                  value={player.discord}
                  onChange={(e) =>
                    updatePlayer(index, "discord", e.target.value)
                  }
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover-glow"
        >
          Register Team
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
