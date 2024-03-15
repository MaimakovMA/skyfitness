import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import coursesSlice from './slices/coursesSlice.js';

export const store = configureStore({
    reducer: {
      user: userSlice,
      coursesApp: coursesSlice,
    }
});