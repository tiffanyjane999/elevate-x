"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What services does ElevateX offer?",
    answer:
      "ElevateX provides a range of digital services including website design, SEO marketing, social media management, business automation, and strategic branding to help businesses grow their online presence.",
  },
  {
    question: "How can ElevateX help my business?",
    answer:
      "We focus on creating tailored digital strategies that help you attract more customers, improve brand visibility, and streamline operations through automation and optimized digital tools.",
  },
  {
    question: "Do you offer custom website design?",
    answer:
      "Yes, we specialize in creating modern, responsive, and high-converting websites tailored to your brand identity and business goals.",
  },
  {
    question: "Can I get a free consultation?",
    answer:
      "Absolutely! You can reach out to us through our contact form or WhatsApp to schedule a free digital strategy consultation with our team.",
  },
  {
    question: "How long does a project take to complete?",
    answer:
      "Project timelines vary depending on complexity, but typically websites take 2–4 weeks and digital marketing setups take 1–2 weeks.",
  },
  {
    question: "How can I contact ElevateX?",
    answer:
      "You can reach us by email at info@elevatex.com or through WhatsApp at +237 XXX XXX XXX. We’re also available on Instagram, LinkedIn, and Facebook.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-brand-green">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-brand-green text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700">
            Still have questions?{" "}
            <a
              href="mailto:info@elevatex.com"
              className="text-brand-green font-semibold hover:underline"
            >
              Contact us
            </a>{" "}
            or chat with us on{" "}
            <a
              href="https://wa.me/237XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-semibold hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
