import React from 'react';
import userImg from '../../assets/products/user.png'
import productImg from "../../assets/products/package.png"
import rocketImg from "../../assets/products/rocket.png"

const ThreeSteps = () => {
  return (
    <div className="container mx-auto pt-28">
      <div className="text-center">
        <h1 className="font-bold text-3xl pb-3">Get Started In 3 Steps</h1>
        <p className="font-light">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid bg-[#ffffffFF] grid-cols-3 gap-2 pt-5 ">
        <div className="bg-white text-center p-6 relative items-center border">
          <div className="absolute top-2 right-3">01</div>
          <div>
            <img src={userImg} alt="" className="mx-auto" />
            <h1 className="font-bold text-[20px]">Create Account</h1>
            <p className="font-light">
              Sign up for free in seconds. No credit card <br />
              required to get started.
            </p>
          </div>
        </div>
        <div className="bg-white text-center relative items-center p-6 border">
          <div className="absolute top-2 right-3">02</div>
          <div>
            <img src={productImg} alt="" className="mx-auto" />
            <h1 className="font-bold text-[20px]">Choose Products</h1>
            <p className="font-light">
              Browse our catalog and select the tools <br /> that fit your
              needs.
            </p>
          </div>
        </div>
        <div className="bg-white text-center p-6 relative items-center border">
          <div className="absolute top-2 right-3">03</div>
          <div>
            <img src={rocketImg} alt="" className="mx-auto" />
            <h1 className="font-bold text-[20px]">Start Creating</h1>
            <p className="font-light">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;