import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "MySQL"],
    icon: "💻"
  },
  {
    title: "AI/ML & Data Science",
    skills: ["Generative AI", "IBM Watsonx", "NLP", "TF-IDF", "Cosine Similarity", "Prompt Engineering"],
    icon: "🤖"
  },
  {
    title: "Developer Tools",
    skills: ["Git", "VS Code", "PyCharm", "IntelliJ", "Eclipse", "Jupyter Notebook"],
    icon: "🛠️"
  },
  {
    title: "Frameworks & APIs",
    skills: ["REST APIs", "Dialogflow", "IBM Watsonx SDK", "React", "Node.js"],
    icon: "⚡"
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "Healthcare Tech", "Natural Language Processing"],
    icon: "🧠"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building AI-powered solutions and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-glass backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glass hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary" 
                    className="bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent group">
              <span className="text-foreground group-hover:text-accent transition-colors">
                🏆 Generative AI Using IBM Watsonx (2025)
              </span>
            </div>
            <div className="px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent group">
              <span className="text-foreground group-hover:text-accent transition-colors">
                🎯 Designex 2.0 Innovation Challenge (2024)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};