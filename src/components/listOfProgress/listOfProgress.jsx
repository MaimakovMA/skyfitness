import * as S from './styles'
import ProgressBar from '../../components/progressBar/progressBar'

export default function ListOfProgress({ exercises, currentProgress }) {
  let userProgress = 5
  let result = (quantity, userProgress) => {
    if ((userProgress / quantity) * 100 > 100) {
      return 100
    }
    return (userProgress / quantity) * 100
  }

console.log(exercises);
console.log(currentProgress.exercises);
  return (
    <S.List>
      {exercises.map((item) => (
        // На каждое упражнение создается S.Item
        <S.Item key={exercises.indexOf(item)}>
          {/* Название упражнения */}
          <span>{item.name.split('').slice(0, item.name.indexOf("(")-1).join("")}</span>
          {currentProgress.exercises.find((element) => element.name === item.name) ? 
          <ProgressBar percentage={result(item.quantity, currentProgress.exercises.find((element) => element.name === item.name).quantity)}/>
          :
          <ProgressBar percentage={result(item.quantity, 0)}/>
        }
        </S.Item>
      ))}
    </S.List>
  )
}
