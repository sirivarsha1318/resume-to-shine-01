import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Users, Palette } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Technology",
    subtitle: "Computer Science and Technology",
    organization: "Vellore Institute Of Technology, Amaravathi",
    timeline: "Aug 2022 – Present",
    description: "Currently pursuing B.Tech in Computer Science with a strong focus on AI/ML technologies and software engineering principles.",
    icon: GraduationCap,
    iconColor: "text-primary",
    metrics: ["CGPA: 8.43"],
    highlights: [
      "Specialized in AI/ML and software engineering",
      "Active participation in technical clubs and competitions",
      "Strong academic performance with 8.43 CGPA"
    ]
  },
  {
    type: "work",
    title: "AI Intern",
    subtitle: "IBM Watsonx Virtual Experience",
    organization: "IBM, Remote",
    timeline: "May 2025 – Jul 2025",
    description: "Completed comprehensive training on Generative AI technologies and built production-ready AI applications using IBM Watsonx platform.",
    icon: Building,
    iconColor: "text-accent",
    metrics: ["92% Accuracy", "500+ Entries", "30% Efficiency"],
    highlights: [
      "IBM-certified training on Generative AI and foundation models",
      "Built College Feedback Classifier achieving 92% accuracy",
      "Designed 10+ optimized prompts reducing classification time by 30%",
      "Expertise in prompt engineering and responsible AI practices"
    ]
  },
  {
    type: "leadership",
    title: "Team Lead",
    subtitle: "Kalki Personality Development Club",
    organization: "VIT Amaravathi",
    timeline: "2023 – Present",
    description: "Leading design initiatives and member training programs, significantly boosting event participation through creative poster designs.",
    icon: Users,
    iconColor: "text-secondary",
    metrics: ["40% Increase", "10+ Events"],
    highlights: [
      "Trained incoming members in digital design tools",
      "Spearheaded poster creation for 10+ events",
      "Boosted participant turnout by 40%",
      "Demonstrated leadership and project management skills"
    ]
  },
  {
    type: "design",
    title: "Design Team Member",
    subtitle: "CSI Club",
    organization: "VIT Amaravathi",
    timeline: "2023 – Present",
    description: "Responsible for creating engaging visual content for club events, maintaining high standards of creativity and timeliness.",
    icon: Palette,
    iconColor: "text-primary",
    metrics: ["100% On-time", "10+ Events"],
    highlights: [
      "Designed posters for 10+ events",
      "100% on-time submission rate",
      "Demonstrated creativity and teamwork",
      "Enhanced visual communication skills"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through academic excellence, professional growth, and leadership development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={exp.title}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background z-10 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-background" />
                    </div>

                    {/* Content card */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="p-6 bg-gradient-glass backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glass group">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-accent font-medium mb-1">
                              {exp.subtitle}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {exp.organization}
                            </p>
                          </div>
                          <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 whitespace-nowrap">
                            {exp.timeline}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Metrics */}
                        {exp.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.metrics.map((metric) => (
                              <Badge 
                                key={metric}
                                variant="secondary" 
                                className="bg-accent/20 text-accent border border-accent/30"
                              >
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Highlights */}
                        <div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {exp.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};