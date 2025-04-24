
import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

const bestsellerProducts = [
  {
    id: "11",
    name: "Classic White Shirt",
    price: 1799,
    image: "https://images.pexels.com/photos/18255682/pexels-photo-18255682.jpeg",
    isBestseller: true,
  },
  {
    id: "12",
    name: "Flowy Summer Dress",
    price: 2599,
    image: "https://images.pexels.com/photos/17456897/pexels-photo-17456897.jpeg",
    isBestseller: true,
  },
  {
    id: "13",
    name: "Printed Palazzo Set",
    price: 3299,
    image: "https://images.pexels.com/photos/9558760/pexels-photo-9558760.jpeg",
    isBestseller: true,
  },
  {
    id: "14",
    name: "Cotton Kurta",
    price: 1999,
    image: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg",
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
