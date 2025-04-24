
import React from "react";
import SectionTitle from "../common/SectionTitle";
import CategoryCard from "../common/CategoryCard";

const categories = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    image: "https://images.pexels.com/photos/17456897/pexels-photo-17456897.jpeg",
    link: "/new-arrivals",
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    image: "https://images.pexels.com/photos/18255682/pexels-photo-18255682.jpeg",
    link: "/best-sellers",
  },
  {
    id: "dresses",
    title: "Dresses",
    image: "https://images.pexels.com/photos/17215851/pexels-photo-17215851.jpeg",
    link: "/dresses",
  },
  {
    id: "travel-sets",
    title: "Travel Sets",
    image: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg",
    link: "/travel-sets",
  },
  {
    id: "coord-sets",
    title: "Co-ord Sets",
    image: "https://images.pexels.com/photos/9558760/pexels-photo-9558760.jpeg",
    link: "/coord-sets",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-fashion-gray/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Shop by Category"
          subtitle="Discover our curated collections designed for every occasion"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
