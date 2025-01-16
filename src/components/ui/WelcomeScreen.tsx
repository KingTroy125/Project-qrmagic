import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/ui/button"
import { Input } from "@/components/ui/ui/input"
import { Card, CardContent } from "@/components/ui/ui/card"

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void
}

export function WelcomeScreen({ onNameSubmit }: WelcomeScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onNameSubmit(name)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-md mx-auto backdrop-blur-lg bg-white/10 border-white/20">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Welcome to QRMagic</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                What's your name?
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-white text-purple-700 hover:bg-white/90"
              size="lg"
            >
              Get Started
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

