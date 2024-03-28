import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/";

export const apiSlice = createApi({
  reducerPath: "firebase",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   tagTypes: ["courses"],
   endpoints: (builder) => ({
    getCorses: builder.query({
      query: ({ id }) => `/courses/${id}.json`,
      providesTags: ["courses"],
    }),
    tagTypes: ["workouts"],
   endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: ({ id }) => `/workouts/${id}.json`,
      providesTags: ["workouts"],
    }),
  }),
    }),
  })
 
export const { useGetCorsesQuery, useGetWorkoutsQuery } = apiSlice;