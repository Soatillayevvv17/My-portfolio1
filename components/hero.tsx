"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
          <span className="text-sm text-primary font-semibold">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Creative UI/UX
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Designer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          I craft beautiful, intuitive digital experiences that users love. Specializing in user interface design, user
          experience strategy, and digital transformation.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
