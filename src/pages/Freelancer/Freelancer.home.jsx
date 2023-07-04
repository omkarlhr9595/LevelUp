import logo from "../../assets/logo-text-white.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/freelancer.state.js";
import { Navigate, useNavigate } from "react-router-dom";
import InformationForm from "./InformationForm";
import FreelancerProfile from "./Freelancer.Profile.jsx";
import FreelancerContent from "./Freelancer.Content";
import FreelancerJobs from "./Freelancer.Jobs";
import ContentForm from "./Content.Form";
import AuthNavbar from "../../components/AuthNavbar";
import axios from "axios";
import { useEffect } from "react";

const FreelancerHome = () => {
  const data = useSelector((state) => state.freelancer.data);
  const information = useSelector((state) => state.freelancer.information);
  const freelancerData = {
    fname: data.firstName,
    lname: data.lastName,
    state: data.state,
    email: data.email,
    profilePhoto: information.profilePhoto,
    skills: information.skills,
    budget: information.budget,
    headline: information.headline,
    scope: information.scope,
  };

  const { fname, lname } = freelancerData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen w-full  bg-gblack">
        {information ? (
          <div className="flex min-h-screen w-full flex-col">
            <div className="w-full flex-grow">
              <Navbar />
            </div>
            <div className="flex h-[85vh] w-full bg-gblack">
              <div className="h-full w-1/5 px-2">
                <FreelancerProfile data={freelancerData} />
              </div>
              <div className="h-full w-[60%] overflow-auto px-2">
                <ContentForm />
                <FreelancerContent />
              </div>
              <div className="h-full w-1/5 px-2 overflow-auto">
                <FreelancerJobs />
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <LogoDiv />
            <div className="single-child-center  h-24 w-full bg-secondary">
              <h1 className="font-lable text-3xl">
                WELCOME {fname.toUpperCase()} {lname.toUpperCase()}
              </h1>
            </div>
            <div className="single-child-center w-full">
              <InformationForm />
            </div>
            <div className="single-child-center h-24 w-full">
              <button
                className="custom-button"
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FreelancerHome;

const LogoDiv = () => {
  const navigate = useNavigate();
  return (
    <div className=" z-10 flex h-24 w-full items-center justify-evenly border-b-2 border-b-black bg-gblack">
      <div className="z-10">
        <img
          src={logo}
          className="z-10 h-16"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex h-24 w-full flex-col items-center justify-evenly border-b-2 border-b-white bg-gblack sm:flex-row">
        <div className="">
          <img src={logo} className="h-16" alt="" />
        </div>
        <div className="hidden flex-grow justify-end sm:flex">
          <button
            onClick={() => {
              navigate("/", { replace: true });
            }}
            className="custom-button-white mr-10"
          >
            Home
          </button>
          <button
            onClick={() => {
              dispatch(setLogout());
            }}
            className="custom-button-white mr-10"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex h-20 items-center justify-evenly bg-gblack sm:hidden">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="custom-button-white mr-10"
        >
          Home
        </button>
        <button
          onClick={() => {
            dispatch(setLogout());
          }}
          className="custom-button-white mr-10"
        >
          Logout
        </button>
      </div>
    </>
  );
};
