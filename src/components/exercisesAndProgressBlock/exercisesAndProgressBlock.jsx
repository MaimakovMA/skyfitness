import * as S from './styles'
import ListOfProgressContainer from '../../components/listOfProgressContainer/listOfProgressContainer'
import ListOfExercisesContainer from '../../components/listOfExercisesContainer/listOfExercisesContainer'

export default function ExercisesAndProgressBlock({
  setModalActive,
  exercises,
}) {
  return (
    <S.Block>
      <ListOfExercisesContainer
        setModalActive={setModalActive}
        exercises={exercises}
      />
      <ListOfProgressContainer exercises={exercises}/>
    </S.Block>
  )
}
