import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/animated-element";
import { 
  Server, 
  FileText, 
  Lock, 
  Shield, 
  MessageSquare, 
  BarChart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud infrastructure solutions including IaaS, PaaS, and hybrid cloud deployments.",
    features: ["Cloud Migration", "Infrastructure Optimization", "Disaster Recovery"],
    icon: <Server className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    delay: 0
  },
  {
    title: "Cloud Applications",
    description: "Custom SaaS solutions and application modernization to enhance business operations.",
    features: ["SaaS Implementation", "Custom Cloud Apps", "Legacy Modernization"],
    icon: <FileText className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-700",
    delay: 0.1
  },
  {
    title: "Cloud Security",
    description: "Comprehensive cloud security solutions to protect your data and applications.",
    features: ["Security Assessments", "Compliance Solutions", "Threat Protection"],
    icon: <Lock className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-700",
    delay: 0.2
  },
  {
    title: "Managed Services",
    description: "End-to-end management of your cloud infrastructure and applications.",
    features: ["24/7 Monitoring", "Performance Optimization", "Cost Management"],
    icon: <Shield className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-red-500 to-red-700",
    delay: 0.3
  },
  {
    title: "Consulting Services",
    description: "Expert guidance on cloud strategy, architecture, and implementation.",
    features: ["Cloud Strategy", "Architecture Design", "Digital Transformation"],
    icon: <MessageSquare className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-700",
    delay: 0.4
  },
  {
    title: "Data Analytics",
    description: "Powerful data analytics solutions to drive insights and business intelligence.",
    features: ["Big Data Solutions", "Business Intelligence", "Machine Learning"],
    icon: <BarChart className="h-16 w-16 text-white" />,
    iconBg: "bg-gradient-to-br from-green-500 to-green-700",
    delay: 0.5
  }
];

const ServicesSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              Cloud Solutions for Every Need
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive enterprise cloud services designed to accelerate your
              digital transformation journey and drive business growth.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement 
              key={index} 
              animation="slide-in" 
              delay={service.delay}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 group"
            >
              <div className="relative">
                <div className={`h-28 ${service.iconBg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                    <div className={`w-20 h-20 rounded-full ${service.iconBg} flex items-center justify-center border-4 border-white shadow-lg`}>
                      {service.icon.props.children}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-10 mt-5">
                <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">{service.description}</p>
                <ul className="space-y-2 mb-6 text-neutral-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="ghost"
                  className="text-primary font-medium hover:text-primary-dark hover:bg-primary/5 inline-flex items-center group/btn w-full justify-center mt-2 border border-primary/20 hover:border-primary transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
