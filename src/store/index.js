import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice.js";
import coursesReducer from './slices/coursesSlice.js';

export const store = configureStore({
    reducer: {
      user: useReducer,
      coursesApp: coursesReducer,
    }
});