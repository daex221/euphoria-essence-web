
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Droplet, Leaf, Clock } from "lucide-react";

const SkinBenefits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-r from-vee-pink/30 to-vee-lavender/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-vee-lavender/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-vee-pink/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              <span className="gradient-text">Wellness</span> Insights
            </h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Discover the benefits of essential oils and learn how regular massages can transform your wellbeing
            </p>
          </div>
        </section>
        
        {/* Skin Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-vee-peach/30 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="text-pink-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-cormorant font-bold">Skin Benefits</h2>
                </div>
                
                <p className="text-lg mb-6 opacity-90">
                  I incorporate a variety of high-quality essential oils into my treatments. Each essential oil is carefully selected for its unique properties, which are known to offer exceptional benefits for your skin. Whether it's for hydration, rejuvenation, or soothing irritation, these oils play a vital role in enhancing your skincare routine and overall well-being.
                </p>
                
                <p className="text-lg mb-6 opacity-90">
                  In addition to their skin benefits, essential oils also provide therapeutic effects that can promote relaxation, reduce stress, and improve mood, ensuring you receive a holistic experience with every session. I pride myself on using only high-quality, pure essential oils to ensure you experience the full benefits in every treatment.
                </p>
                
                <p className="text-lg mb-6 opacity-90">
                  Should you have any questions about the oils I use or how they can specifically benefit you, feel free to ask. I'm here to help you achieve the healthiest and most radiant skin possible.
                </p>
                
                <p className="text-lg font-medium italic">
                  Thank you for trusting me with your care.
                </p>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/d5787552-0879-4b66-ba6c-ec4fb11b2707.png" 
                    alt="Essential oils for skin care" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Massage Frequency Section */}
        <section className="py-16 bg-vee-soft-gray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-vee-lavender/30 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-cormorant font-bold">How Frequently Should You Get A Massage?</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-medium mb-3">For Relaxation</h3>
                    <p className="opacity-90">
                      Indulge in massages as frequently as you like and can afford! Whether it's weekly, monthly, or at a pace that suits you, regular sessions are encouraged to maximize relaxation, as consistent care can be more effective than occasional treatments.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-medium mb-3">For Pain Relief</h3>
                    <p className="opacity-90">
                      It's best to space your massages about three days apart to allow your muscles adequate recovery time. Weekly or biweekly sessions are ideal until you notice improvement in the pain.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-medium mb-3">For Relieving Muscle Knots</h3>
                    <p className="opacity-90">
                      To fully address muscle knots, aim for weekly massages for at least a month. After that, scheduling a monthly session can help keep knots from returning.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/143f1dea-f7c4-441c-9c85-80dc153a5815.png" 
                    alt="Massage frequency guidelines" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkinBenefits;
