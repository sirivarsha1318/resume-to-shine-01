import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50">
            <span className="text-muted-foreground">👋 Hello, I'm</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Siri Varsha
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            AI/ML Engineer & Computer Science Student
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about Generative AI, Machine Learning, and building innovative solutions. 
            Currently pursuing B.Tech in Computer Science at VIT Amaravathi with expertise in 
            IBM Watsonx, NLP, and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:varshanistala@gmail.com"
              className="p-3 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-primary group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/sirivarsha1318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-primary group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/siri-varsha-61b797251/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-glass backdrop-blur-md rounded-full border border-border/50 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-primary group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};