import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/animated-element";
import { Shield, Zap, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    quote:
      "PT Cloud System Indonesia's migration of our infrastructure to the cloud reduced our operational costs by 40% while improving system reliability. Their team's expertise and support throughout the process was exceptional.",
    name: "Ahmad Hidayat",
    title: "Finance Director, Bank Sentosa Indonesia",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Working with PT Cloud System Indonesia transformed our digital capabilities. Their managed services team provides exceptional support and has helped us achieve 99.99% uptime for our critical systems.",
    name: "Dewi Susanti",
    title: "CIO, Maju Bersama Group",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The data analytics solution from PT Cloud System Indonesia has given us valuable business insights that directly led to a 27% increase in customer engagement. Their technical expertise is world-class.",
    name: "Rizal Abidin",
    title: "Head of Marketing, PT Teknologi Maju",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600">
            Hear from organizations that have transformed their business with our
            cloud solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatedElement animation="fade-in">
            <div className="relative bg-neutral-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={`${testimonials[activeTestimonial].name} Testimonial`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-[#FF6B00] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl italic mb-6 text-neutral-700">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-neutral-800">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-neutral-600">
                      {testimonials[activeTestimonial].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full bg-primary transition-opacity ${
                      index === activeTestimonial
                        ? "opacity-100"
                        : "opacity-30"
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                    onClick={() => setActiveTestimonial(index)}
                  ></button>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <AnimatedElement animation="slide-in">
            <div className="p-6 rounded-lg">
              <div className="text-primary mb-4">
                <Shield className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-neutral-800">
                99.9%
              </h3>
              <p className="text-neutral-600">
                Uptime SLA for all managed cloud services
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in" delay={0.1}>
            <div className="p-6 rounded-lg">
              <div className="text-primary mb-4">
                <Zap className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-neutral-800">43%</h3>
              <p className="text-neutral-600">
                Average cost reduction for our clients
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in" delay={0.2}>
            <div className="p-6 rounded-lg">
              <div className="text-primary mb-4">
                <ThumbsUp className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-neutral-800">97%</h3>
              <p className="text-neutral-600">Client satisfaction rating</p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
