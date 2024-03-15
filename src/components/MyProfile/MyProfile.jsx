

import { useEffect, useState } from 'react'
import CorrectLogin from '../../pages/CorrectLogin/CorrectLogin'
import CorrectPassword from '../../pages/CorrectPassword/Correct'
import * as S from './MyProfile.styles'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setEmail } from 'store/slices/userSlice'
import { useAuth } from 'hooks/use-auth'

function MyProfile() {
    const dispatch = useDispatch()
    // const userName = localStorage.getItem('userEmail')
    const auth = getAuth()
    const { email } = useAuth()
    
    const [visibleLogin, setVisibleLogin] = useState(false)
    const [visiblePas, setVisiblePas] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [isEditing, setIsEditing] = useState(false)
  


    
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
      setIsEditing(true)
      setVisibleLogin(!visibleLogin)
      const user = auth.currentUser
      updateEmail(user, newEmail)
        .then(() => {
          // localStorage.setItem('email', newEmail)
          dispatch(setEmail({ email: newEmail })
          );
          // alert('Email успешно обновлен');
      // setVisibleLogin(false); // Закрываем форму после успешного обновления
      // setIsEditing(false);
        })
        .catch((error) => {
          alert('Ошибка при обновлении email:', error.message)
        })
    }

    // const hendleLogin = (event) => {
    //   event.preventDefault()
    //   const auth = getAuth();
    //   signInWithEmailAndPassword(auth, email, password)
    //   .then(({user}) => {
    //     dispatch(setUser({
    //         email: user.email,
    //         id: user.uid,
    //         token: user.accessToken,
    //     }));
    //     navigate('/');
  
    const handlePassword = () => {
      setIsEditing(true)
      setVisiblePas(!visiblePas)
      const user = auth.currentUser
  
      updatePassword(user, newPassword)
        .then(() => {
          console.log('ready')
        })
        .catch(() => {
          alert('Некорректный пароль')
        })
    }
  
return (

    <S.HeaderStyleMyProfile>
    <S.NamePages>Мой профиль</S.NamePages>
    <S.LoginPassName>Логин: {email} </S.LoginPassName>
    <S.LoginPassNameWithPadding>Пароль: ***** </S.LoginPassNameWithPadding>

    {visibleLogin ? (
      <CorrectLogin onClick={handleLogin} setNew={setNewEmail} />
    ) : (
      <S.ProfileButton onClick={handleLogin}>
        Редактировать логин
      </S.ProfileButton>
    )}
    <S.ContainerWithButtom>
      {visiblePas ? (
        <CorrectPassword onClick={handlePassword} setNew={setNewPassword} />
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