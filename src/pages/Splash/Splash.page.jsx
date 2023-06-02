import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Splash = () => {
  const slide = useRef(null);
  const tag = useRef(null);
  const navigate = useNavigate();

  const changeRoute = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000); // wait for 3 seconds
  };

  useEffect(() => {
    // changeRoute();
  }, []);
  useEffect(() => {}, []);
  return (
    <div className="grid h-screen  w-full place-items-center overflow-hidden">
      <div
        ref={slide}
        className="grid h-screen w-full place-items-center bg-white"
      >
        <div ref={tag} className="flex w-10/12 items-center justify-center">
          <h1 className="font-display  text-6xl">Level Up|</h1>
          <img src={logo} className="h-16" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
