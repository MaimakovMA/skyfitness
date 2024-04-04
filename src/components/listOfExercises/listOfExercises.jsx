import * as S from './styles';

export default function ListOfExercises({ exercises }) {
  return (
    <S.List>
      {exercises.map((item) => (
        <S.Item key={exercises.indexOf(item)}>{item.name}</S.Item>
      ))}
    </S.List>
  )
}
