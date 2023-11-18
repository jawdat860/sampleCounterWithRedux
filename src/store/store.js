import { configureStore } from "@reduxjs/toolkit";
import counter from "./feature/counterSlice"
export const store = configureStore({
  reducer:{
    counter:counter
  }
});
