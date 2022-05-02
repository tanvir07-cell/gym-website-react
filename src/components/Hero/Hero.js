import React from "react";

import bgImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-black/40 to-black/20 w-full h-screen  relative flex items-center justify-center">
      <img
        src={bgImg}
        alt=""
        className="w-full h-screen object-cover absolute mix-blend-overlay"
      />
      <div className="text-white text-center ">
        <h1 className="text-6xl font-mono font-extrabold">
          Learning Code EveryDay
        </h1>
        <p className="mt-5 font-semibold tracking-widest text-xl ">
          Passion and Passion Makes a man see their's vission
        </p>
      </div>
    </div>
  );
};

export default Hero;
