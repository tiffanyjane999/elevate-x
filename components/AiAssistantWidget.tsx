"use client"

import { useState } from "react"
import { Bot, SendHorizonal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I’m ElevateX AI — your virtual assistant. How can I help you today?",
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

      if (lower.includes("service")) {
        response =
          "We offer web development, SEO, automation, and AI integration — all focused on business growth 🚀"
      } else if (lower.includes("price") || lower.includes("package")) {
        response =
          "We have affordable packages for startups and enterprises. Would you like a link to view them?"
      } else if (lower.includes("contact") || lower.includes("email")) {
        response =
          "📩 You can reach us at info@elevatex.com or WhatsApp us directly at https://wa.me/237XXXXXXXXX."
      } else if (lower.includes("hi") || lower.includes("hello")) {
        response = "Hey there 👋 How can I assist you today?"
      } else {
        response =
          "I can help you learn about our services, pricing, and contact options — just ask!"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setOpen(!open)}
          size="icon"
          className="rounded-full h-14 w-14 bg-brand-green hover:bg-brand-green/90 text-white shadow-lg"
        >
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border overflow-hidden animate-fade-in z-50">
          {/* Header */}
          <div className="bg-brand-grey text-white p-4 flex items-center gap-2">
            <Bot className="text-brand-green h-5 w-5" />
            <h2 className="font-semibold text-lg">ElevateX AI</h2>
          </div>

          {/* Chat Area */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-xl text-sm ${
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
                  typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="border-t bg-white p-3 flex items-center gap-2"
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
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
