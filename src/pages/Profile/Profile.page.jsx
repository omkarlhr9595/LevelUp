import React, { useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
const Profile = () => {
  useEffect(() => {
    document.title = "Level Up | Profile";
  }, []);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#242424]">
      <img
        src={reactLogo}
        className="h-40 p-6 transition-[filter_300ms] hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt=""
      />
      <h1 className="text-4xl text-white">Level Up | Profile</h1>
      <h2 className="text-l mt-4 text-white">
        The One Place For All Your Requirement 🔥
      </h2>
      <Link to="/" className="text-l mt-4 text-white">
        Home
      </Link>
    </div>
  );
};

export default Profile;
