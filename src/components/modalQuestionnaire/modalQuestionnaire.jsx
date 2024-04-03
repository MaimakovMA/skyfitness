import { useState } from 'react';
import * as S from './styles.js';
import { useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { saveProgress } from 'api.jsx';

export default function ModalQuestionnaire({
  modalActive,
  setModalActive,
  workout,
}) {
  // Берем id урока из URL
  const params = useParams()
  const workout_id = params.id

  const auth = getAuth()

  const [values, setValues] = useState(null)

  // Функция срабатывает при каждом изменении в инпутах
  const handleChange = (event) => {
    // Сохраняем все значения в values
    setValues({ ...values, [event.target.id]: event.target.value })
  }

  // Функция отправляет форму
  const sendForm = () => {
    // id пользователя
    const id = auth.currentUser.uid
    const arr = []
    for (let key in values) {
      arr.push({ name: key, quantity: values[key] })
    }
    // Функция отправляет все данные в firebase
    saveProgress({ id, workout_id, exercises: arr })
    // Меняем модальные окна
    setModalActive(2)
    setTimeout(() => setModalActive(0), 2000)
  }

  // Enter при открытой форме отправляет её
  document.addEventListener('keypress', function (e) {
    if (modalActive == 1 && e.key === 'Enter') {
      sendForm()
    }
  })

  return (
    <S.ModalForm>
      <S.ModalLogo>Мой прогресс</S.ModalLogo>
      {/* Проходим по массиву с упранениями */}
      {workout.exercises.map((item) => {
        return (
          <>
            {/* На каждое упражнение создаётся InputLabel и ModalInput */}
            <S.InputLabel>
              Сколько раз вы сделали{' '}
              {item.name
                .split('')
                .slice(0, item.name.indexOf('(') - 1)
                .join('')
                .toLowerCase()}
              ?
            </S.InputLabel>
            <S.ModalInput
              placeholder="Введите значение"
              type="number"
              min="1"
              // Макимальное значение равно заданию упражнения
              max={item.quantity}
              // id - название упражнения
              id={item.name}
              // Меняя значение запускается handleChange
              onChange={handleChange}
            ></S.ModalInput>
          </>
        )
      })}
      <S.PrimaryButton onClick={() => sendForm()}>Отправить</S.PrimaryButton>
    </S.ModalForm>
  )
}
