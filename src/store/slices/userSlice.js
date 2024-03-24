import { createSlice } from '@reduxjs/toolkit';
import { getDatabase, onValue, ref, set } from "firebase/database";

export async function addCourseUser(userId, courseId) {
    const db = getDatabase();

    //const response = await db.ref(`/courses/${courseId}/users`).set(userId)
   
 set(ref(db, 'courses/'), {
            userId: userId,    
          }).then((response) => {
            debugger
            console.log(response)
        }).catch((error) => {
            debugger
console.log(error)
        }) 
        }

  /*var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});*/

const initialState = {
    email: null,
    token: null,
    id: null,
    password: null,
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

export const { setUser, removeUser,setEmail, addItemToCourse } = userSlice.actions;

export default userSlice.reducer;