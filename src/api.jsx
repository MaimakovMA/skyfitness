import {
  Database,
  getDatabase,
  ref,
  set,
  child,
  push,
  update,
  get,
} from '@firebase/database'

const BASE_URL =
  'https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/'

//Запрос на все курсы
export async function getAllCourses() {
  const response = await fetch(BASE_URL + '/courses.json', {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

//Запрос на все тренировки
export async function getAllWorkouts() {
  const response = await fetch(BASE_URL + '/workouts.json', {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

// Функция сохраняет прогресс
export async function saveProgress({ id, workout_id, exercises }) {
  const db = getDatabase()
  set(ref(db, 'users/' + id + '/workouts/' + workout_id), {
    workout_id,
    exercises,
  })
}

// Функция принимает данные о прогрессе
export async function getProgress({ id, workout_id }) {
  // Подключаемся к базе
  const bdRef = ref(getDatabase())
  // Отправляем запрос
  let response = await get(child(bdRef, `users/${id}/workouts/${workout_id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        return 'snapshot dont exist'
      }
    })
    .catch((error) => {
      console.error(error)
    })

  const result = await response
  return result
}
