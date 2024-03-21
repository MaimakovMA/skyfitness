import * as S from './styles.js'

export default function ModalQuestionnaire({ setModalActive, workout }) {
  const sendForm = () => {
    setModalActive(2)
    setTimeout(() => setModalActive(0), 2000)
  }

  return (
    <S.ModalForm>
      <S.ModalLogo>Мой прогресс</S.ModalLogo>
      {workout.exercises.map((item) => {
        return (
          <>
            <S.InputLabel>Сколько раз вы сделали {item.name.split('').slice(0, item.name.indexOf("(")-1).join("").toLowerCase()}?</S.InputLabel>
            <S.ModalInput placeholder="Введите значение"></S.ModalInput>
          </>
        )
      })}
      <S.PrimaryButton onClick={() => sendForm()}>Отправить</S.PrimaryButton>
    </S.ModalForm>
  )
}
