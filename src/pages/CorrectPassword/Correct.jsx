import * as S from './CorrectStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updatePassword } from "firebase/auth";
import { setPasswordNew } from 'store/slices/userSlice.js';

export const CorrectPassword = ({ setVisiblePas }) => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const newPassword = localStorage.getItem("password");
  const dispatch = useDispatch();
  
  const hendleNewPassword = (event) => {
    event.preventDefault();
    const auth = getAuth();
    if (password.length === 0) {
      alert('Введите пароль');
      return
    }
    
    updatePassword(auth.currentUser, password).then(() => {
    dispatch(setPasswordNew({ password: password }));
    setVisiblePas(false);
    alert('Пароль был успешно изменен')
})
    .catch((error) => {alert ('Неправильный пароль!'); console.log(error)});
};

const handlePassword = () => {
  setVisiblePas(false);
}

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
            value={password}
            placeholder="Пароль"
            onChange={(event) => setPassword(event.target.value)}
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
        <S.ModalBtnEnter >
          <S.ModalButtonLink onClick={handlePassword}>Отмена</S.ModalButtonLink>
        </S.ModalBtnEnter>
      </S.ModalForm>
    </S.PageContainer>
  )
}