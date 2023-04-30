import { Routes, Route } from "react-router-dom";
import { Home, Profile } from "../../pages";

const HomeRoute = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<Home />} />
  </Routes>;
};

export default HomeRoute;
