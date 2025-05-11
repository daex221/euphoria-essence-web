
import React from "react";
import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/lovable-uploads/452ee5e3-d440-4c5a-8944-5117d1e962d9.png",
      quote: "Vanessa's massage therapy was exactly what I needed. I felt completely renewed and relaxed. The experience was truly euphoric!",
      author: "Sarah L."
    },
    {
      image: "/lovable-uploads/2087fec9-1e3a-4612-88ff-f84ec83cee9b.png",
      quote: "I've never felt so pampered and cared for. The beauty therapy session was exceptional, and I love my new look!",
      author: "Michelle K."
    },
    {
      quote: "As someone who suffers from chronic back pain, Vee's therapeutic approach has been life-changing. I leave each session feeling balanced and pain-free.",
      author: "James T."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vee-pink/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-cormorant">Peaceful Moments</h2>
          <p className="max-w-2xl mx-auto opacity-75">
            Experience the blissful tranquility and rejuvenation that our clients rave about.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
              {testimonial.image ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt="Vee's Euphoria Essence testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-vee-pink/40 via-vee-lavender/30 to-vee-peach/20 flex items-center justify-center">
                  <StarIcon className="w-12 h-12 text-white/50" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>
                <blockquote className="italic text-vee-text/80 text-sm mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-right text-sm font-medium text-vee-text">— {testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
