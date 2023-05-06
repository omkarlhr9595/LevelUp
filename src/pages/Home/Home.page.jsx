import React, { useEffect, useRef } from "react";
import img1 from "../../assets/img1.svg";
import logo from "../../assets/logo.png";
import { Navbar, Button } from "flowbite-react";
import { useMatch } from "react-router-dom";
import { gsap } from "gsap";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const tag = useRef(null);
  const button = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(
      tag.current,
      {
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    ).fromTo(
      button.current,
      {
        y: 100,
      },
      { y: 0, duration: 2, ease: "bounce" }
    );
  }, []);
  return (
    <div className="w-full bg-white border-y-black border border-y-2">
      <div className="bg-secondary w-full sm:h-96 aspect-video flex items-start flex-col justify-evenly  overflow-hidden">
        <h1
          ref={tag}
          className="font-display text-4xl ml-10 sm:text-6xl leading-tight sm:ml-10"
        >
          "Streamline Your <br /> Freelancing Business <br />
          with Level Up"
        </h1>
        <div>
          <Button
            ref={button}
            onClick={() => {
              navigate("register");
            }}
            className="ml-10"
            color="dark"
            pill={true}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
