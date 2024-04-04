import { createSlice } from '@reduxjs/toolkit';

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
            localStorage.setItem("email", action.payload.email);
          },
          setPasswordNew(state, action) {
            state.password = action.payload.password;
            localStorage.setItem("password", action.payload.password);
          },      
    },
});

export const { setUser, removeUser,setEmail, addItemToCourse, setPasswordNew } = userSlice.actions;

export const selectUsers = state => state.user;

export default userSlice.reducer;