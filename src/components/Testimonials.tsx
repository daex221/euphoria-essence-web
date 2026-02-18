
import React from "react";
import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/lovable-uploads/143f1dea-f7c4-441c-9c85-80dc153a5815.png",
      quote: "Vanessa's massage therapy was exactly what I needed. I felt completely renewed and relaxed. The experience was truly euphoric!",
      author: "Sarah L."
    },
    {
      video: "/lovable-uploads/testimonial-video.mov",
      quote: "I've never felt so pampered and cared for. The beauty therapy session was exceptional, and I love my new look!",
      author: "Michelle K."
    },
    {
      image: "/lovable-uploads/vanessa-purple.jpg",
      quote: "I incorporate a variety of high-quality essential oils into my treatments. Each essential oil is carefully selected for its unique properties, which offer exceptional benefits for your skin.",
      author: "Miss Vanessa Blaze"
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
            Experience the blissful tranquility and rejuvenation that our clients rave about. Open Monday–Friday 12:30–9:30 PM, Saturday–Sunday 2 PM–9 PM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
              {testimonial.video ? (
                <div className="h-48 overflow-hidden">
                  <video 
                    src={testimonial.video} 
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
              ) : testimonial.image ? (
                <div className={index === 2 ? "h-96 overflow-hidden" : "h-48 overflow-hidden"}>
                  <img 
                    src={testimonial.image} 
                    alt="Vee's Euphoria Essence testimonial" 
                    className={index === 2 ? "w-full h-full object-contain" : "w-full h-full object-cover"}
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
                {index === 2 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-600 mb-1">
                      <strong>Booking Policy:</strong> £20 non-refundable deposit required. 15-minute grace period for appointments.
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>Massage Frequency:</strong> Weekly for pain relief, monthly for maintenance.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
