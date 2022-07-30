import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    try {
      console.log(email, password);

      const resp = await calendarApi.post("/auth", {
        email: email,
        password: password,
      });

      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //props
    status,
    user,
    errorMessage,
    //methods
    startLogin,
  };
};
