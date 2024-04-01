import * as S from './CorrectLoginStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updateEmail } from "firebase/auth";
import { setEmail } from 'store/slices/userSlice.js';

export default function CorrectLogin() {
  const [emailNew, setEmailNew] = useState('');
  const dispatch = useDispatch();
  
  const hendleNewLogin = (event) => {
    event.preventDefault()
    const auth = getAuth();

    updateEmail(auth.currentUser, emailNew).then(({user}) => {
    dispatch(setEmail({ emailNew: user.emailNew }));
    //window.location.reload();
})
    .catch(() => alert ('Неправильное имя пользователя или пароль!'))
};

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
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton onClick={(event) => hendleNewLogin(event)}>Сохранить новый email</S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}