import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as MenuState;

export const menu = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleMenu } = menu.actions;
export default menu.reducer;
