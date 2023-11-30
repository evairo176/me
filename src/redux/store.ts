import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlices";
import menuReducer from "./features/menuSlices";
import UserReducer from "./features/userSlices";
import alertReducer from "./features/alertLoginSlices";

export const store = configureStore({
  reducer: {
    counterReducer,
    menuReducer,
    UserReducer,
    alertReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
