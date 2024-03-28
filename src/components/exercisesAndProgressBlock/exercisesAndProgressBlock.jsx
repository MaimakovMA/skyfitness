import * as S from './styles'
import ListOfProgressContainer from '../../components/listOfProgressContainer/listOfProgressContainer'
import ListOfExercisesContainer from '../../components/listOfExercisesContainer/listOfExercisesContainer'

export default function ExercisesAndProgressBlock({
  setModalActive,
  exercises,
  currentProgress,
}) {
  return (
    <S.Block>
      <ListOfExercisesContainer
        setModalActive={setModalActive}
        exercises={exercises}
      />
      <ListOfProgressContainer
        exercises={exercises}
        currentProgress={currentProgress}
      />
    </S.Block>
  )
}
