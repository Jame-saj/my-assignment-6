import React from 'react';
import userImg from '../../assets/products/user.png'
import productImg from "../../assets/products/package.png"
import rocketImg from "../../assets/products/rocket.png"

const ThreeSteps = () => {
  return (
    <div className="container mx-auto pt-28 pb-28">
      <div className="text-center">
        <h1 className="font-bold text-3xl pb-3">Get Started In 3 Steps</h1>
        <p className="font-light">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-7">
        <div className="text-center p-8 w-sm border-[ #f1f1f1FF] bg-[#ffffffFF] rounded-2xl relative items-center">
          <div className="absolute top-2 right-3 bg-purple-500 text-white w-7 h-7 rounded-2xl items-center ">
            01
          </div>
          <div className="space-y-3 mt-6 mb-6">
            <img
              src={userImg}
              alt=""
              className="mx-auto bg-purple-200 rounded-full "
            />
            <h1 className="font-bold text-[20px]">Create Account</h1>
            <p className="font-light">
              Sign up for free in seconds. No credit card <br />
              required to get started.
            </p>
          </div>
        </div>
        <div className="text-center p-8 max-w-sm border-[ #f1f1f1FF] bg-[#ffffffFF] rounded-2xl relative items-center">
          <div className="absolute top-2 right-3 bg-purple-500 text-white w-7 h-7 rounded-2xl items-center">
            02
          </div>
          <div className="space-y-3  mt-6 mb-6">
            <img
              src={productImg}
              alt=""
              className="mx-auto bg-purple-200 rounded-full"
            />
            <h1 className="font-bold text-[20px]">Choose Products</h1>
            <p className="font-light">
              Browse our catalog and select the tools <br /> that fit your
              needs.
            </p>
          </div>
        </div>
        <div className="text-center p-8 w-sm border-[ #f1f1f1FF] bg-[#ffffffFF] relative items-center  rounded-2xl">
          <div className="absolute top-2 right-3 bg-purple-500 text-white w-7 h-7 rounded-2xl items-center ">
            03
          </div>
          <div className="space-y-3  mt-6 mb-6">
            <img
              src={rocketImg}
              alt=""
              className="mx-auto bg-purple-200 rounded-full "
            />
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