import * as S from './signUp.slyles.js';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { setUser, removeUser } from 'store/slices/userSlice.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from 'api.jsx';
import { Loader } from 'components/FullPageLoader/FullPageLoader.jsx';

export const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({ email: user.email, id: user.uid, password: user.password }));
    } else {
      dispatch(removeUser());
    }
    if (isLoading) { setisLoading(false) };
});

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
          password: password,
      }));
      saveUser(user.uid);
      navigate('/login');
  })
  .catch(() => alert ('Неправильное имя пользователя или пароль!'))
  };
  
    return isLoading ? (
      <Loader /> ) : (
    <>
      <S.Wrapper>
        <S.ContainerEnter >
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
                <S.ModalLogo>
                  <img src="/img/logo.svg" alt="logo" />
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
              <S.ModalBtnSignUp>
              <S.ModalButtonLink to="/login">Войти</S.ModalButtonLink>
              </S.ModalBtnSignUp>
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