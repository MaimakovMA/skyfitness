import * as S from './ListOfCourses.styles.js';
import { Cards } from '../../components/Cards/Cards.jsx'
//import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export const ListOfCourses = ({isLoading}) => {

    return(
        <S.Conteiner>
            <S.Anchor href="top"></S.Anchor>
            <S.LogoBlock>
              <S.Logo src="/img/logo.png" alt="logo" />
              <S.LogoButton to={`/login`}>Войти</S.LogoButton>
            </S.LogoBlock>
          <S.Heading>Онлайн-тренировки для занятий дома</S.Heading> 
          <S.TitelBlock>
            <S.Title>Начните заниматься спортом<br/>и улучшите качество жизни</S.Title>
            <S.Sticker src="/img/Sticker1.png" alt="Sticker1" />
          </S.TitelBlock>
            <Cards />
          <S.Footer>
              <S.Button href='#top'>Наверх ↑</S.Button>
          </S.Footer> 
        </S.Conteiner>
    )
}