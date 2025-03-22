import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/animated-element";

const team = [
  {
    name: "Budi Santoso",
    role: "Chief Executive Officer",
    bio: "With 20+ years in the technology sector, Budi's vision has established PT Cloud System Indonesia as a leader in cloud solutions across Indonesia.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    delay: 0
  },
  {
    name: "Dr. Siti Rahayu",
    role: "Chief Technology Officer",
    bio: "Dr. Rahayu leads our technology strategy with her extensive background in cloud architecture and a PhD in Distributed Computing Systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    delay: 0.1
  },
  {
    name: "Arief Wicaksono",
    role: "Chief Operations Officer",
    bio: "Arief ensures operational excellence across all our projects, bringing 15+ years of experience in enterprise IT operations management.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    delay: 0.2
  }
];

const TeamSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
            Our Leadership Team
          </h2>
          <p className="text-lg text-neutral-600">
            Meet the experts who drive our vision and lead our company to
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedElement
              key={index}
              animation="slide-in"
              delay={member.delay}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-72 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.role} at PT Cloud System Indonesia`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-neutral-800">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-600 hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-primary-dark transition duration-300"
          >
            Join Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
