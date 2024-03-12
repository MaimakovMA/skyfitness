import * as S from './signUp.slyles.js';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const hendleRegister = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
      }));
      navigate('/');
  })
  .catch(console.error)
  };

    return(
    <>
      <S.Wrapper>
        <S.ContainerEnter >
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
                <S.ModalLogo>
                  <img src="/img/logoBlack.svg" alt="logoBlack" />
                </S.ModalLogo>
            </S.ModalButtonLink>
              <S.ModalInput
                type="email"
                name="login"
                value={email}
                placeholder="Почта"
                onChange={(event) => setEmail(event.target.value)}
              />
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
              <S.ModalBtnEnter >
              <S.ModalButtonLink onClick={(event) => hendleRegister(event)}>Зарегистрироваться</S.ModalButtonLink>
              </S.ModalBtnEnter>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
    )
  }