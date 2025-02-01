import React from "react";

const ProductPrice = ({ productPrice }: { productPrice: number }) => {
  const value = productPrice ? productPrice.toFixed(2) : 0;
  // Get whole/decimal
  const [wholeValue, decimalValue] = value.toString().split(".");

  console.log("val", wholeValue, decimalValue);

  return (
    <>
      <p className="border-b">
        £ <span className="text-xl">{wholeValue}</span>,
        <span className="text-sm font-light">{decimalValue}</span>
      </p>
    </>
  );
};

export default ProductPrice;
