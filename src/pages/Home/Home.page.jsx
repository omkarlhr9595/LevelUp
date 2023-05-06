import React, { useEffect, useRef } from "react";
import img1 from "../../assets/img1.svg";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
const Home = () => {
  const container = useRef(null);
  const img = useRef(null);
  const links = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.set(container.current, { autoAlpha: 1 });
    t1.from(container.current, {
      xPercent: -100,
      ease: "Power2.out",
      duration: 1.5,
    });
    t1.from(img.current, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: "Power2.out",
      duration: 1.5,
    });
  }, []);
  return (
    <div className="h-screen w-full bg-white]">
      <nav class="container flex justify-between px-4 py-8 mx-auto">
        <div>
          <h3 class="text-2xl font-medium ">Level Up</h3>
        </div>
        <div class="hidden space-x-8 lg:flex">
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
        </div>
        <div class="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Home;
