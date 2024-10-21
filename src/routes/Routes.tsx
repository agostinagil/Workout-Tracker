import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Example from "../components/Navbar";
import Dashboard from "../pages/UserViews/Dashboard/Dashboard";
import Workout from "../pages/UserViews/WorkoutView/Workout";
import TrackingView from "../pages/UserViews/TrackingView/TrackingView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Example />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/tracking" element={<TrackingView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
