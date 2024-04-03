import * as S from './signIn.styles.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from 'store/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/FullPageLoader/FullPageLoader.jsx';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect (() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, id: user.uid, password: user.password }));
      } else {
        dispatch(removeUser());
      }
      if (isLoading) { setisLoading(false) };
  });
  },[])


  const hendleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          password: password,
      }));
      navigate('/');
  }) 
    .catch(() => alert ('Неправильное имя пользователя или пароль!'))
  };

  const hendleResetPassword = () => {
    const auth = getAuth();
    const email = prompt('Введите email еще раз');
    sendPasswordResetEmail(auth, email);
    alert('Вам отправленно письмо, на адрес вашей эл.почты');
  }
  
    return  isLoading ? (
      <Loader /> ) : (
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
                required
              />
              <S.ModalInput
                className="password"
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <S.ModalBtnEnter>
              <S.ModalButtonLink onClick={(event) => hendleLogin(event)}>Войти</S.ModalButtonLink>
              </S.ModalBtnEnter>
              <S.ModalBtnSignUp>
              <S.ModalButtonLink to="/SignUp">Зарегистрироваться</S.ModalButtonLink>
              </S.ModalBtnSignUp>
              <S.ResetPassword onClick={(event) => hendleResetPassword(event)}>Забыли пароль</S.ResetPassword>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    </>
    )
  }