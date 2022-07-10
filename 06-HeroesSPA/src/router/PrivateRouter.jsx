import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/authcontext";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lassPath = pathname + search;
  localStorage.setItem("lastPath", lassPath);

  return logged ? children : <Navigate to="/login" />;
};
