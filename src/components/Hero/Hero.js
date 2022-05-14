import React from "react";
import "./Hero.css";

import Tanvir from "../../images/Tanvir.png";
import Arafat from "../../images/Arafat.png";
import bgImg from "../assets/hero-img.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-hero">
      <div className=" w-full h-screen flex items-center justify-center bg-cover bg-center ">
        <div className="text-white text-center    ">
          <h1 className="text-6xl font-mono font-extrabold">
            Going Gym <span className="text-grad">Everyday</span>
          </h1>
          <p className="mt-5 font-semibold tracking-widest text-xl ">
            Passion and Passion Makes a man see their's vission
          </p>
        </div>
      </div>

      <div className="services-container">
        <h1 className="services-title">Services</h1>
        <div className="services">
          <div className="services-card">
            <img src={Tanvir} alt="" />
            <div className="services-description">
              <h1 className="text-red-800 font-mono font-semibold text-xl">
                Sinha Rashed
              </h1>
              <p className="services-price text-red-800 font-mono font-semibold ">
                Price : ${1230}
              </p>
              <button
                className="services-btn"
                onClick={() => navigate("/checkout")}
              >
                <span className="services-title">Hire Tranier</span>
              </button>
            </div>
          </div>
          <div className="services-card">
            <img src={Arafat} alt="" />
            <div className="services-description">
              <h1 className="text-red-800 font-mono font-semibold text-xl">
                Arafat Riman
              </h1>
              <p className="services-price text-red-800 font-mono font-semibold ">
                Price : ${1030}
              </p>
              <button
                className="services-btn"
                onClick={() => navigate("/checkout")}
              >
                <span className="services-title">Hire Tranier</span>
              </button>
            </div>
          </div>
          <div className="services-card">
            <img src={Tanvir} alt="" />
            <div className="services-description">
              <h1 className="text-red-800 font-mono font-semibold text-xl">
                Tanvir Rifat
              </h1>
              <p className="services-price text-red-800 font-mono font-semibold ">
                Price : ${1230}
              </p>
              <button
                className="services-btn"
                onClick={() => navigate("/checkout")}
              >
                <span className="services-title">Hire Tranier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
