import * as S from './CorrectLoginStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { setEmail } from 'store/slices/userSlice.js';

export const CorrectLogin = ({ setVisibleLogin }) => {
  const [emailNew, setEmailNew] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const hendleNewLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    if (password.length === 0 || emailNew.length === 0) {
      alert('Введите старый пароль');
      return
    }

    reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(auth.currentUser.email, password )).then(() => {
      updateEmail(auth.currentUser, emailNew).then(() => {
        dispatch(setEmail({ email: emailNew }));
        setVisibleLogin(false);
    })
})
    .catch((error) => {alert ('Неправильное имя пользователя или пароль!'); console.log(error)})
};

const handleLogin = () => {
  setVisibleLogin(false);
}

  return (
    <S.PageContainer>
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="../../img/logo.svg" alt="logo" />
        </S.ModalLogo>
        <S.LoginName>Новый логин:</S.LoginName>
        <S.Inputs>
          <S.ModalInput
           className="login"
           type="email"
           name="login"
           value={emailNew}
           placeholder="Почта"
           onChange={(event) => setEmailNew(event.target.value)}
           required
          />
          <S.ModalInput
           className="login"
           type="password"
           name="login"
           value={password}
           placeholder="Пароль"
           onChange={(event) => setPassword(event.target.value)}
           required
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton onClick={(event) => hendleNewLogin(event)}>Сохранить новый email</S.PrimaryButton>
        </S.Buttons>
        <S.ModalBtnEnter >
            <S.ModalButtonLink onClick={handleLogin}>Отмена</S.ModalButtonLink>
        </S.ModalBtnEnter>
      </S.ModalForm>
    </S.PageContainer>
  )
}