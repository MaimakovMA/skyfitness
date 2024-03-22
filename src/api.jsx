import { getDatabase, ref, set } from "firebase/database";
const BASE_URL = "https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/";

//Запрос на все курсы
export async function getAllCourses() {
    const response = await fetch(BASE_URL + "/courses.json", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const newData = await response.json();
  
    return newData;
  }

  //Запрос на все тренировки
  export async function getAllWorkouts() {
    const response = await fetch(BASE_URL + "/workouts.json", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const newData = await response.json();
  
    return newData;
  }

  //import { getDatabase, ref, set } from "firebase/database";

  export async function addCourse(userId, courseId) {
  const db = getDatabase();
  const response = await db.ref(`/courses/${courseId}/users`).set(userId)

  const newData = await response.json();
  
  return newData
}

/*import { getDatabase, ref, child, push, update } from "firebase/database";

function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}*/
