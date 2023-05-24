import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Home, Auth, Register } from "./pages";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="h-full">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
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
