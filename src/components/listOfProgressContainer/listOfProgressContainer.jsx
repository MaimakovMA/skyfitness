import * as S from './styles'
import ListOfProgress from '../../components/listOfProgress/listOfProgress'
import ListTitle from '../../components/listTitle/listTitle'

export default function ListOfProgressContainer({exercises}) {
  return (
    <S.Container>
      <ListTitle text="Мой прогресс по тренировке:" />
      <ListOfProgress exercises={exercises}/>
    </S.Container>
  )
}
