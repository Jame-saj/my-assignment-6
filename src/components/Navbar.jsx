import React from 'react';
import cartImg from "../assets/products/shopping-cart.png"

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="container mx-auto navbar p-6 items-center">
        <div className="navbar-start">
          <a className=" text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-blue-500  bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu text-black menu-horizontal font-medium px-1">
            <li>
              <a>Products</a>
            </li>

            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>

            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <img src={cartImg} alt="" />
          <button className="text-[16px]">Login</button>
          <button class="btn btn-primary rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;