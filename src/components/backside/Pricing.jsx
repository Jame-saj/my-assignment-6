import React from 'react';
import whiteCheck from "../../assets/products/Check.png"
import greenCheck from "../../assets/products/Check (1).png"
const Pricing = () => {
  return (
    <div className="container mx-auto pt-20 pb-20">
      <div className="text-center">
        <h1 className="font-extrabold text-3xl pb-3">
          Simple, Transparent Pricing
        </h1>
        <p className="font-light text-[#627382FF]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 items-stretch mt-7">
        {/* 1st */}
        <div className="bg-white px-6 py-6 space-y-6 rounded-2xl flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-[20px]">Starter</h1>
            <p className="text-[#627382FF]">Perfect for getting started</p>
          </div>
          <h1 className="text-[#627382FF]">
            <span className="font-extrabold text-3xl text-black ">$0</span>
            /Month
          </h1>
          <div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className=" text-[#627382FF]"> Access to 10 free tools</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Basic templates</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Community support</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">1 project per month</p>
            </div>
          </div>
          <button className="btn btn-primary w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            Get Started Free
          </button>
        </div>
        {/* 2nd */}
        <div className=" relative bg-gradient-to-r from-purple-700 to-blue-600 px-6 py-6 space-y-6 rounded-2xl flex flex-col justify-between h-full">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fef3c6FF] text-[#bb4d00FF] px-4 py-1 text-sm font-semibold rounded-full shadow">
            Most Popular
          </div>
          <div className="space-y-3 pb-3 rounded-2xl">
            <div>
              <h1 className="font-extrabold text-white text-2xl">Pro</h1>
              <p className="text-light text-white">Best for professionals</p>
            </div>

            <h1 className="text-white">
              <span className="font-extrabold text-3xl text-white ">$29</span>
              /Month
            </h1>

            <div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white"> Access to all premium tools</p>
              </div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white">Unlimited templates</p>
              </div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white"> Priority support</p>
              </div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white">Unlimited projects</p>
              </div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white"> Cloud sync</p>
              </div>
              <div className="flex gap-2  ">
                <img src={greenCheck} alt="" />
                <p className="text-white">Advanced analytics</p>
              </div>
            </div>
            <button className="btn btn-primary w-full rounded-full bg-white text-[purple] text-2xl mt-6">
              Start Pro Trial
            </button>
          </div>
        </div>

        {/* 3rd */}
        <div className="bg-white px-6 py-6 space-y-6 rounded-2xl flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-[20px]">Enterprise</h1>
            <p className="text-[#627382FF]">For teams and businesses</p>
          </div>
          <h1 className="text-[#627382FF]">
            <span className="font-extrabold text-3xl text-black ">$99</span>
            /Month
          </h1>

          <div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]"> Everything in Pro</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Team collaboration</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Custom integrations</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Dedicated support</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">SLA guarantee</p>
            </div>
            <div className="flex gap-2  ">
              <img src={whiteCheck} alt="" />
              <p className="text-[#627382FF]">Custom branding</p>
            </div>
          </div>
          <button className="btn btn-primary w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;