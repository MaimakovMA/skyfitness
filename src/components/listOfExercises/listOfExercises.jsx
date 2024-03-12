import * as S from './styles'

export default function ListOfExercises({ arr }) {
  return (
    <S.List>
      {arr.map((item) => (
        <S.Item key={arr.indexOf(item)}>{item}</S.Item>
      ))}
    </S.List>
  )
}
