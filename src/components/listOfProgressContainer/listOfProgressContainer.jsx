import * as S from './styles';
import { ListOfProgress } from '../../components/listOfProgress/listOfProgress';
import { ListTitle } from '../../components/listTitle/listTitle';

export const ListOfProgressContainer = ({exercises, currentProgress}) => {
  return (
    <S.Container>
      <ListTitle text="Мой прогресс по тренировке:" />
      <ListOfProgress exercises={exercises} currentProgress={currentProgress}/>
    </S.Container>
  )
}
