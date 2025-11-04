"use client";

import { useState } from "react";
import { Send, Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m Elevate X Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const reply = getBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 800);
  };

  const getBotReply = (msg: string) => {
    const lower = msg.toLowerCase();

    if (lower.includes("website"))
      return "We create professional, responsive websites that elevate your online presence.";
    if (lower.includes("seo"))
      return "We provide on-page, local, and technical SEO to boost visibility and rankings.";
    if (lower.includes("automation"))
      return "We help automate workflows, CRM systems, and marketing processes using smart AI tools.";
    if (lower.includes("price") || lower.includes("cost"))
      return "Our packages range from Starter (150,000–200,000 FCFA), Standard (350,000–400,000 FCFA), to Business (CUSTOM).";
    if (lower.includes("contact"))
      return "You can reach us directly at info@elevatex.com or via WhatsApp for instant support.";
    if (lower.includes("hi") || lower.includes("hello"))
      return "Hello there 👋! How can I assist you today — website design, SEO, or automation?";
    if (lower.includes("faq"))s
      return "Sure! I can answer FAQs, guide you through services, or help you get started.";
    return "I’m here to assist with ElevateX services — web design, SEO, automation, and business growth. What would you like to explore?";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-green text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-brand-green text-white p-3 flex items-center justify-between">
              <h3 className="font-semibold text-lg">ElevateX Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-sm ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-800 self-start"
                      : "bg-brand-green text-white self-end ml-auto"
                  } w-fit max-w-[85%]`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-3 border-t flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-brand-green text-white p-2 rounded-lg hover:bg-brand-green/90"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
