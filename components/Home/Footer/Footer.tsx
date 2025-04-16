import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-8 pb-6 bg-[#0F1A38]"> {/* Reduced padding */}
      <div>
        <Image 
          src="/images/logo.png" 
          alt="logo" 
          width={140} // Reduced size
          height={140}
          className="mx-auto"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white font-semibold mt-4 text-sm">
        {/* Changed to use gap for better spacing control, and smaller text */}
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Reviews</div>
        <div>Contact</div>
      </div>

      <p className="text-white text-opacity-60 mt-4 text-center text-xs">
        © 2025 Sharon Koech. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
