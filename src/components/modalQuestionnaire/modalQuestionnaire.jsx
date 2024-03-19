import * as S from './styles.js'

export default function ModalQuestionnaire({setModalActive}) {

  const sendForm = () => {
    setModalActive(2)
    setTimeout(() => setModalActive(0), 2000)
  }

  return (
    <S.ModalForm>
      <S.ModalLogo>Мой прогресс</S.ModalLogo>
      <S.InputLabel>Сколько раз вы сделали наклоны вперед?</S.InputLabel>
      <S.ModalInput placeholder="Введите значение"></S.ModalInput>
      <S.InputLabel>Сколько раз вы сделали наклоны назад?</S.InputLabel>
      <S.ModalInput placeholder="Введите значение"></S.ModalInput>
      <S.InputLabel>
        Сколько раз вы сделали поднятие ног, согнутых в коленях?
      </S.InputLabel>
      <S.ModalInput placeholder="Введите значение"></S.ModalInput>
      <S.PrimaryButton onClick={() => sendForm()}>Отправить</S.PrimaryButton>
    </S.ModalForm>
  )
}
