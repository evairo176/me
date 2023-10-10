import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlices";
import menuReducer from "./features/menuSlices";

export const store = configureStore({
  reducer: {
    counterReducer,
    menuReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
