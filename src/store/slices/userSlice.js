import { createSlice } from '@reduxjs/toolkit';
import { getDatabase, ref, set } from "firebase/database";

export async function addCourse(userId) {
    const db = getDatabase();
    const response = await db.ref(`/courses/${course._id}/users`).set(userId)
  
    const newData = await response.json();
    
    return newData
  }

const initialState = {
    email: null,
    token: null,
    id: null,
    password: null,
    currentUser: null,
    course: [],
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        
        setUser (state, action) {
            state.currentUser = action.payload;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.password = action.payload.password;
            localStorage.setItem("email", state.email);
            localStorage.setItem("token", state.token);
            localStorage.setItem("id", state.id);
            localStorage.setItem("password", state.password);
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.password = null;
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("password");      
        },
        setEmail(state, action) {
            state.email = action.payload.email;
            localStorage.setItem("email", state.email);
          },
          setPassword(state, action) {
            state.password = action.payload.password;
            localStorage.setItem("password", state.password);
          },      
        addItemToCourse: (state, { payload }) => {
           let newCourse = [...state.course ];
           const found = state.course.find(({id}) => id === payload.id)
           if(found) {
            newCourse = newCourse.map((item) => {
              return item.id === payload.id ?  { ...item, quantity: payload.quantity || item.quantity + 0 } : item;
           }); 
           } else  newCourse.push({...payload, quantity: 1});
           state.course = newCourse;
        },
    },
});



export const { setUser, removeUser,setEmail, addItemToCourse, setPassword } = userSlice.actions;

export const selectUsers = state => state.user;

export default userSlice.reducer;