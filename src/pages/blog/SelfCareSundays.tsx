import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SelfCareSundays = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog"><ArrowLeft className="mr-2" size={16} /> Back to Blog</Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
            Self-Care Sundays: Creating a Wellness Routine with Massage
          </h1>
          
          <p className="text-sm opacity-60 mb-8">November 9, 2025 • 5 min read</p>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              In our fast-paced world, self-care often falls to the bottom of our priority list. Sunday provides the perfect opportunity to reset, recharge, and prepare for the week ahead. At Veese Euphoria Essence, we believe that incorporating massage into your weekly routine is one of the most powerful forms of self-care.
            </p>

            <h2>Why Sunday Self-Care Matters</h2>
            <p>
              Sunday self-care sets the tone for your entire week. By dedicating time to your wellbeing, you reduce stress, improve mental clarity, and boost your immune system. Research shows that people who practice regular self-care experience better overall health and higher life satisfaction.
            </p>

            <h2>Creating Your Perfect Self-Care Sunday</h2>

            <h3>Morning: Mindful Start</h3>
            <ul>
              <li>Begin with gentle stretching or yoga (15 minutes)</li>
              <li>Practice meditation or deep breathing (10 minutes)</li>
              <li>Enjoy a nutritious breakfast without rushing</li>
              <li>Avoid checking work emails or social media</li>
            </ul>

            <h3>Midday: Movement and Nature</h3>
            <ul>
              <li>Take a walk in nature or your local park</li>
              <li>Gentle exercise like swimming or cycling</li>
              <li>Spend time in sunlight to boost vitamin D levels</li>
            </ul>

            <h3>Afternoon: Your Massage Appointment</h3>
            <p>This is the centrepiece of your self-care Sunday. A professional massage at Veese Euphoria Essence provides:</p>
            <ul>
              <li>Deep relaxation and stress relief</li>
              <li>Release of physical tension accumulated during the week</li>
              <li>Improved circulation and lymphatic drainage</li>
              <li>Mental clarity and emotional balance</li>
              <li>Better sleep quality for the night ahead</li>
            </ul>

            <h3>Evening: Wind Down</h3>
            <ul>
              <li>Prepare a healthy, nourishing dinner</li>
              <li>Take a warm bath with Epsom salts</li>
              <li>Read a book or journal</li>
              <li>Set intentions for the coming week</li>
              <li>Early bedtime for optimal recovery</li>
            </ul>

            <h2>Types of Massage for Different Needs</h2>
            <ul>
              <li><strong>For Stress Relief:</strong> Swedish or aromatherapy massage</li>
              <li><strong>For Muscle Recovery:</strong> Deep tissue or sports massage</li>
              <li><strong>For Energy Boost:</strong> Trigger point massage</li>
              <li><strong>For Complete Relaxation:</strong> Hot stone or aromatherapy massage</li>
            </ul>

            <h2>Making It a Habit</h2>
            <p>Consistency is key to reaping the full benefits of self-care. Here's how to make Sunday wellness a non-negotiable part of your routine:</p>
            <ul>
              <li>Block out time in your calendar</li>
              <li>Book your massage appointments in advance</li>
              <li>Turn off notifications during your self-care time</li>
              <li>Communicate boundaries with family and friends</li>
              <li>Treat it as importantly as any work commitment</li>
            </ul>

            <h2>The Ripple Effect</h2>
            <p>When you prioritise self-care on Sundays, the benefits extend throughout your week. Clients who maintain regular massage appointments at Veese Euphoria Essence report:</p>
            <ul>
              <li>Increased productivity at work</li>
              <li>Better mood and patience with loved ones</li>
              <li>Reduced reliance on pain medication</li>
              <li>Improved sleep quality throughout the week</li>
              <li>Greater resilience to stress</li>
            </ul>

            <div className="mt-8 p-6 bg-vee-soft-gray rounded-lg">
              <p className="text-center font-medium mb-4">This Sunday, give yourself permission to slow down and prioritise your wellbeing. Make Sunday self-care your new tradition.</p>
              <div className="text-center">
                <Button asChild className="bg-vee-pink hover:bg-pink-300">
                  <a href="https://wa.me/447733219034">Book Your Sunday Session</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SelfCareSundays;
