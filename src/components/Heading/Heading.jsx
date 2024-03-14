import * as S from './Heading.styles.js';
import {useDispatch} from 'react-redux'
import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice';

export const Heading = () => {
  const dispatch = useDispatch();

  const { isAuth } = useAuth()

    return (
        <>
          <S.LogoBlock>
            <S.Logo src="/img/logoWhite.svg" alt="logoWhite" />
            {isAuth ? (
            <>
            <S.LinkPersonalAccount to={`/profile`}>Личный кабинет</S.LinkPersonalAccount >
            <S.LogoButton onClick={()=> dispatch(removeUser())}>Выйти</S.LogoButton>
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