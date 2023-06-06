import React, { useEffect, useState } from "react";
import { Product } from "@/interfaces/product.interface";
import { client } from "../sanity/lib/client";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(`
        *[_type == "product"]{
          _id,
          title,
          description,
          type,
          productType,
          thc,
          cbd,
          price,
          size,
          "imageUrl": images[0].asset->url,
        }
      `);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className=" mt-6 py-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
