import React from 'react';

const Rating = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="container mx-auto items-center flex justify-around p-4 mb-5">
        <div className="">
          <h1 className="font-extrabold text-white text-5xl">50k+</h1>
          <p className="text-white">Active Users</p>
        </div>
        <p className="text-white">|</p>
        <div>
          <h1 className="font-extrabold text-white text-5xl">200+</h1>
          <p className="text-white">Premium Tools</p>
        </div>
        <p className="text-white">|</p>
        <div>
          <h1 className="font-extrabold text-white text-5xl">4.9</h1>
          <p className="text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;