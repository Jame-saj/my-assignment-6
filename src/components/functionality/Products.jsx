import React, { use } from 'react';

import ProductCard from './ProductCard';

const Products = ({ productsPromise, carts, setCarts }) => {
  const products = use(productsPromise)
 

  return (
    <div className="py-10 md:py-15">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Premium Digital Tools</h1>
          <p className="text-[#627382FF]">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-8 gap-6">
          {products.map(product => (
            <ProductCard
              carts={carts}
              setCarts={setCarts}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;