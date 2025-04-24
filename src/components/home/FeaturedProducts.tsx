
import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

const products = [
  {
    id: "1",
    name: "Floral Maxi Dress",
    price: 2499,
    image: "https://images.pexels.com/photos/17456897/pexels-photo-17456897.jpeg",
    isNew: true,
  },
  {
    id: "2",
    name: "Linen Blend Shirt",
    price: 1899,
    salePrice: 1499,
    image: "https://images.pexels.com/photos/18255682/pexels-photo-18255682.jpeg",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Cotton Palazzo Pants",
    price: 1699,
    image: "https://images.pexels.com/photos/9558760/pexels-photo-9558760.jpeg",
  },
  {
    id: "4",
    name: "Embroidered Kurta",
    price: 2899,
    image: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg",
    isBestseller: true,
  },
  {
    id: "5",
    name: "Wrap Style Top",
    price: 1299,
    image: "https://images.pexels.com/photos/17215851/pexels-photo-17215851.jpeg",
    isNew: true,
  },
  {
    id: "6",
    name: "Summer Midi Dress",
    price: 2199,
    salePrice: 1899,
    image: "https://images.pexels.com/photos/17456897/pexels-photo-17456897.jpeg",
  },
  {
    id: "7",
    name: "Pleated Skirt",
    price: 1799,
    image: "https://images.pexels.com/photos/9558760/pexels-photo-9558760.jpeg",
  },
  {
    id: "8",
    name: "Tie-Dye Co-ord Set",
    price: 2999,
    image: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg",
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Newest Collection"
          subtitle="Fresh designs that blend comfort with contemporary style"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              image={product.image}
              isBestseller={product.isBestseller}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
