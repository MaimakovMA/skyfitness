import { createSlice } from '@reduxjs/toolkit';
//import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

const initialState = {
    email: null,
    token: null,
    id: null,
    currentUser: [],
    course: [],
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
        addItemToCourse: (state, action) => {
           let newCourse = [...state.course ];
           const found = state.course.find(({id}) => id === playload.id)
           if(found) {
            newCourse = newCourse.map((item) => {
              return item.id === playload.id ?  (navigate('/profile')) : item;
           }); 
           } else  newCourse.push({pleyload, quantity: 1});
           state.course = newCourse;
        },
    },
});

export const { setUser, removeUser, addItemToCourse } = userSlice.actions;

export default userSlice.reducer;