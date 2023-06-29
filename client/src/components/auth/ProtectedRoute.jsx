import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authState = sessionStorage.getItem("loged");
  if (!authState) return <Navigate to={"/auth/login"} replace />;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
