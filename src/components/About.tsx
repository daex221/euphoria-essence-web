
import React from "react";
import { Flower, Heart, Leaf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-vee-lavender/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vee-pink/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cormorant">
              Meet <span className="gradient-text">Vanessa Sami</span>
            </h2>
            
            <p className="text-lg mb-6 opacity-90">
              Hi, I'm Vanessa – founder of Vee's Euphoria Essence and your dedicated massage therapist. With gentle hands and a deep passion for healing, I've created a safe, loving space for clients to reconnect with their bodies and leave stress behind.
            </p>
            
            <p className="text-lg mb-8 opacity-90">
              Every session is more than just a treatment — it's an experience of care, trust, and euphoria.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-vee-pink/30 rounded-full flex items-center justify-center mb-3">
                  <Flower className="text-pink-600" size={22} />
                </div>
                <h3 className="font-medium mb-1">Experienced</h3>
                <p className="text-sm opacity-75">Skilled therapeutic touch</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-vee-lavender/30 rounded-full flex items-center justify-center mb-3">
                  <Heart className="text-purple-600" size={22} />
                </div>
                <h3 className="font-medium mb-1">Caring</h3>
                <p className="text-sm opacity-75">Client-focused approach</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-vee-peach/30 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="text-orange-500" size={22} />
                </div>
                <h3 className="font-medium mb-1">Healing</h3>
                <p className="text-sm opacity-75">Restorative techniques</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-96 md:h-[550px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/ccba16da-58e8-4185-ae70-7f25874d6b26.png" 
                alt="Vanessa Sami - Founder of Vee's Euphoria Essence" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-vee-pink/50 via-vee-lavender/30 to-vee-peach/40 z-10 mix-blend-overlay"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <blockquote className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                  <p className="italic text-vee-text mb-4">
                    "My mission is to help clients find relief, relaxation, and renewal through the healing power of touch."
                  </p>
                  <footer className="font-medium">— Vanessa, Founder</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
