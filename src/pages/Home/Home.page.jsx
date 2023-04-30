import React, { useEffect, useRef } from "react";
import reactLogo from "../../assets/react.svg";
import logo from "../../assets/LevelUp-logos_white.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    document.title = "Level Up | Home";
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(ref.current, { scale: 1.1, duration: 0.5 }).to(ref.current, {
      scale: 1,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="h-screen w-full bg-[#242424] flex flex-col justify-center items-center">
      <img
        ref={ref}
        src={logo}
        className="h-96 p-0  transition-[filter_300ms] hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt=""
      />
      {/* <h1 className="text-4xl text-white">One Place For All Your Gigs</h1> */}
    </div>
  );
};

export default Home;
