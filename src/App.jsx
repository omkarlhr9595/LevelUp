import { Route, Routes } from "react-router-dom";
import { Home, Profile, Login, Splash } from "./pages";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Splash />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
