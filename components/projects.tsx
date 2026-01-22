export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Redesigned mobile app for a major retail company, improving conversion rate by 45%",
      image: "/ecommerce-app-interface.png",
      tags: ["UI/UX", "Mobile", "E-Commerce"],
    },
    {
      title: "SaaS Dashboard",
      description:
        "Designed comprehensive analytics dashboard for enterprise clients with real-time data visualization",
      image: "/general-dashboard-interface.png",
      tags: ["Design System", "Dashboard", "Enterprise"],
    },
    {
      title: "Social App",
      description: "Created intuitive social networking interface focusing on user engagement and retention",
      image: "/social-media-app-interface.png",
      tags: ["Mobile", "Social", "UX"],
    },
    {
      title: "Fintech App",
      description: "Designed secure payment interface with exceptional user experience for blockchain transactions",
      image: "/fintech-banking-app.jpg",
      tags: ["Finance", "Security", "Mobile"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
