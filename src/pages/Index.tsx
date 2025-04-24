
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StylePicks from "@/components/home/StylePicks";
import OurPromise from "@/components/home/OurPromise";
import MostLoved from "@/components/home/MostLoved";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <StylePicks />
        <OurPromise />
        <MostLoved />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
