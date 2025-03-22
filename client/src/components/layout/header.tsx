import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isHomePage = location === "/";

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    return isHomePage ? (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(id);
        }}
        className="text-neutral-700 hover:text-primary font-medium"
      >
        {label}
      </a>
    ) : (
      <Link href={`/#${id}`} className="text-neutral-700 hover:text-primary font-medium">
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-neutral-500 hover:text-neutral-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About Us" />
            <NavLink id="services" label="Services" />
            <NavLink id="team" label="Our Team" />
            <NavLink id="testimonials" label="Testimonials" />
            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="bg-[#FF6B00] text-white px-4 py-2 rounded-md font-medium hover:bg-[#CC5500] transition duration-300"
              >
                Contact Us
              </a>
            ) : (
              <Link href="/#contact" className="bg-[#FF6B00] text-white px-4 py-2 rounded-md font-medium hover:bg-[#CC5500] transition duration-300">
                Contact Us
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-neutral-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {isHomePage ? (
            <>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
              >
                Services
              </a>
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("team");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
              >
                Our Team
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("testimonials");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#FF6B00] text-white hover:bg-[#CC5500]"
              >
                Contact Us
              </a>
            </>
          ) : (
            <>
              <Link href="/#home" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50">
                Home
              </Link>
              <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50">
                About Us
              </Link>
              <Link href="/#services" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50">
                Services
              </Link>
              <Link href="/#team" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50">
                Our Team
              </Link>
              <Link href="/#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50">
                Testimonials
              </Link>
              <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-[#FF6B00] text-white hover:bg-[#CC5500]">
                Contact Us
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
