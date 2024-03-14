import * as S from './signIn.styles.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const hendleLogin = (event) => {
    event.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
      }));
      navigate('/');
  })
    .catch(() => alert ('Неправильное имя пользователя или пароль!'))
  };
  
    return(
    <>
      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
                <S.ModalLogo>
                  <img src="/img/logo.svg" alt="logo" />
                </S.ModalLogo>
            </S.ModalButtonLink>
              <S.ModalInputLogin
                className="login"
                type="email"
                name="login"
                value={email}
                placeholder="Почта"
                onChange={(event) => setEmail(event.target.value)}
              />
              <S.ModalInput
                className="password"
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                onChange={(event) => setPassword(event.target.value)}
              />
              <S.ModalBtnEnter>
              <S.ModalButtonLink onClick={(event) => hendleLogin(event)}>Войти</S.ModalButtonLink>
              </S.ModalBtnEnter>
              <S.ModalBtnSignUp>
              <S.ModalButtonLink to="/SignUp">Зарегистрироваться</S.ModalButtonLink>
              </S.ModalBtnSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
    )
  }