
import React from "react";

const CustomAbout = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">About Me</h2>
            
            <p className="text-lg mb-6 opacity-90">
              Hi, I'm Vanessa Blaze, a licensed massage therapist with over 6 years of experience in the wellness industry. I specialize in therapeutic, relaxation, and deep tissue massage techniques.
            </p>
            
            <p className="text-lg mb-6 opacity-90">
              <strong>My mission is to help clients find relief, relaxation and renewal through the healing power of touch and a euphoric feeling.</strong> Through personalized massage sessions tailored to your specific needs, I strive to create a serene atmosphere where your well-being is the top priority.
            </p>
            
            <p className="text-lg opacity-90">
              I continuously enhance my knowledge through advanced training in various massage modalities to provide you with the best care possible. I believe in the power of massage not just as a luxury, but as an essential component of a healthy lifestyle.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/f70ea414-0ba3-4484-aa8c-c97d0d17ab60.png" 
                alt="Vanessa Blaze" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAbout;
