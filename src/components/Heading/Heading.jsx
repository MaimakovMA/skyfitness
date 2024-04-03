import * as S from './Heading.styles.js';
import {useDispatch} from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { UserLoggedIn } from 'hooks/UserLoggedIn.jsx';

export const Heading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

const hendleSignOut = () => {
    const auth = getAuth();
    if(confirm('Вы уверенны что хотите выйти?')) {
      signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      console.log(error);
    })
      navigate('/login');
  }
};

UserLoggedIn();

    return (
        <>
          <S.LogoBlock>
            <S.Logo src="/img/logoWhite.svg" alt="logoWhite" />
            {isAuth ? (
            <>
            <S.LinkPersonalAccount to={`/profile`}>Мой профиль</S.LinkPersonalAccount >
            <S.LogoButton onClick={hendleSignOut}>Выйти</S.LogoButton>
            </>
            ) : (
            <S.LogoButton to={`/login`}>Войти</S.LogoButton>
            )}
          </S.LogoBlock>
          <S.Heading>Онлайн-тренировки для занятий дома</S.Heading> 
          <S.TitelBlock>
            <S.Title>Начните заниматься спортом<br/>и улучшите качество жизни</S.Title>
            <S.Sticker src="/img/Sticker1.png" alt="Sticker1" />
          </S.TitelBlock>
        </>
    )
}