
import React from "react";
import SectionTitle from "../common/SectionTitle";

const OurPromise = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Promise to You"
          subtitle="We believe in creating fashion that is both beautiful and responsible"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Sustainable Fashion" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-fashion-pink rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Sustainable Quality</h3>
                  <p className="text-gray-600">
                    We source only the finest, ethically-produced fabrics that are gentle on your skin and on our planet. Our pieces are designed to last, reducing waste and your carbon footprint.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fashion-mint rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Comfort First Design</h3>
                  <p className="text-gray-600">
                    Every piece is designed with your comfort in mind. We believe fashion should feel as good as it looks, which is why we prioritize fit, movement, and breathability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fashion-lavender rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 17.5v-11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Fair Pricing</h3>
                  <p className="text-gray-600">
                    We believe in transparency and fair pricing. By selling directly to you, we eliminate unnecessary markups while still ensuring ethical wages throughout our supply chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
