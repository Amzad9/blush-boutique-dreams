
import React from "react";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Priya M.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    message: "The dresses are so comfortable yet elegant. I've received countless compliments whenever I wear them. Definitely my go-to brand now!",
    product: "Floral Maxi Dress",
  },
  {
    id: 2,
    name: "Neha K.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    message: "The quality is exceptional! I love how the co-ord sets can be mixed and matched with other items in my wardrobe. Super versatile!",
    product: "Linen Co-ord Set",
  },
  {
    id: 3,
    name: "Anjali S.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100",
    rating: 4,
    message: "The travel sets are perfect for my weekend getaways. I just pack one set and I'm good to go! Love the breathable fabric too.",
    product: "Travel Comfort Set",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Your Words, Our Pride"
          subtitle="What our customers say about their shopping experience"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-50"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FEC6A1" stroke="#FEC6A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Message */}
              <p className="text-gray-600 italic mb-6">"{testimonial.message}"</p>
              
              {/* Customer Info */}
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
