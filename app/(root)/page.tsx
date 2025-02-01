import React from "react";
import ProductList from "@/components/shared/product/product-list";
import data from "@/db/sample-data";

export const metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <ProductList title="Featured Products" data={data.products} />
    </>
  );
};

export default HomePage;
