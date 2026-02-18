
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

            <div className="mt-8 p-4 bg-vee-lavender/10 border border-vee-lavender/20 rounded-2xl">
              <p className="text-sm font-semibold mb-3">🎓 Certified & Accredited</p>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/certificate.jpg" 
                  alt="Deep Tissue Massage Therapy Course - QLS Level 5 Certificate" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs mt-2 opacity-70 text-center">Deep Tissue Massage Therapy Course at QLS Level 5 — CPD & IPHM Accredited</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/vanessa-black.jpg" 
                alt="Vanessa - Licensed Massage Therapist" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAbout;
