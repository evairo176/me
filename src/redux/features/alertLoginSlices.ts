import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  isAlert: boolean;
};

const initialState = {
  isAlert: false,
} as MenuState;

export const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    reset: () => initialState,
    alertLogin: (state, action: PayloadAction<boolean>) => {
      state.isAlert = action.payload;
    },
  },
});

export const { alertLogin } = alert.actions;
export default alert.reducer;
