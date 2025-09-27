import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, MessageCircle, Pill } from "lucide-react";

const projects = [
  {
    title: "College Classifier",
    subtitle: "IBM Watsonx & GenAI Project",
    description: "Designed and implemented a GenAI-powered system to classify 500+ colleges based on stream, budget, and location. Configured prompt chaining and Watsonx APIs in Python to reach 92% match accuracy.",
    icon: Brain,
    iconColor: "text-primary",
    tech: ["IBM Watsonx.ai", "Foundation Models", "Python", "Prompt Engineering", "Jupyter Notebook"],
    metrics: ["92% Accuracy", "500+ Colleges", "Real-time Filtering"],
    timeline: "Jun 2025 – Jul 2025",
    highlights: [
      "Prompt chaining optimization",
      "Omnichannel-ready solution",
      "92% match accuracy"
    ]
  },
  {
    title: "EduBot AI Chatbot",
    subtitle: "University Query Automation",
    description: "Created an AI-powered chatbot to automate university queries, handling 100+ unique requests with 90%+ accuracy. Reduced query resolution time from 5-10 minutes to under 30 seconds.",
    icon: MessageCircle,
    iconColor: "text-accent",
    tech: ["Python", "Dialogflow", "REST APIs", "HTML/CSS", "JavaScript"],
    metrics: ["90%+ Accuracy", "100+ Queries", "30 Sec Response"],
    timeline: "Feb 2025 – Apr 2025",
    highlights: [
      "Automated query resolution",
      "Responsive frontend design",
      "REST API integration"
    ]
  },
  {
    title: "Drug Recommendation System",
    subtitle: "AI-based Healthcare Solution",
    description: "Engineered an AI-based recommendation engine using NLP (TF-IDF, cosine similarity) to match symptoms with 1,000+ drug descriptions. Achieved 85% recommendation accuracy through advanced text preprocessing.",
    icon: Pill,
    iconColor: "text-secondary",
    tech: ["AI/ML", "NLP", "Python", "TF-IDF", "Cosine Similarity"],
    metrics: ["85% Accuracy", "1,000+ Drugs", "NLP Processing"],
    timeline: "Jun 2025 – Aug 2025",
    highlights: [
      "Advanced text preprocessing",
      "Domain-specific filtering",
      "Healthcare tech focus"
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered solutions showcasing expertise in machine learning, natural language processing, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="p-8 bg-gradient-glass backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glass hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Icon & Timeline */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-glass border border-border/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${project.iconColor}`} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.timeline}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-accent font-medium mb-3">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                        {project.metrics.map((metric) => (
                          <Badge 
                            key={metric}
                            variant="outline" 
                            className="border-primary/50 text-primary bg-primary/10"
                          >
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground hover:bg-accent/20 hover:text-accent transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-border/50 hover:border-primary/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};