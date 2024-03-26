import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import WorkoutTitle from '../../components/workoutTitle/workoutTitle'
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs'
import Video from '../../components/video/video'
import ExercisesAndProgressBlock from '../../components/exercisesAndProgressBlock/exercisesAndProgressBlock'
import ModalQuestionnaire from '../../components/modalQuestionnaire/modalQuestionnaire'
import ModalProgressSuccess from '../../components/modalProgressSuccess/modalProgressSuccess'
import { getAllWorkouts, getProgress } from 'api'
import { useParams } from 'react-router'
import { getAuth } from 'firebase/auth'
import { checkPropertyChange } from 'json-schema'
import { set } from '@firebase/database'

export const WorkoutVideoPage = () => {
  // Состояние с активным модальным окном
  // 0 - Окна закрыты
  // 1 - Анкета записи прогресса
  // 2 - "Прогресс записан"
  const [modalActive, setModalActive] = useState(0)

  const auth = getAuth()

  // id активного урока из URL
  let workout_id = useParams().id
  // Состояние с данными для рендера страницы
  const [Workout, setWorkout] = useState()
  // Состояние с прогрессом пользователя на этом уроке
  const [currentProgress, setCurrentProgress] = useState()

  useEffect(() => {
    // id пользователя
    const id = "DrzR1oK1gESplXW6ki4qxUWU7Vm1"
    getAllWorkouts().then((data) => {
      setWorkout(data[workout_id])
      console.log(data)
    })
    getProgress({ id, workout_id }).then((data) => setCurrentProgress(data))
    console.log(currentProgress)
  }, [])


  useEffect(() => {
    // Если пользователь записал прогресс:
    if (modalActive === 2) {
      // id пользователя
      const id = "DrzR1oK1gESplXW6ki4qxUWU7Vm1"
      // Берем прогресс по всему уроку по id урока и id пользователя из базы данных
      getProgress({ id, workout_id }).then((data) => setCurrentProgress(data))
    }
    console.log(currentProgress)
  }, [modalActive])

  if (Workout) {
    return (
      <main>
        <Header />
        <WorkoutTitle title={'Йога'} />
        <BreadCrumbs text={Workout.name} />
        {modalActive === 1 ? (
          <ModalQuestionnaire
            setModalActive={setModalActive}
            workout={Workout}
          />
        ) : (
          ''
        )}
        {modalActive === 2 ? <ModalProgressSuccess /> : ''}
        <Video url={Workout.video} />
        {Workout.exercises ? (
          <ExercisesAndProgressBlock
            setModalActive={setModalActive}
            exercises={Workout.exercises}
            currentProgress={currentProgress}
          />
        ) : (
          <div style={{ height: '100px' }}></div>
        )}
      </main>
    )
  }
}
