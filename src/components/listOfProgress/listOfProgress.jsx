import * as S from './styles'
import ProgressBar from '../../components/progressBar/progressBar'

export default function ListOfProgress() {
  return (
    <S.List>
      <S.Item>
        <span>Наклоны вперед</span>
        <ProgressBar percentage={45} color={'#565EEF'}/>
      </S.Item>
      <S.Item>
        <span>Наклоны назад</span>
        <ProgressBar percentage={45} color={'#FF6D00'}/>
      </S.Item>
      <S.Item>
        <span>Поднятие ног, <br/> согнутых в коленях</span>
        <ProgressBar percentage={45} color={'#9A48F1'}/>
      </S.Item>
    </S.List>
  )
}
