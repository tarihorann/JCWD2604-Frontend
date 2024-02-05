/** @format */

import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axios";
import { functionLogin } from "../slices/userSlice";

export const userLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: { email, password },
      });

      if (res.data) {
        const { first_name } = res.data.result;

        alert("welcome " + first_name);
        // delete res.data[0]?.password;
        dispatch(functionLogin(res.data.result));

        localStorage.setItem("user", res.data.token);
        alert("user not found");
      }
      return;
    } catch (err) {
      localStorage.removeItem("auth");
      return err.message;
    }
  };
};
