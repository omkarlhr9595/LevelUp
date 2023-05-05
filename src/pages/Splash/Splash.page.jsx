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
    changeRoute();
  }, []);
  useEffect(() => {
    let t = gsap.timeline();
    t.fromTo(
      slide.current,
      {
        y: "30%",
        duration: 1.5,
        ease: "power3.out",
      },
      {
        y: "0%",
        duration: 1.5,
        ease: "ease",
      }
    ).to(tag.current, {
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div className="h-screen w-full bg-[#fff] grid place-items-center overflow-hidden">
      <div
        ref={slide}
        className="h-screen w-full bg-[#f1e0c5] grid place-items-center"
      >
        <div ref={tag} className="w-10/12 flex items-center justify-center">
          <h1 className="text-6xl text-black font-display">Level Up|</h1>
          <img src={logo} className="h-16" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
