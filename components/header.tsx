"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<"uz" | "en">("uz")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const translations = {
    uz: {
      title: "Mening portfoliyam",
      about: "Men haqimda",
      projects: "Loyihalar",
      skills: "Ko'nikmalar",
      contact: "Kontakt",
    },
    en: {
      title: "My Portfolio",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  }

  const t = translations[language]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.title}
        </div>
        <div className="flex gap-8 items-center">
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary hover:scale-110 transition-all duration-300">
            {t.about}
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary hover:scale-110 transition-all duration-300">
            {t.projects}
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary hover:scale-110 transition-all duration-300">
            {t.skills}
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary hover:scale-110 transition-all duration-300">
            {t.contact}
          </button>
          <div className="flex gap-2 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setLanguage("uz")}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                language === "uz" ? "bg-primary text-white" : "hover:bg-primary/20 text-foreground"
              }`}
            >
              UZ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                language === "en" ? "bg-primary text-white" : "hover:bg-primary/20 text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
