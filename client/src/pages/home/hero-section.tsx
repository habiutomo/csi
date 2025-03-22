import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/animated-element";
import { ArrowRight, Cloud, Award, Users, Clock } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-[#00A5E3] to-primary text-white py-20 md:py-32 bg-animate overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100">
              Empowering Indonesia With Cloud Innovation
            </h1>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={0.1}>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Enterprise-grade cloud solutions that drive business transformation
              and accelerate growth
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Our Solutions
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#FF6B00] hover:bg-[#FF8800] text-white px-8 py-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <AnimatedElement animation="slide-in" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <Cloud className="w-10 h-10 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold">200+</div>
              <div className="text-white/90">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <Award className="w-10 h-10 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <Users className="w-10 h-10 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold">500+</div>
              <div className="text-white/90">Cloud Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <Clock className="w-10 h-10 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-white/90">Support</div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Animation styles added to index.css */}
    </section>
  );
};

export default HeroSection;
