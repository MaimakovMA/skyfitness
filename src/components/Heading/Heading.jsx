import * as S from './Heading.styles.js';

export const Heading = () => {
    return (
        <>
          <S.LogoBlock>
            <S.Logo src="/img/logo.png" alt="logo" />
            <S.LogoButton to={`/login`}>Войти</S.LogoButton>
          </S.LogoBlock>
          <S.Heading>Онлайн-тренировки для занятий дома</S.Heading> 
          <S.TitelBlock>
            <S.Title>Начните заниматься спортом<br/>и улучшите качество жизни</S.Title>
            <S.Sticker src="/img/Sticker1.png" alt="Sticker1" />
          </S.TitelBlock>
        </>
    )
}