export default function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Protopie", "Framer"],
    },
    {
      title: "UX/Research",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing", "Information Architecture"],
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Leadership", "Problem Solving", "Collaboration", "Strategic Thinking"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills &
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
