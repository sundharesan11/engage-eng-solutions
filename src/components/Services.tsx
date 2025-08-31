import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, FileCheck, Wrench, ArrowRight } from "lucide-react";
import interiorImage from "@/assets/interior-systems.jpg";
import securityImage from "@/assets/security-systems.jpg";
import certificationImage from "@/assets/certification.jpg";
import engineeringImage from "@/assets/engineering-solutions.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Interior Work Systems",
      description: "Modern office interiors, industrial spaces, and acoustic solutions designed for productivity and comfort.",
      image: interiorImage,
      features: ["Office Interiors", "Industrial Design", "Acoustic Solutions", "Space Planning"],
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Comprehensive security solutions including CCTV, access control, and fire safety systems.",
      image: securityImage,
      features: ["CCTV Installation", "Access Control", "Fire Safety", "24/7 Monitoring"],
    },
    {
      icon: FileCheck,
      title: "Certification Process",
      description: "ISO certifications, safety standards compliance, and quality assurance processes.",
      image: certificationImage,
      features: ["ISO Certification", "Safety Standards", "Quality Assurance", "Process Compliance"],
    },
    {
      icon: Wrench,
      title: "Engineering Solutions",
      description: "Electrical installations, structural works, and automation systems for modern businesses.",
      image: engineeringImage,
      features: ["Electrical Work", "Structural Engineering", "Automation", "System Integration"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Our Engineering Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering solutions designed to meet your business needs with precision, quality, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-strong transition-all duration-500 border-border/50 hover:border-accent/30 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-3 bg-accent rounded-lg shadow-medium">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary font-heading group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="professional" 
                  className="w-full group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 md:p-12 shadow-strong animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-heading">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your engineering needs. Our experts are ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;