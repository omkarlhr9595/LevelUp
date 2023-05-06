import { Route, Router, Routes } from "react-router-dom";
import { Home, Profile, Login, Register } from "./pages";
import { NavbarComp } from "./components/Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const App = () => {
  return (
    <div className="">
      <NavbarComp />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/profile" index element={<Profile />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/register" index element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
