import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { ReactNode, useEffect } from "react";

interface RouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: RouteProps) => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
