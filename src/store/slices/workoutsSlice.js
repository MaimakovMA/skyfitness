import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "axios";
const BASE_URL = "https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/";

export const getWorkouts = createAsyncThunk(
  "workouts/getWorkouts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/workouts.json`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workoutsList: [],
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getWorkouts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWorkouts.fulfilled, (state, action) => {
      state.workoutsList =  Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key]}));
      state.isLoading = false;
    });
    builder.addCase(getWorkouts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default workoutsSlice.reducer;