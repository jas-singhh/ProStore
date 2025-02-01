import React from "react";
import ProductCard from "./product-card";

const ProductList = ({
  title,
  data,
  dataLimit,
}: {
  title?: string;
  data: any;
  dataLimit?: number;
}) => {
  data = dataLimit ? data.slice(0, dataLimit) : data;

  return (
    <div className="my-10 max-w-screen-lg mx-auto px-10">
      <h2 className="font-semibold tracking-wide mb-8">{title}</h2>

      {/* Product List Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((product: any) => {
            return <ProductCard key={product.slug} product={product} />;
          })
        ) : (
          <h4>No products found</h4>
        )}
      </div>
    </div>
  );
};

export default ProductList;
