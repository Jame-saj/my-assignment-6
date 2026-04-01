import React from 'react';

const Workflow = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 pt-28 pb-28 flex text-center ">
        <div className="mx-auto">
          <h1 className="text-white text-4xl font-extrabold mb-3.5">
            Ready To Transform Your Workflow?
          </h1>
          <p className="text-white mb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
          <div className="flex gap-4 justify-center mb-4">
            <button className="btn rounded-full bg-white btn-active btn-warning p-4">
              Explore Products
            </button>
            <button className="btn btn-outline border-white rounded-full text-white btn-primary p-4">
              View Pricing
            </button>
          </div>
          <p className="text-white">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;