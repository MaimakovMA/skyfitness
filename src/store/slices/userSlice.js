import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
    password: null,
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
        setEmail: (state, action) => {
            state.email = action.payload.email;
          },

          setPassword(state, action) {
            state.password = action.payload.password;
          },
      
    },
});

export const { setUser, removeUser, setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;