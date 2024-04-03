import { useEffect, useState } from 'react'
import * as S from './WorkoutSelection.styled'
import { useSelector } from 'react-redux'
import { getProgress } from 'api'

export const WorkoutSelectItem = ({
  name,
  type,
  task,
  user_id,
  workout_id,
}) => {
  const [progress, setProgress] = useState()
  useEffect(() => {
    let id = user_id
    getProgress({ id, workout_id }).then((data) => {
      setProgress(data.exercises)
    })
  }, []),
    []

  const result = () => {
    let sumProgress = 0
    if (progress) {
      for (let item in progress) {
        sumProgress += Number(progress[item].quantity)
      }
    }
    return task === sumProgress
  }

  // const userProg = useSelector(state => state.progress.userProgressAll.userProgressAll.workoutsProgress[id - 1][0]);

  // const [progress, setProgress] = useState(userProg);
  // const [exe, setExe] = useState(exercise);

  // const allExeChecked = () => {
  //     for (const ex of exe) {
  //         const matchProgress = progress.find(item => item.training === ex.name);
  //         if (!matchProgress || matchProgress.progress < ex.repeats) {
  //             return false
  //         }
  //     }
  //     return true
  // }

  return (
    <S.SelectItem $isFinished={result()}>
      {name}
      {result() ? (
        <S.SelectItemCheckboxImg>
          <use xlinkHref="/icons/sprite.svg#icon-complete" />
        </S.SelectItemCheckboxImg>
      ) : (
        ''
      )}
      <S.SelectItemType>{type}</S.SelectItemType>
    </S.SelectItem>
  )
}
