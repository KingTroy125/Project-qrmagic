"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CuboidIcon as Cube } from 'lucide-react'
import { Button } from "../components/ui/ui/button"
import { Input } from "../components/ui/ui/input"
import { Textarea } from "../components/ui/ui/textarea"
import { Card, CardContent } from "../components/ui/ui/card"
import { WelcomeScreen } from "../components/ui/WelcomeScreen"

export default function QRGenerator() {
  const [userName, setUserName] = useState<string | null>(null)
  const [url, setUrl] = useState("")
  const [prompt, setPrompt] = useState("")

  const suggestions = [
    "A city view with clouds",
    "A beautiful glacier",
    "A forest overlooking a mountain", 
    "A saharan desert"
  ]

  const handleNameSubmit = (name: string) => {
    setUserName(name)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-96 h-96 -left-12 -top-12 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute w-96 h-96 -right-12 -top-12 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-12 left-1/2 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Cube className="w-8 h-8" />
          <span className="text-xl font-bold">QRMagic</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Homepage</Button>
          <Button variant="default">Generate your QR Code</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {userName === null ? (
          <WelcomeScreen onNameSubmit={handleNameSubmit} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-8 text-white">Welcome, {userName}! Create Your Magic QR Code</h1>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">URL</label>
                    <Input
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="roomgpt.io"
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
                    />
                    <p className="mt-2 text-sm text-white/70">This is what your QR code will link to.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Prompt</label>
                    <Textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="A city view with clouds"
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
                    />
                    <p className="mt-2 text-sm text-white/70">This is what the image in your QR code will look like.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-4">Prompt suggestions</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {suggestions.map((suggestion) => (
                        <motion.button
                          key={suggestion}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setPrompt(suggestion)}
                          className="p-3 text-left rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-white text-purple-700 hover:bg-white/90"
                    size="lg"
                  >
                    Generate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  )
}

