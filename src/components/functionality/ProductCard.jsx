import React, { useState } from 'react';
import greenCheck from '../../assets/products/Check.png';
import { toast } from 'react-toastify';
const ProductCard = ({ product, carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handleBuyNow = () => {
    setIsBuyNow(true);
    setCarts([...carts, product]);
    toast.success("Products added to Cart successfully")
  };
  return (
    <div>
      <div key={product.id} className="  bg-white rounded-lg">
        <div className="border-amber-50  p-6 h-full relative">
          <p className="absolute top-0 right-4 bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
            {product.tag}
          </p>
          <img
            className="bg-white mb-3 rounded-full h-11 w-11"
            src={product.icon}
            alt=""
          />
          <p className="font-bold mt-4 mb-4 text-2xl">{product.name}</p>
          <p className="text-[#627382FF] mb-4">{product.description}</p>
          <p className="font-bold mb-4 text-2xl">
            ${product.price}
            <span className="text-[16px] text-[#627382FF]">
              /{product.period}
            </span>
          </p>
          <div className="text-[#627382FF] mb-4">
            <div className="flex gap-2">
              <img src={greenCheck} alt="" />
              <p>{product.features[0]}</p>
            </div>
            <div className="flex gap-2">
              <img src={greenCheck} alt="" />
              <p>{product.features[1]}</p>
            </div>
            <div className="flex gap-2">
              <img src={greenCheck} alt="" />
              <p>{product.features[2]}</p>
            </div>
            <div className="flex gap-2">
              <img src={greenCheck} alt="" />
              <p>{product.features[3]}</p>
            </div>
          </div>
          <button
            disabled={isBuyNow}
            onClick={handleBuyNow}
            className={`btn w-full rounded-full   ${
              isBuyNow
                ? 'bg-green-500 text-white text-xl font-bold'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-xl text-white '
            }`}
          >
            {isBuyNow ? 'Already Added to Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
