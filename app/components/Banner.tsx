import React from 'react';

const Banner = () => {
  return (
    <div className="py-3 text-center text-sm bg-gradient-to-r from-[#4D167D] via-[#02122F] to-[#36176E] text-white">
      <div className="container mx-auto px-4">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Get your portfolio website built in 24 hours -{' '}
          </span>
          <a href="#" className="underline underline-offset-4">
            50% off for first 5 customers
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
