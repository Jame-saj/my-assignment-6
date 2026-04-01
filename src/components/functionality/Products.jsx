import React, { use } from 'react';

const Products = ({ productsPromise }) => {
  const products = use(productsPromise)
  console.log(products)
  return (
    <div className='py-20'>
      <div>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        </div>
        <div>
          {
            products.map(product => <div>
              <div>

                <img src={product.icon} alt="" />
                </div>

            </div>) 
          }
        </div>

     
      </div>
      
    </div>
  );
};

export default Products;