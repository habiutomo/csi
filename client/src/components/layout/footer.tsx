import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Twitter, Linkedin, Instagram, Facebook, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a newsletter API
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-[#05182A] to-[#092947] text-white overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-primary"></div>
          <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-[#0098FF]"></div>
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#FF6B00]"></div>
        </div>
      </div>

      {/* Pre-footer contact info */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#0F2D4A] rounded-xl p-6 md:p-8 border border-blue-800 mb-16 shadow-lg transform -translate-y-28">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Our Location</h4>
              <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <p className="text-gray-300 text-sm">+62 21 1234 5678</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Email Us</h4>
              <p className="text-gray-300 text-sm">info@ptcloudsystem.id</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Working Hours</h4>
              <p className="text-gray-300 text-sm">Mon-Fri: 9AM - 5PM</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          <div>
            <div className="flex items-center mb-6">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Indonesia With Cloud Innovation, providing
              enterprise-grade cloud solutions to drive business transformation and fuel growth across Southeast Asia.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Our Team", "Testimonials", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase().replace(/\s+/g, "-").replace("our-", ""));
                    }}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary/50 group-hover:bg-primary rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Cloud Infrastructure",
                "Cloud Applications",
                "Cloud Security",
                "Managed Services",
                "Consulting Services",
                "Data Analytics"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary/50 group-hover:bg-primary rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates on cloud
              technologies and company news.
            </p>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 border-0 text-white placeholder:text-gray-400 pr-12 focus:ring-2 focus:ring-primary/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-0 top-0 h-full bg-primary hover:bg-blue-600 px-3 rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-gray-400 text-sm leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PT Cloud System Indonesia. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
