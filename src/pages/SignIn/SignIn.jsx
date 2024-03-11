import * as S from './signIn.styles.js';

export const Login = () => {
  
    return(
    <>
      <S.Wrapper>
        <S.ContainerEnter>
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
                <S.ModalLogo>
                  <img src="/img/logoBlack.png" alt="logoBlack" />
                </S.ModalLogo>
            </S.ModalButtonLink>
              <S.ModalInputLogin
                className="login"
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalInput
                className="password"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter>
              <S.ModalButtonLink>Войти</S.ModalButtonLink>
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