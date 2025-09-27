import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "varshanistala@gmail.com",
    href: "mailto:varshanistala@gmail.com",
    color: "text-primary"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9849105418",
    href: "tel:+919849105418",
    color: "text-accent"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "siri-varsha-61b797251",
    href: "https://linkedin.com/in/siri-varsha-61b797251/",
    color: "text-secondary"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "sirivarsha1318",
    href: "https://github.com/sirivarsha1318",
    color: "text-primary"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or share insights about AI/ML technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <Card className="p-4 bg-gradient-glass backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glass hover:scale-105 group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-glass border border-border/50 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.title}
                          </h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}

              {/* Location */}
              <Card className="p-4 bg-gradient-glass backdrop-blur-md border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-glass border border-border/50">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Amaravathi, Andhra Pradesh, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Message Card */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Connect</h3>
              
              <Card className="p-6 bg-gradient-glass backdrop-blur-md border border-border/50">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4">
                      <Send className="h-8 w-8 text-background" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Ready to Collaborate?
                    </h4>
                    <p className="text-muted-foreground">
                      Whether you're looking for an AI/ML intern, a collaborator for innovative projects, 
                      or just want to discuss the latest in generative AI technologies.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                      onClick={() => window.open('mailto:varshanistala@gmail.com?subject=Portfolio Inquiry', '_blank')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => window.open('https://linkedin.com/in/siri-varsha-61b797251/', '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="p-4 bg-gradient-glass backdrop-blur-md border border-border/50">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">Available for Opportunities</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Open to internships, freelance projects, and collaboration opportunities
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};