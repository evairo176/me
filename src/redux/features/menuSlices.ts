import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuState = {
  isOpen: boolean;
  isOpenMenuDashboard: boolean;
};

const initialState = {
  isOpen: false,
  isOpenMenuDashboard: false,
} as MenuState;

export const menu = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleDashboard: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenuDashboard = action.payload;
    },
  },
});

export const { toggleMenu, toggleDashboard } = menu.actions;
export default menu.reducer;
