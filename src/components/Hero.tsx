
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-vee-soft-gray">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(253,225,211,0.4)_0%,rgba(229,222,255,0.6)_50%,rgba(255,222,226,0.5)_100%)]"></div>
      </div>
      
      <div className="relative section-container flex flex-col items-center text-center z-10">
        <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight opacity-0 animate-fade-in">
          <span className="gradient-text">Your body deserves</span>
          <br />
          <span>love, too.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-0 animate-fade-in-delay-1">
          Professional massage therapy services in IG11 8AW, UK.
          Experience deep relaxation and healing through the art of touch.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-2">
          <Button
            asChild
            className="bg-vee-pink hover:bg-pink-300 text-vee-text rounded-full px-8 py-6"
          >
            <a href="https://wa.me/447497396867">Book Your Session</a>
          </Button>
          
          <Button
            asChild
            variant="outline" 
            className="border-vee-lavender hover:bg-vee-lavender/20 text-vee-text rounded-full px-8 py-6"
          >
            <a href="#services">View Services</a>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-in-delay-3">
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2">Scroll to discover</p>
            <div className="w-6 h-10 rounded-full border-2 border-vee-text flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-vee-text rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
