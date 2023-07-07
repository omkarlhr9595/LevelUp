import { Navigate, Routes, Route, HashRouter } from "react-router-dom";
import { Home, FreelancerAuth, ClientAuth } from "./pages";
import { useSelector } from "react-redux";
import FreelancerHome from "./pages/Freelancer/Freelancer.home";
import ClientHome from "./pages/Client/Client.home";
// import dotenv from "dotenv";
// require("dotenv").config();
const App = () => {
  // dotenv.config();
  const isFreelancerAuth = Boolean(
    useSelector((state) => state.freelancer.token)
  );
  const isClientAuth = Boolean(useSelector((state) => state.client.token));

  return (
    <div className="h-full">
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/AuthFreelancer" element={<FreelancerAuth />} />
          <Route path="/AuthClient" element={<ClientAuth />} />
          <Route
            path="/freelancer"
            element={
              isFreelancerAuth ? (
                <FreelancerHome />
              ) : (
                <Navigate to="/AuthFreelancer" replace={true} />
              )
            }
          />
          <Route
            path="/client"
            element={
              isClientAuth ? (
                <ClientHome />
              ) : (
                <Navigate to="/AuthClient" replace={true} />
              )
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

const Home1 = () => {
  return <h1>hello</h1>;
};

export default App;
