import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt="Product Image"
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>

      <CardContent>
        <div className="w-full py-2">
          <p className="text-xs text-start">{product.brand}</p>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm mt-4 font-medium">{product.name}</h2>
          </Link>

          {/* Rating */}
          <div className="flex justify-between mt-2">
            <p className="text-md">{product.rating} Stars</p>

            {product.stock > 0 ? (
              <p className="text-lg">£{product.price}</p>
            ) : (
              <p className="text-red-800 font-extralight">Out of stock</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
