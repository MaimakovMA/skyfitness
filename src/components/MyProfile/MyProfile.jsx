import { useEffect, useState } from 'react';
import CorrectLogin from '../../pages/CorrectLogin/CorrectLogin';
import CorrectPassword from '../../pages/CorrectPassword/Correct';
import * as S from './MyProfile.styles';

function MyProfile() {
  
    const userName = localStorage.getItem('email');
    const [visibleLogin, setVisibleLogin] = useState(false);
    const [visiblePas, setVisiblePas] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (isEditing) {
          setVisibleLogin(false)
          setVisiblePas(false)
          setIsEditing(false)
        } else {
        }
      }
    }

    useEffect(() => {
      window.addEventListener('keydown', handleEscape)
      return () => {
        window.removeEventListener('keydown', handleEscape)
      }
    }, [isEditing])
  
    const handleLogin = () => {
      setVisibleLogin(!visibleLogin)
      setIsEditing(true)
    }
  
    const handlePassword = () => {
      setIsEditing(true)
      setVisiblePas(!visiblePas)
    }
  
return (

    <S.HeaderStyleMyProfile>
    <S.NamePages>Мой профиль</S.NamePages>
    <S.LoginPassName>Логин: {userName}</S.LoginPassName>
    <S.LoginPassNameWithPadding>Пароль: ******</S.LoginPassNameWithPadding>
    {visibleLogin ? (
      <CorrectLogin onClick={handleLogin} setVisibleLogin={setVisibleLogin} />
    ) : (
      <S.ProfileButton onClick={handleLogin}>
        Редактировать логин
      </S.ProfileButton>
    )}
    <S.ContainerWithButtom>
      {visiblePas ? (
        <CorrectPassword onClick={handlePassword} setVisiblePas={setVisiblePas} />
      ) : (
        <S.ProfileButton onClick={handlePassword}>
          Редактировать пароль
        </S.ProfileButton>
      )}
    </S.ContainerWithButtom>
  </S.HeaderStyleMyProfile>
  )
}

export default MyProfile