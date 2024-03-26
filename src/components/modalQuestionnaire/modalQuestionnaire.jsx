import { useState } from 'react'
import * as S from './styles.js'
import { useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { saveProgress } from 'api.jsx'

export default function ModalQuestionnaire({ setModalActive, workout }) {
  const params = useParams()
  const workout_id = params.id
  const auth = getAuth()

  const [values, setValues] = useState(null)

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value })
  }

  const sendForm = () => {
    const id = auth.currentUser.uid
    const arr = []
    for (let key in values) {
      arr.push({ name: key, quantity: values[key] })
    }
    saveProgress({ id, workout_id, exercises: arr })
    setModalActive(2)
    setTimeout(() => setModalActive(0), 2000)
  }

  return (
    <S.ModalForm>
      <S.ModalLogo>Мой прогресс</S.ModalLogo>
      {workout.exercises.map((item) => {
        return (
          <>
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
              max={item.quantity}
              id={item.name}
              onChange={handleChange}
            ></S.ModalInput>
          </>
        )
      })}
      <S.PrimaryButton onClick={() => sendForm()}>Отправить</S.PrimaryButton>
    </S.ModalForm>
  )
}
