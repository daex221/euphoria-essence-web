import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: "massage-guide-uk",
      title: "The Ultimate Guide to Massage Therapy in the UK: Benefits and Types",
      excerpt: "Discover the benefits of massage therapy in the UK. Learn about different massage types including deep tissue, Swedish, and sports massage.",
      date: "November 9, 2025",
      readTime: "8 min read"
    },
    {
      id: "signs-need-massage",
      title: "7 Signs You Need a Massage: Listen to Your Body",
      excerpt: "Experiencing muscle tension, stress, or poor sleep? Discover the 7 signs your body needs professional massage therapy.",
      date: "November 9, 2025",
      readTime: "6 min read"
    },
    {
      id: "massage-back-pain",
      title: "Massage for Back Pain: What UK Residents Need to Know",
      excerpt: "Suffering from back pain? Learn how professional massage therapy can help with natural, effective pain relief.",
      date: "November 9, 2025",
      readTime: "7 min read"
    },
    {
      id: "self-care-sundays",
      title: "Self-Care Sundays: Creating a Wellness Routine with Massage",
      excerpt: "Transform your Sundays into self-care sanctuaries. Learn how to create a wellness routine incorporating professional massage.",
      date: "November 9, 2025",
      readTime: "5 min read"
    },
    {
      id: "pregnancy-massage",
      title: "Massage During Pregnancy: Safe Practices and Benefits",
      excerpt: "Pregnancy massage benefits and safety guidelines. Expert prenatal massage therapy for expectant mothers.",
      date: "November 9, 2025",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-vee-peach/20 via-vee-lavender/20 to-vee-pink/20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">Massage Therapy Blog</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Expert massage therapy advice, wellness tips, and self-care guides from Veese Euphoria Essence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-cormorant text-2xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm mt-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="opacity-75 mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
