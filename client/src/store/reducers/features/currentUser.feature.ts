import { createSlice } from "@reduxjs/toolkit";
import { currentUserTypes } from "../../../Pages/SignIn/SignIn.types";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {} as currentUserTypes,
  reducers: {
    setCurrentUserReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentUserReducer } = currentUserSlice.actions;
export default currentUserSlice.reducer;
