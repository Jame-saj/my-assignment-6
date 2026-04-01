import React from 'react';
import InstaImg from "../../assets/products/Instagram.png"

import FbImg from '../../assets/products/Facebook.png';
import TwiImg from '../../assets/products/Twitter.png';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#101727FF] ">
        <div className="pt-16 md:pt-28 pb-10 md:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-20 lg:px-48">
          <div className="text-white space-y-4 text-center sm:text-left">
            <h1 className="font-bold text-4xl">DigiTools</h1>
            <p className="text-gray-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="text-gray-300 space-y-5">
            <h className="text-xl font-bold text-white">Product</h>
            <p className="mt-3">Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>

          <div className="text-gray-300 space-y-5">
            <h1 className="text-xl font-bold text-white">Company</h1>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div className="text-gray-300 space-y-5">
            <h1 className="text-xl font-bold text-white">Resources</h1>
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>

          <div className="text-white space-y-5">
            <h1 className="text-xl font-bold text-white">Social Links</h1>
            <div className="flex gap-3">
              <img src={InstaImg} alt="" />
              <img src={FbImg} alt="" />
              <img src={TwiImg} alt="" />
            </div>
          </div>
        </div>

        <div className="">
          <hr className="text-gray-300 container mx-auto" />
          <div className="text-gray-200 mt-8 pb-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mx-auto container px-4 ">
            <div>© 2026 Digitools. All rights reserved.</div>
            <div className="flex gap-5">
              <p>Privacy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;