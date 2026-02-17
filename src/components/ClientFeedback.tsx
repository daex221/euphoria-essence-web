import React from "react";
import { MessageCircle, Star } from "lucide-react";

const feedbacks = [
  {
    quote: "10/10 service. Feeling much better and very knowledgeable. Very respectful, I will definitely be coming back!",
    author: "Happy Client",
  },
  {
    quote: "Hi, thank you for yesterday! I really appreciated the massage, my legs feel great this morning.",
    author: "Satisfied Client",
  },
  {
    quote: "Wow, wow — what can I say? That massage was truly next level. Deep, intentional, and expertly delivered, it addressed all the right areas with precision and care. From the very first point of booking, the experience was seamless and professional. The massage felt like a portal, transporting me to another universe entirely. Deeply relaxing, grounding, and restorative. An exceptional experience!",
    author: "Loyal Client",
  },
  {
    quote: "Vanessa is amazing! She really listens to what you need and adjusts the pressure perfectly. I left feeling like a new person.",
    author: "Regular Client",
  },
  {
    quote: "Best deep tissue massage I've ever had. She found knots I didn't even know I had. Highly recommend!",
    author: "First-time Client",
  },
  {
    quote: "I've been going to Vanessa for months now and every session is just as good as the first. She truly cares about her clients' wellbeing.",
    author: "Returning Client",
  },
];

const ClientFeedback = () => {
  return (
    <section className="py-20 bg-vee-soft-gray/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-vee-peach/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-vee-lavender/20 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl"></div>

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-cormorant">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto opacity-75">
            Real messages from real clients — your comfort and satisfaction is everything to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {feedbacks.map((fb, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
              <div className="flex-1">
                <MessageCircle className="w-5 h-5 text-vee-pink/60 mb-2" />
                <blockquote className="italic text-sm opacity-80 leading-relaxed">
                  "{fb.quote}"
                </blockquote>
              </div>
              <p className="text-right text-sm font-medium mt-4">— {fb.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
