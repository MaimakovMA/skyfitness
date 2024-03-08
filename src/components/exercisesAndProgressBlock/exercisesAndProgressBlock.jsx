import * as S from './styles'
import ListOfProgressContainer from '../../components/listOfProgressContainer/listOfProgressContainer'
import ListOfExercisesContainer from '../../components/listOfExercisesContainer/listOfExercisesContainer'

export default function ExercisesAndProgressBlock() {
  return (
    <S.Block>
      <ListOfExercisesContainer />
      <ListOfProgressContainer />
    </S.Block>
  )
}
