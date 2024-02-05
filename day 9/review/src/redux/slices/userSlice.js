/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: 0,
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    functionLogin: (state, action) => {
      console.log("hello");
      console.log(action.payload, "cek");
      return {
        ...state,
        ...action.payload,
      };
    },
    functionLogout: (state) => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const { functionLogin, functionLogout } = userSlice.actions;
export default userSlice.reducer;
