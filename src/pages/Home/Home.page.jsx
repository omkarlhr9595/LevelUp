import React, { useEffect, useRef } from "react";
import { Navbar, Button } from "flowbite-react";
import { useMatch } from "react-router-dom";
import { gsap } from "gsap";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/freelancer.state";
import people1 from "../../assets/people1.svg";
import people2 from "../../assets/people2.svg";
import logo from "../../assets/logo-text-black.png";
const Home = () => {
  const tag = useRef(null);
  const button = useRef(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const t1 = gsap.timeline();
  //   t1.fromTo(
  //     tag.current,
  //     {
  //       y: 100,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.05,
  //       duration: 2,
  //       ease: "power4.out",
  //     }
  //   ).fromTo(
  //     button.current,
  //     {
  //       y: 100,
  //     },
  //     { y: 0, duration: 2, ease: "bounce" }
  //   );
  // }, []);
  const dispatch = useDispatch();
  const isFreelancerAuth = Boolean(
    useSelector((state) => state.freelancer.token)
  );
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="h-40 sm:h-60 border-b-2 border-b-black flex items-center justify-center">
          <img src={logo} className="sm:h-[90%]" alt="" />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row">
          <div className="flex items-center justify-evenly h-1/2 w-full sm:h-full  bg-fuchsia border-b-2 border-b-black sm:border-r-2 sm:border-r-black">
            <img src={people1} className="w-1/2 self-end" alt="" />
            <button
              onClick={() => {
                navigate("/freelancer");
              }}
              className="custom-button bg-secondary"
            >
              I AM A FREELANCER
            </button>
          </div>
          <div className="flex items-center justify-evenly h-1/2 w-full sm:h-full bg-secondary  border-b-2 border-b-black">
            <button
              onClick={() => {
                navigate("/client");
              }}
              className="custom-button "
            >
              I AM A CLIENT
            </button>
            <img src={people2} className="w-1/2 self-end" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const jsx = () => {
  return (
    <div className="w-full border-b-2  border-b-black bg-secondary h-96 flex items-end justify-evenly">
      <img src={people1} className="" alt="" />
      <div className="h-full flex flex-col items-center justify-evenly">
        <h1
          ref={tag}
          className="self-center font-display text-4xl ml-10 sm:text-6xl leading-tight sm:ml-10"
        >
          "Streamline Your <br /> Freelancing Business <br />
          with Level Up"
        </h1>
        <div className="w-full flex justify-around items-center">
          <button
            onClick={() => {
              navigate("/freelancer");
            }}
            className="custom-button self-center"
          >
            I AM A FREELANCER
          </button>
          <button
            onClick={() => {
              navigate("/client");
            }}
            className="custom-button self-center"
          >
            I AM A CLIENT
          </button>
        </div>
      </div>
      <img src={people2} className="" alt="" />
    </div>
  );
};
