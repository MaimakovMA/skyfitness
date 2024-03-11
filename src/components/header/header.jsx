import * as S from './styles'

export default function Header() {
  return (
    <S.HeaderBlock>
      <img src="../img/logo.svg" alt="logo" />
      <S.UserNameBlock>
        <img src="../img/ellipse.svg" alt="user_photo_skeleton" />
        <S.UserName>Имя</S.UserName>
        <S.UserNameButton>
        <img src="../img/user-name-button.svg" alt="user_photo_skeleton" />
        </S.UserNameButton>
      </S.UserNameBlock>
    </S.HeaderBlock>
  )
}
