import * as S from './styles';

export default function Header() {

  const userName = localStorage.getItem('email');
  
  return (
    <S.HeaderBlock to="/">
      <img src="../img/logo.svg" alt="logo"  />
      <S.UserNameBlock>
        <img src="../img/ellipse.svg" alt="user_photo_skeleton" />
        <S.UserName>{userName}</S.UserName>
        <S.UserNameButton>
        <img src="../img/user-name-button.svg" alt="user_photo_skeleton" />
        </S.UserNameButton>
      </S.UserNameBlock>
    </S.HeaderBlock>
  )
}
