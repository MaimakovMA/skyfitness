import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "axios";
const BASE_URL = "https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/";

export const getCorses = createAsyncThunk(
  "courses/getCorses",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/courses.json`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const corsesSlice = createSlice({
  name: "courses",
  initialState: {
    coursesList: [],
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCorses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCorses.fulfilled, (state, action) => {
      state.coursesList =  Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key]}));
      state.isLoading = false;
    });
    builder.addCase(getCorses.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default corsesSlice.reducer;