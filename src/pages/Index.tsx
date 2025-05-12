
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomAbout from "@/components/CustomAbout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CustomAbout />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
