import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/UserViews/Dashboard/Dashboard";
import Workout from "../pages/UserViews/WorkoutView/Workout";
import TrackingView from "../pages/UserViews/TrackingView/TrackingView";
import SingleTracking from "../pages/UserViews/TrackingView/SingleTracking";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ErrorView from "../pages/ErrorView";
import Profile from "../pages/UserViews/Profile/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/workout/:id"
            element={
              <PrivateRoute>
                <Workout />
              </PrivateRoute>
            }
          />
          <Route
            path="/tracking"
            element={
              <PrivateRoute>
                <TrackingView />
              </PrivateRoute>
            }
          />
          <Route
            path="/tracking/:id"
            element={
              <PrivateRoute>
                <SingleTracking />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/error" element={<ErrorView />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
