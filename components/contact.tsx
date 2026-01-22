"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Xabar yuborishda xato yuz berdi")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xabar yuborishda xato yuz berdi")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          {submitted && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
              ✓ Xabar muvaffaqiyatli yuborildi! Men tez orada javob beraman.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
              ✕ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Ism</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Sizning ismingiz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="siz@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Xabar</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Sizning xabaringiz..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 disabled:opacity-50 transition-all duration-300"
            >
              {isLoading ? "Yuborilmoqda..." : "Xabar Yuborish"}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border space-y-4 text-center">
            <p className="text-muted-foreground">Yoki men bilan bog'laning:</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-primary hover:text-accent hover:scale-110 hover:underline transition-all duration-300 font-semibold">
                LinkedIn
              </a>
              <a href="#" className="text-primary hover:text-accent hover:scale-110 hover:underline transition-all duration-300 font-semibold">
                Twitter
              </a>
              <a href="#" className="text-primary hover:text-accent hover:scale-110 hover:underline transition-all duration-300 font-semibold">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
