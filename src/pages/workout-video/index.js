import * as S from './workout-video.styled';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header/header';
import { WorkoutTitle } from '../../components/workoutTitle/workoutTitle';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Video } from '../../components/video/video';
import { ExercisesAndProgressBlock } from '../../components/exercisesAndProgressBlock/exercisesAndProgressBlock';
import { ModalQuestionnaire} from '../../components/modalQuestionnaire/modalQuestionnaire';
import { ModalProgressSuccess } from '../../components/modalProgressSuccess/modalProgressSuccess';
import { getAllCourses, getAllWorkouts, getProgress } from 'api';
import { useParams } from 'react-router';
import { getAuth } from 'firebase/auth';

export const WorkoutVideoPage = () => {
  // Состояние с активным модальным окном
  // 0 - Окна закрыты
  // 1 - Анкета записи прогресса
  // 2 - "Прогресс записан"
  const [modalActive, setModalActive] = useState(0);

  // id активного урока из URL
  let workout_id = useParams().id;
  // id пользователя
  const auth = getAuth();
  const id = auth.currentUser.uid;
  // const id = 'DrzR1oK1gESplXW6ki4qxUWU7Vm1'

  // Состояние с данными для рендера страницы
  const [Workout, setWorkout] = useState()
  // Название страницы
  const [title, setTitle] = useState()
  // Состояние с прогрессом пользователя на этом уроке
  const [currentProgress, setCurrentProgress] = useState({
    exercises: [
      {
        name: 'test',
        quantity: 0,
      },
      {
        name: 'test',
        quantity: 0,
      },
      {
        name: 'test',
        quantity: 0,
      },
    ],
  })

  useEffect(() => {
    // Запрашиваем все курсы и ищем там нужное название страницы
    getAllCourses().then(data => {
      const arr = [];
      for (let item in data) {
        if (data[item].workouts.includes(workout_id)) {
          setTitle(data[item].name)
        }
      }
    })
    // Берем все уроки и оставляем в Workout одну с нужным id
    getAllWorkouts().then((data) => {
      setWorkout(data[workout_id])
    })
    // Берем прогресс по id урока и id пользователя из базы данных
    getProgress({ id, workout_id }).then((data) => {
      setCurrentProgress(data)
    })
  }, []);

  useEffect(() => {
    // Если пользователь записал прогресс:
    if (modalActive === 2) {
      // Берем прогресс по id урока и id пользователя из базы данных
      getProgress({ id, workout_id }).then((data) => setCurrentProgress(data));
    }
  }, [modalActive]);

  if (Workout) {
    return (
      <S.WorkoutMain>
        <Header />
        <WorkoutTitle title={title} />
        <BreadCrumbs text={Workout.name} />
        {modalActive === 1 ? (
          <ModalQuestionnaire
            modalActive={modalActive}
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
      </S.WorkoutMain>
    )
  }
}
