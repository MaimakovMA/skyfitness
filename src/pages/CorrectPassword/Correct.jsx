import * as S from './CorrectStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updatePassword } from "firebase/auth";
import { setPassword } from 'store/slices/userSlice.js';

export default function CorrectPassword() {
  const [passwordNew, setPasswordNew] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  
  const hendleNewPassword = (event) => {
    event.preventDefault();
    const auth = getAuth();

    updatePassword(auth.currentUser, passwordNew).then(({user}) => {
    dispatch(setPassword({ passwordNew: user.passwordNew }));
})
    .catch(() => alert ('Неправильный пароль!'));
};

  return (
    <S.PageContainer>
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="../../img/logo.svg" alt="logo" />
        </S.ModalLogo>
        <S.LoginName>Новый пароль:</S.LoginName>
        <S.Inputs>
          <S.ModalInput
            type="password"
            name="password"
            value={passwordNew}
            placeholder="Пароль"
            onChange={(event) => setPasswordNew(event.target.value)}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder='Повторите пароль'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton onClick={(event) => hendleNewPassword(event)}>Сохранить новый пароль</S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}