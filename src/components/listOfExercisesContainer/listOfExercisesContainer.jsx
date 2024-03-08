import * as S from './styles'
import ListOfExercises from '../../components/listOfExercises/listOfExercises'
import ListTitle from '../../components/listTitle/listTitle'
import ProgressButton from '../progressButton/progressButton'

export default function ListOfExercisesContainer() {
  return (
    <S.Container>
      <ListTitle text="Упражнения" />
      <ListOfExercises
        arr={[
          'Наклон вперед (10 повторений)',
          'Наклон назад (10 повторений)',
          'Поднятие ног, согнутых в коленях (5 повторений)',
        ]}
      />
      <ProgressButton/>
    </S.Container>
  )
}
