import * as S from './styles'
import ProgressBar from '../../components/progressBar/progressBar'

export default function ListOfProgress({ exercises }) {
  return (
    <S.List>
      {exercises.map((item) => (
        <S.Item key={exercises.indexOf(item)}>
          <span>{item.name.split('').slice(0, item.name.indexOf("(")-1).join("")}</span>
          <ProgressBar percentage={45}/>
        </S.Item>
      ))}
    </S.List>
  )
}
