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
    <div className="h-screen w-full bg-[#f1e0c5]">
      <div className="w-full h-28 grid place-items-center">
        <div
          ref={links}
          className="w-[90%] h-[80%] bg-[#342a21] rounded-xl flex justify-evenly items-center"
        >
          <Link to="/">
            <h1 className="font-bold text-white">Home</h1>
          </Link>
          <Link to="/">
            <h1 className="font-bold text-white">Profile</h1>
          </Link>
          <Link to="login">
            <h1 className="font-bold text-white">Login</h1>
          </Link>
          <Link to="/">
            <h1 className="font-bold text-white">Register</h1>
          </Link>
        </div>
      </div>
      <div className="grid mt-4 place-items-center">
        <div
          ref={container}
          className="w-[90%] aspect-square grid place-items-center overflow-hidden relative invisible"
        >
          <img
            ref={img}
            src={img1}
            alt=""
            className="origin-left h-[80%] bg-[#342a21]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
