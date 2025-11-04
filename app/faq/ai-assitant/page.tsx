"use client"

import { useState, useEffect } from "react"
import { SendHorizonal, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AiAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi there! I’m ElevateX AI — your smart assistant. How can I help you today? You can ask about our services, pricing, or contact options.",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const lower = input.toLowerCase()
      let response = ""

      if (lower.includes("service") || lower.includes("offer")) {
        response =
          "We offer professional web development, SEO marketing, automation, and AI integration — all tailored to grow your business online."
      } else if (lower.includes("package") || lower.includes("price")) {
        response =
          "We have packages designed for startups, small businesses, and enterprises. Would you like me to share details of our plans?"
      } else if (lower.includes("contact") || lower.includes("email")) {
        response =
          "You can contact us via email at info@elevatex.com or chat instantly on WhatsApp 👉 [Click here](https://wa.me/237XXXXXXXXX)."
      } else if (lower.includes("hi") || lower.includes("hello")) {
        response = "Hello 👋, how can I assist you today?"
      } else {
        response =
          "I'm here to answer questions about ElevateX — try asking about our services, packages, or how to reach us!"
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border overflow-hidden">
          {/* Header */}
          <div className="bg-brand-grey text-white p-6 flex flex-col items-center justify-center space-y-2">
            <Bot className="h-10 w-10 text-brand-green" />
            <h1 className="text-2xl font-bold">ElevateX AI Assistant</h1>
            <p className="text-sm text-gray-300 text-center">
              Smart, friendly, and ready to guide you 🚀
            </p>
          </div>

          {/* Chat Section */}
          <div className="p-6 h-[500px] overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-brand-green text-white"
                      : "bg-white border text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border px-3 py-2 rounded-xl text-sm text-gray-500 italic animate-pulse">
                  ElevateX AI is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Section */}
          <form
            onSubmit={handleSend}
            className="border-t bg-white p-4 flex items-center gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-brand-green hover:bg-brand-green/90 text-white"
            >
              <SendHorizonal className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
