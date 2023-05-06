import React, { useEffect, useRef } from "react";
import img1 from "../../assets/img1.svg";
import logo from "../../assets/logo.png";
import { Navbar } from "flowbite-react";
import { useMatch } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {
  const tag = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(
      tag.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="w-full grid place-items-center">
        <div className="w-[98%] h-72 rounded-lg bg-primary grid place-items-center">
          <h1 ref={tag} className="text-white font-display text-4xl">
            "Streamline Your
            <br /> Freelancing Business
            <br /> with Level Up"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
