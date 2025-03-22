import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/animated-element";
import { Shield, Zap, Sun } from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
            About PT Cloud System Indonesia
          </h2>
          <p className="text-lg text-neutral-600">
            We are Indonesia's leading provider of enterprise cloud solutions,
            helping businesses transform through innovative cloud technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-in">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                alt="Modern office with team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in" delay={0.2}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Our Story</h3>
            <p className="mb-4 text-neutral-700">
              Founded in 2008, PT Cloud System Indonesia has been at the
              forefront of cloud technology innovation in Indonesia for over 15
              years. What started as a small IT consultancy has grown into one
              of the country's most trusted enterprise technology partners.
            </p>
            <p className="mb-6 text-neutral-700">
              Our journey has been defined by our unwavering commitment to
              helping Indonesian businesses harness the transformative power of
              cloud technology to drive growth, optimize operations, and deliver
              exceptional customer experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2 text-neutral-800">
                  Our Mission
                </h4>
                <p className="text-neutral-600">
                  To accelerate Indonesia's digital transformation through
                  innovative cloud solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2 text-neutral-800">
                  Our Vision
                </h4>
                <p className="text-neutral-600">
                  To be the most trusted cloud solutions provider in Southeast
                  Asia.
                </p>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="link"
              className="inline-flex items-center text-primary font-bold hover:text-primary-dark"
            >
              Learn more about working with us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </AnimatedElement>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-neutral-800">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-in">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <Shield className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-neutral-800">
                  Trust & Integrity
                </h4>
                <p className="text-neutral-600">
                  We build long-term relationships based on transparency, ethical
                  conduct, and consistently delivering on our promises.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <Zap className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-neutral-800">
                  Innovation
                </h4>
                <p className="text-neutral-600">
                  We constantly explore new technologies and methodologies to
                  deliver cutting-edge solutions that drive business growth.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <Sun className="h-12 w-12" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-neutral-800">
                  Excellence
                </h4>
                <p className="text-neutral-600">
                  We are committed to delivering the highest quality in
                  everything we do, from technical implementation to customer
                  service.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
