import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Eye, Heart, Award, Users, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and engineering precision."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable solutions that stand the test of time and exceed industry standards."
    },
    {
      icon: Heart,
      title: "Innovation", 
      description: "Cutting-edge technologies and creative approaches to solve complex challenges."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term relationships built on trust, transparency, and mutual success."
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "15+ Years Experience",
    "500+ Projects Completed", 
    "98% Client Satisfaction",
    "OSHA Safety Compliant",
    "Licensed Engineers"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            About EngiTech Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industry with innovative engineering solutions, certified processes, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 bg-gradient-section rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company Story */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to revolutionize engineering services, EngiTech Solutions has grown into a trusted partner for businesses seeking reliable, innovative, and comprehensive engineering solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified engineers and specialists brings decades of combined experience across interior systems, security solutions, certification processes, and advanced engineering projects.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border/50 hover:border-accent/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Target className="h-6 w-6 text-accent mr-3" />
                    <h4 className="font-semibold text-primary">Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To deliver exceptional engineering solutions that enhance safety, efficiency, and innovation for our clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-accent/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Eye className="h-6 w-6 text-accent mr-3" />
                    <h4 className="font-semibold text-primary">Vision</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To be the leading provider of integrated engineering solutions, setting industry standards for quality and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Certifications & Achievements</h4>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <Badge variant="secondary" className="text-xs">{achievement}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-accent/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;