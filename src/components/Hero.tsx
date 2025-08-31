import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-section overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional engineering workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight">
              Engineering Excellence for{" "}
              <span className="text-accent-light">Modern Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your trusted partner in Interior Work Systems, Security Solutions, 
              Certification Processes, and Comprehensive Engineering Services.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-scale-in grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Shield className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <div className="font-semibold">Certified</div>
                <div className="text-sm opacity-80">ISO Standards</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Award className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <div className="font-semibold">15+ Years</div>
                <div className="text-sm opacity-80">Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Users className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <div className="font-semibold">500+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full p-1">
          <div className="w-full h-3 bg-primary-foreground/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;