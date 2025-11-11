
import React, { useState, useEffect } from "react";
import { Instagram, Phone, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-vee-text">
            <h1 className="font-cormorant font-semibold text-xl md:text-2xl">VEE'S EUPHORIA ESSENCE</h1>
          </Link>
          <div className="flex items-center space-x-4 md:hidden">
            <a 
              href="tel:+447733219034" 
              className="text-vee-text hover:text-pink-500 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center mt-4 md:mt-0">
          <div className="flex items-center space-x-6">
            <Link to="/#about" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link to="/#services" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
              Blog
            </Link>
            <Link to="/skin-benefits" className="text-sm text-vee-text hover:text-pink-500 transition-colors flex items-center">
              <Leaf size={16} className="mr-1" />
              <span>Wellness</span>
            </Link>
            <a 
              href="https://www.instagram.com/vees_euphoriaessence/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vee-text hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="tel:+447733219034" 
              className="text-vee-text hover:text-pink-500 transition-colors flex items-center"
            >
              <Phone size={16} className="mr-1" />
              <span className="text-sm">+44 7733 219034</span>
            </a>
            <a 
              href='https://www.treatwell.co.uk/' 
              id="wahanda-online-booking-widget"
              onClick={(e) => {
                e.preventDefault();
                (window as any).wahanda?.openOnlineBookingWidget("https://widget.treatwell.co.uk/place/502481/menu/");
                return false;
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vee-pink text-vee-text px-5 py-2 rounded-full text-sm hover:bg-pink-300 transition-colors shadow-sm"
            >
              <span>Book now!</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-center mt-2">
        <div className="flex justify-center space-x-6 pb-2">
          <Link to="/#about" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
            About
          </Link>
          <Link to="/#services" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
            Services
          </Link>
          <Link to="/blog" className="text-sm text-vee-text hover:text-pink-500 transition-colors">
            Blog
          </Link>
          <Link to="/skin-benefits" className="text-sm text-vee-text hover:text-pink-500 transition-colors flex items-center">
            <Leaf size={16} className="mr-1" />
            <span>Wellness</span>
          </Link>
          <a 
            href="https://www.instagram.com/vees_euphoriaessence/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vee-text hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
