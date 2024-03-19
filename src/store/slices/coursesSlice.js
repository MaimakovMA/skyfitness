import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    allCourses: null,
    allWorkouts: null,
  },
  reducers: {
    setAllCourses(state, action) {
      state.allCourses = action.payload;
    },
    setAllWorkouts(state, action) {
      state.allWorkouts = action.payload;
    },

    setUsersCourses(state, action) {
      state.usersCourses = action.payload;
    },
    setCurrentWorkout(state, action) {
      console.log(action.payload);
      state.currentWorkout = action.payload;
    },
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },
    setWorkoutList: (state, action) => {
      state.workoutList = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key]
      }));
    },
  },
});

export const { setAllCourses, setAllWorkouts, setUsersCourses, setCurrentWorkout, setCurrentCourse, setWorkoutList } = coursesSlice.actions;

export default coursesSlice.reducer;