import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import WorkoutTitle from '../../components/workoutTitle/workoutTitle'
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs'
import Video from '../../components/video/video'
import ExercisesAndProgressBlock from '../../components/exercisesAndProgressBlock/exercisesAndProgressBlock'
import ModalQuestionnaire from '../../components/modalQuestionnaire/modalQuestionnaire'
import ModalProgressSuccess from '../../components/modalProgressSuccess/modalProgressSuccess'
import { getAllWorkouts } from 'api'

export const WorkoutVideoPage = () => {
  const [modalActive, setModalActive] = useState(0)
  let workout_id = 'kcx5ai'
  const [Workout, setWorkout] = useState()
  useEffect(() => {
    getAllWorkouts().then((data) => {
      setWorkout(data[workout_id])
      console.log(data);
    })
  }, [])

  if (Workout) {
    return (
      <main>
        <Header />
        <WorkoutTitle title={'Йога'} />
        <BreadCrumbs text={Workout.name} />
        {modalActive === 1 ? (
          <ModalQuestionnaire setModalActive={setModalActive} />
        ) : (
          ''
        )}
        {modalActive === 2 ? <ModalProgressSuccess /> : ''}
        <Video url={Workout.video} />
        {Workout.exercises ? (
          <ExercisesAndProgressBlock
            setModalActive={setModalActive}
            exercises={Workout.exercises}
          />
        ) : (
          <div style={{ height: '100px' }}></div>
        )}
      </main>
    )
  }
}
