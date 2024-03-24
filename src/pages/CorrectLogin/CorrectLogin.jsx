import { createGlobalStyle } from 'styled-components'
import * as S from './CorrectLoginStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updateProfile } from "firebase/auth";
import { setEmail } from 'store/slices/userSlice.js';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("../fonts/StratosSkyeng.woff2") format("woff2"), url("../fonts/StratosSkyeng.woff") format("woff"), url("../fonts/StratosSkyeng.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
}

`
export default function CorrectLogin() {

  const [emailNew, setEmailNew] = useState('');
  const dispatch = useDispatch();
  const userName = localStorage.getItem('email');

  const hendleNewLogin = (event) => {
    event.preventDefault()
    const auth = getAuth();
    user.updateProfile(auth.currentUser, {
      displayName: "userName"
    })
    .then(({user}) => {
      dispatch(setEmail({
        emailNew: user.emailNew,
        
      }));
      
      return emailNew
      
  }) 
    .catch(() => alert ('Неправильное имя пользователя или пароль!'))
  };

  return (
    <S.PageContainer>
      <GlobalStyle />
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage src="../../img/logo.png" alt="logo" />
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
          <S.PrimaryButton onClick={(event) => hendleNewLogin(event)}>Сохранить</S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}