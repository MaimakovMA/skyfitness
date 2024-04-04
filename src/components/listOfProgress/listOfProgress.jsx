import * as S from './styles';
import ProgressBar from '../../components/progressBar/progressBar';

export default function ListOfProgress({ exercises, currentProgress }) {
  // Функция принимает нужное количество выполнений и фактическое, возвращает процент выполнения
  let result = (quantity, userProgress) => {
    if ((userProgress / quantity) * 100 > 100) {
      return 100
    }
    return (userProgress / quantity) * 100
  }

  return (
    <S.List>
      {exercises.map((item) => (
        // На каждое упражнение создается S.Item
        <S.Item key={exercises.indexOf(item)}>
          {/* Название упражнения */}
          <span>
            {item.name
              .split('')
              .slice(0, item.name.indexOf('(') - 1)
              .join('')}
          </span>
          {/* Если прогресс есть и в нём есть упражнение с тем же названием */}
          {currentProgress.exercises &&
          currentProgress.exercises.find(
            (element) => element.name === item.name,
          ) ? (
            // То ProgressBar считает процент прогресса
            <ProgressBar
              percentage={result(
                item.quantity,
                currentProgress.exercises.find(
                  (element) => element.name === item.name,
                ).quantity,
              )}
              keyColor={exercises.indexOf(item)}
            />
          ) : (
            // Иначе ProgressBar считает процент с нулем
            <ProgressBar percentage={result(item.quantity, 0)} keyColor={exercises.indexOf(item)}/>
          )}
        </S.Item>
      ))}
    </S.List>
  )
}
