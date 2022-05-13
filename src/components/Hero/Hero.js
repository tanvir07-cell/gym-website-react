import React from "react";
import "./Hero.css";

import bgImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div className="bg-hero w-full h-screen flex items-center justify-center bg-cover bg-center bg-hero--css">
      <div className="text-white text-center    ">
        <h1 className="text-6xl font-mono font-extrabold">
          Going Gym <span className="text-grad">Everyday</span>
        </h1>
        <p className="mt-5 font-semibold tracking-widest text-xl ">
          Passion and Passion Makes a man see their's vission
        </p>
      </div>
    </div>
  );
};

export default Hero;
