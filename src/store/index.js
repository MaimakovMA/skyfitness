import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice.js";
import corsesSlice from './slices/coursesSlice.js';
import { apiSlice } from "./slices/apiSlice.js";
import workoutsSlice from './slices/coursesSlice.js';

export const store = configureStore({
    reducer: {
      user: useReducer,
      courses: corsesSlice,
      workouts: workoutsSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});