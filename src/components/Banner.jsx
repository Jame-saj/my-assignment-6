import React from 'react';
import bannerImg from "../assets/products/banner.png"
import play from "../assets/products/Play.png"

const Banner = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex py-20 items-center justify-between">
        <div className="right space-y-4">
          <div className="inline-flex gap-1 bg-blue-100 p-1 rounded-full items-center mb-3.5">
            <span className="loading bg-blue-500 loading-ring loading-xs"></span>
            <p className="bg-gradient-to-r from-purple-800 to-blue-500 bg-clip-text text-[20px] p-1 text-transparent">
              New: AI Powered Tools Available
            </p>
          </div>
          <p className="text-6xl space-y-1 font-bold">
            Supercharge Your <br />
            <span className='className=" text-6xl font-extrabold bg-gradient-to-r from-purple-800 to-blue-500 mt-1  bg-clip-text text-transparent'>
              {' '}
              Digital Workflow
            </span>
          </p>
          <p className="font-light">
            Access premium AI tools, design assets, templates, and productivity{' '}
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>
          <div className="flex gap-1.5 ">
            <button className="btn btn-primary rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              Explore Products
            </button>
            <button className="btn rounded-full btn-outline bg-none btn-primary">
              <img src={play} alt="" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="left flex justify-end">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;