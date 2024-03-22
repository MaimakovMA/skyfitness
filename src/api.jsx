const BASE_URL = 'https://auth-exmple-d8c4f-default-rtdb.europe-west1.firebasedatabase.app/'

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

export async function updateProgress({ id, workout_id, exercises }) {
  const response = await fetch(BASE_URL + `/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      id,
      workout_id,
      exercises,
    }),
  })
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}
