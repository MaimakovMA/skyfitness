import { createSlice } from '@reduxjs/toolkit';
//import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

const initialState = {
    email: null,
    token: null,
    id: null,
    currentUser: [],
    courses: [],
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        setUser (state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        addItemToCourse: (state, { payload }) => {
           let newCourse = [...state.courses ];
           const found = state.courses.find(({id}) => id === payload.id)
           if(found) {
            newCourse = newCourse.map((item) => {
              return item.id === payload.id ?  { ...item, quantity: payload.quantity || item.quantity + 1 } : item;
           }); 
           } else  newCourse.push({...payload, quantity: 1});
           state.courses = newCourse;
        },
    },
});

export const { setUser, removeUser, addItemToCourse } = userSlice.actions;

export default userSlice.reducer;