import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Example from "../components/Navbar";
import Dashboard from "../pages/UserViews/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Example />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
