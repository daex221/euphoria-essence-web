
import React from "react";
import { Card } from "@/components/ui/card";
import { FlowerIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vee-pink/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-cormorant">Peaceful Moments</h2>
          <p className="max-w-2xl mx-auto opacity-75">
            Experience the blissful tranquility and rejuvenation that awaits you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden border-none shadow-md">
              <div className="h-48 bg-gradient-to-br from-vee-pink/40 via-vee-lavender/30 to-vee-peach/20 flex items-center justify-center">
                <FlowerIcon className="w-12 h-12 text-white/50" />
              </div>
              <div className="p-6">
                <blockquote className="italic text-vee-text/80 text-sm">
                  "Tranquility is not just the absence of chaos, but the presence of peace and balance."
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
