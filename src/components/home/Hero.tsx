
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Hero slider content
const heroSlides = [
  {
    title: "Elevate Your Style",
    subtitle: "Discover the latest trends that define modern femininity",
    cta: "Explore Collection",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/new-arrivals",
    bgColor: "bg-fashion-pink/10",
  },
  {
    title: "Summer Collection",
    subtitle: "Light, breathable fabrics for your summer adventures",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "/summer-collection",
    bgColor: "bg-fashion-mint/20",
  },
  {
    title: "Coordinated Sets",
    subtitle: "Effortlessly chic matching sets for every occasion",
    cta: "View Sets",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    link: "/coord-sets",
    bgColor: "bg-fashion-lavender/10",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`relative ${
            currentSlide === index ? "block" : "hidden"
          } ${slide.bgColor} transition-all duration-500`}
        >
          <div className="container mx-auto px-4 py-10 md:py-0">
            <div className="md:grid md:grid-cols-2 md:min-h-[600px] items-center">
              {/* Text content */}
              <div className="md:pr-10 py-8 md:py-0 text-center md:text-left">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6 max-w-md mx-auto md:mx-0 text-gray-700">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <Button
                    className="px-8 py-6 font-medium rounded-md bg-fashion-pink hover:bg-primary-foreground text-primary-foreground hover:text-white btn-hover-slide"
                  >
                    {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              {/* Image */}
              <div className="relative md:h-[600px]">
                <div className="hero-overlay"></div>
                <img
                  src={slide.image}
                  alt="Fashion model"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index
                ? "bg-primary-foreground"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
