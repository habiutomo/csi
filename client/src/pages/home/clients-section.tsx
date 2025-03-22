import { SiAmazon, SiGoogle, SiOracle, SiDigitalocean, SiIntel } from "react-icons/si";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Trusted by Leading Organizations
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Using actual cloud provider logos as examples of enterprise clients */}
          <div className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
            <SiAmazon className="h-12 w-32" />
          </div>
          <div className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
            <SiGoogle className="h-12 w-32" />
          </div>
          <div className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
            <SiOracle className="h-12 w-32" />
          </div>
          <div className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
            <SiDigitalocean className="h-12 w-32" />
          </div>
          <div className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
            <SiIntel className="h-12 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
