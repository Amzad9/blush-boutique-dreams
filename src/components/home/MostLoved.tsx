
import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

const bestsellerProducts = [
  {
    id: "11",
    name: "Classic White Shirt",
    price: 1799,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true,
  },
  {
    id: "12",
    name: "Flowy Summer Dress",
    price: 2599,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    isBestseller: true,
  },
  {
    id: "13",
    name: "Printed Palazzo Set",
    price: 3299,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    isBestseller: true,
  },
  {
    id: "14",
    name: "Cotton Kurta",
    price: 1999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true,
  },
];

const MostLoved = () => {
  return (
    <section className="py-16 bg-fashion-yellow/20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Most-Loved by You"
          subtitle="Our bestsellers that customers can't get enough of"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isBestseller={product.isBestseller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostLoved;
