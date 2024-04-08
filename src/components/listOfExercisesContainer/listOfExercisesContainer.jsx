import * as S from './styles';
import { ListOfExercises } from '../../components/listOfExercises/listOfExercises';
import { ListTitle } from '../../components/listTitle/listTitle';
import { ProgressButton } from '../progressButton/progressButton';

export const ListOfExercisesContainer = ({
  setModalActive,
  exercises,
}) => {
  return (
    <S.Container>
      <ListTitle text="Упражнения" />
      <ListOfExercises exercises={exercises} />
      <ProgressButton setModalActive={setModalActive} />
    </S.Container>
  )
}
