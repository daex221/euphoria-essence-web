
import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vee-soft-gray py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cormorant text-2xl font-bold mb-4">VEE'S EUPHORIA ESSENCE</h3>
            <p className="opacity-75 max-w-xs">
              Professional massage therapy services providing relaxation and healing through the art of touch.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-vee-text/70" />
                <a href="tel:+447497396867" className="hover:underline">+44 7497 396867</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-vee-text/70" />
                <span>IG11 8AW, UK</span>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2 text-vee-text/70" />
                <a 
                  href="https://www.instagram.com/veeseuphoriaessence" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @veeseuphoriaessence
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Hours</h4>
            <ul className="space-y-1 opacity-75">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 18:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://wa.me/447497396867" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2 bg-vee-pink text-vee-text text-sm rounded-full hover:bg-pink-300 transition-colors shadow-sm inline-block"
              >
                Book Your Session
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60 mb-4 md:mb-0">
            &copy; {currentYear} Vee's Euphoria Essence. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#about" 
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
