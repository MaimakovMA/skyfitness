import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from 'store/slices/userSlice.js';
import { useDispatch } from 'react-redux';

export const UserLoggedIn = () => {

    const [isLoading, setisLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect (() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser({ email: user.email, id: user.uid, password: user.password }));
        } else {
          dispatch(removeUser());
        }
        if (isLoading) { setisLoading(false) };
    });
    },[])}