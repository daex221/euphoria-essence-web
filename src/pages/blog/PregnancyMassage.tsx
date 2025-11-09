import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PregnancyMassage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog"><ArrowLeft className="mr-2" size={16} /> Back to Blog</Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
            Massage During Pregnancy: Safe Practices and Benefits
          </h1>
          
          <p className="text-sm opacity-60 mb-8">November 9, 2025 • 9 min read</p>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Pregnancy is a beautiful journey that comes with its share of physical challenges. From back pain and swollen ankles to stress and fatigue, expectant mothers face numerous discomforts. Prenatal massage offers safe, effective relief when performed by qualified therapists at Veese Euphoria Essence.
            </p>

            <h2>Is Massage Safe During Pregnancy?</h2>
            <p>
              Yes, when performed by trained professionals who understand pregnancy-specific modifications. At Veese Euphoria Essence, our therapists are experienced in prenatal massage and follow strict safety protocols.
            </p>

            <h2>Benefits of Pregnancy Massage</h2>

            <h3>Physical Benefits:</h3>
            <ul>
              <li>Reduces back, hip, and leg pain</li>
              <li>Alleviates swelling in hands and feet</li>
              <li>Decreases muscle tension and headaches</li>
              <li>Improves circulation</li>
              <li>Reduces sciatic nerve pain</li>
              <li>Eases round ligament pain</li>
              <li>Helps with better sleep</li>
            </ul>

            <h3>Emotional Benefits:</h3>
            <ul>
              <li>Reduces anxiety and stress</li>
              <li>Improves mood through endorphin release</li>
              <li>Provides nurturing touch during a transformative time</li>
              <li>Helps prepare mentally for labour</li>
              <li>Reduces symptoms of prenatal depression</li>
            </ul>

            <h3>Labour and Delivery Benefits:</h3>
            <ul>
              <li>Studies show women who receive regular prenatal massage have shorter labours</li>
              <li>Reduced need for pain medication during delivery</li>
              <li>Lower rates of premature birth</li>
              <li>Better birth outcomes overall</li>
            </ul>

            <h2>When to Start Pregnancy Massage</h2>
            <p>
              Most therapists recommend waiting until the second trimester (after 12 weeks) to begin massage therapy. However, at Veese Euphoria Essence, we can provide gentle, modified treatments earlier if approved by your healthcare provider.
            </p>

            <h2>Safe Positioning During Prenatal Massage</h2>
            <p>
              We never have pregnant clients lie flat on their backs after 20 weeks due to pressure on blood vessels. Instead, we use:
            </p>
            <ul>
              <li>Side-lying positions with supportive pillows</li>
              <li>Semi-reclined positions</li>
              <li>Specially designed pregnancy massage tables with cutouts</li>
            </ul>

            <h2>Techniques We Use</h2>
            <ul>
              <li><strong>Swedish Massage:</strong> Gentle, flowing strokes that promote relaxation</li>
              <li><strong>Reflexology:</strong> Pressure points on feet that correspond to different body areas</li>
              <li><strong>Gentle Stretching:</strong> Improves flexibility and reduces muscle tightness</li>
              <li><strong>Lymphatic Drainage:</strong> Reduces swelling and fluid retention</li>
            </ul>

            <h2>When to Avoid Massage</h2>
            <p>While generally safe, pregnancy massage should be postponed or avoided if you have:</p>
            <ul>
              <li>High-risk pregnancy conditions</li>
              <li>Pre-eclampsia</li>
              <li>Severe swelling, high blood pressure, or severe headaches</li>
              <li>Previous premature labour</li>
              <li>Recent heavy bleeding</li>
            </ul>
            <p>Always consult your midwife or doctor before booking your first prenatal massage.</p>

            <h2>Frequency of Prenatal Massage</h2>
            <ul>
              <li><strong>For general wellness:</strong> Monthly massages throughout pregnancy</li>
              <li><strong>For specific issues:</strong> Bi-weekly or weekly sessions as recommended</li>
              <li><strong>Third trimester:</strong> Weekly sessions can help prepare the body for labour</li>
            </ul>

            <h2>Postpartum Massage</h2>
            <p>The benefits of massage don't end with delivery. Postpartum massage helps with:</p>
            <ul>
              <li>Recovery from labour and delivery</li>
              <li>Relief from breastfeeding posture strain</li>
              <li>Stress reduction during the "fourth trimester"</li>
              <li>Hormone regulation</li>
              <li>Emotional support during a challenging time</li>
            </ul>

            <div className="mt-8 p-6 bg-vee-soft-gray rounded-lg">
              <p className="text-center font-medium mb-4">Give yourself and your baby the gift of relaxation and relief. Our experienced therapists are here to support you through every stage of your pregnancy journey.</p>
              <div className="text-center">
                <Button asChild className="bg-vee-pink hover:bg-pink-300">
                  <a href="https://wa.me/447497396867">Book Your Prenatal Massage</a>
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

export default PregnancyMassage;
