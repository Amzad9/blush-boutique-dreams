
import React from "react";
import CategoryPage from "@/components/common/CategoryPage";
import { Helmet } from "react-helmet-async";

const TravelSets = () => {
  return (
    <>
      <Helmet>
        <title>Travel Sets Collection | Blush Boutique Dreams</title>
        <meta
          name="description"
          content="Discover our elegant travel sets collection. Comfortable and versatile outfits designed for the modern woman on the go."
        />
        <link rel="canonical" href="/travel-sets" />
      </Helmet>
      <CategoryPage
        title="Travel Sets"
        description="Comfortable and versatile travel sets designed for the modern woman on the go. Perfect for journeys near and far."
      />
    </>
  );
};

export default TravelSets;
