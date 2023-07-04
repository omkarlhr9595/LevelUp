import logo from "../../assets/logo-text-white.png";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/client.state";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import FreelancerContent from "./Freelancer.Content";
import JobForm from "./Job.Form";
import Jobs from "./Client.jobs";
const ClientHome = () => {
  const fname = useSelector((state) => state.client.data.firstName);
  const lname = useSelector((state) => state.client.data.lastName);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen w-full  bg-gblack">
      <div className="flex min-h-screen w-full flex-col">
        <div className="w-full flex-grow">
          <Navbar />
        </div>
        <div className="flex h-[85vh] w-full  bg-gblack px-2">
          <div className="h-full w-2/4 overflow-auto px-2">
            <JobForm />
            <Jobs />
          </div>
          <div className="h-full w-[60%] overflow-auto px-2">
            <FreelancerContent />
          </div>
        </div>
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

export default ClientHome;
