
import React from "react";

const CustomAbout = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">About Me</h2>
            
            <p className="text-lg mb-6 opacity-90">
              Hi, I'm Vanessa, a licensed massage therapist with over three years of experience in the wellness industry. I specialize in therapeutic, relaxation, and deep tissue massage techniques.
            </p>
            
            <p className="text-lg mb-6 opacity-90">
              My mission is to help clients experience relief, renewal, and deep relaxation through the healing power of touch. Each session is thoughtfully customized to your unique needs, creating a calm and restorative environment where your well-being is my top priority.
            </p>
            
            <p className="text-lg opacity-90">
              I'm committed to continuous growth through advanced training in a variety of massage modalities, ensuring you receive the highest quality of care. I believe massage isn't just a luxury — it's an essential part of maintaining a healthy, balanced lifestyle.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/vanessa-mirror-selfie.png" 
                alt="Vanessa Blaze - Licensed Massage Therapist" 
                className="w-full h-auto object-cover object-left"
                style={{ objectPosition: '20% center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAbout;
