import * as S from './styles'
import ListOfProgress from '../../components/listOfProgress/listOfProgress'
import ListTitle from '../../components/listTitle/listTitle'

export default function ListOfProgressContainer() {
  return (
    <S.Container>
      <ListTitle text="Мой прогресс по тренировке 2:" />
      <ListOfProgress />
    </S.Container>
  )
}
