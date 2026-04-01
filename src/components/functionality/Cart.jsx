import React from 'react';
import cartImg from "../../assets/products/cart-2.jpg"
import { toast } from 'react-toastify';
const Cart = ({ carts, setCarts }) => {
 
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successfully");
  }

  const handleRemove = (item) => {
    const filterArray = carts.filter(c => c.id !== item.id);
    setCarts(filterArray);
      toast.error("Items Removed !!")
  };
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-bold text-center pt-7">Your Cart</h1>
      {carts.length === 0 ? (
        <div className="text-2xl font-bold  text-gray-400 pt-9 text-center pt-4">
          <img className='mx-auto' src={cartImg} alt="" />
          <p className='pt-3 pb-9'>Your Cart is Empty!</p>
        </div>
      ) : (
        <div className="mx-auto container space-y-3">
          {carts.map(item => (
            <div className="flex justify-between border p-2" key={item.id}>
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    className="h-10 w-10 object-contain"
                    src={item.icon}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl ">{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </div>
              <button onClick={()=>handleRemove(item)} className="text-red-600 text-center">Remove</button>
            </div>
          ))}
          <div className="flex justify-between">
            <div className="text-gray-400 mt-1">Total:</div>
            <div className="font-bold text-2xl">${totalPrice}</div>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full text-2xl text-white rounded-full mt-5 bg-gradient-to-r from-purple-600 to-blue-600"
          > Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;