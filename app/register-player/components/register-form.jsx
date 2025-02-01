"use client"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { ArrowRight, Loader2 } from "lucide-react"

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // After successful registration, you might want to redirect the user or show a success message
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Register for ForceCode</CardTitle>
        <CardDescription>Join the ultimate competitive programming platform</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="codeforces-id">Codeforces ID</Label>
            <Input id="codeforces-id" placeholder="Enter your Codeforces ID" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="discord-id">Discord ID</Label>
            <Input id="discord-id" placeholder="Enter your Discord ID" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ethereum-address">Ethereum Address</Label>
            <Input id="ethereum-address" placeholder="Enter your Ethereum address" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              <>
                Register
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

