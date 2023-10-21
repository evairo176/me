import { UserInterface } from "@/types/user-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: UserInterface;
};

const initialState = {
  user: {},
} as UserState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setUserRedux: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserRedux } = user.actions;
export default user.reducer;
