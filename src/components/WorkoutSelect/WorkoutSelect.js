import { Link } from 'react-router-dom';
import * as S from './WorkoutSelection.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { WorkoutSelectItem } from './WorkoutSelectItem';
import { getAllWorkouts } from 'api';
import { getAuth } from 'firebase/auth';

export const WorkoutSelect = ({ workouts_id }) => {
  // id пользователя
  const auth = getAuth();
  const user_id = auth.currentUser.uid

  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    getAllWorkouts().then((data) => {
      let arr = []
      for (let item in data) {
        if (workouts_id.includes(data[item]._id)) {
          arr.push(data[item])
        }
      }
      setWorkouts(arr)
    })
  }, [])

  const yogaWorkouts = useSelector((state) => state.workout)

  const taskCounter = (workout) => {
    let counter = 0
    if (workout.exercises) {
      for (let item of workout.exercises) {
        counter = counter + item.quantity
      }
    }
    return counter
  }

  return (
    <S.SelectContainer>
      <S.SelectWrapper>
        <S.SelectCloseIconSvg>
          <use xlinkHref="/icons/sprite.svg#icon-close" />
        </S.SelectCloseIconSvg>
        <S.SelectHeader>Выберите тренировку</S.SelectHeader>
        <S.SelectList>
          {workouts
            ? workouts.map((workout) => (
                <Link key={workout._id} to={`/workout/${workout._id}`}>
                  <WorkoutSelectItem
                    name={workout.name}
                    user_id={user_id}
                    workout_id={workout._id}
                    task={taskCounter(workout)}
                  />
                </Link>
              ))
            : ''}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  )
}
