export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg"></div>
            <div className="relative bg-card border border-border rounded-lg p-8">
              <svg className="w-full h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="url(#grad1)" rx="10" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate UI/UX designer with 6+ years of experience creating meaningful digital products. I focus
              on understanding user needs and translating them into elegant, functional designs.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise spans wireframing, prototyping, user research, and design systems. I love collaborating with
              developers and stakeholders to bring ideas to life.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>User Research & Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Design Systems & Components</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Interaction & Motion Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
