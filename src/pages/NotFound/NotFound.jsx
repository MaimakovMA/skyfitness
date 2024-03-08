import * as S from './NotFound.styles.js';
import { useNavigate } from 'react-router-dom';
 
export const NotFoundPage = () => {

  const navigate = useNavigate()
  const onClick = () => {
      navigate('/')
    }
  
    return (
    <S.Conteiner>
      <S.TitelNotfound>
        <S.TitelNotfoundErrorText>404</S.TitelNotfoundErrorText>
        <S.TitelNotfoundErrorInformation>Страница не найдена<img src="img/smilecrying.png" alt="smilecrying" /></S.TitelNotfoundErrorInformation>
        <S.TitelNotfoundInfo>Возможно, она была удалена<br/> или перенесена на другой адрес</S.TitelNotfoundInfo>
        <S.NotfoundButton onClick={onClick}>Вернуться на главную</S.NotfoundButton>
      </S.TitelNotfound>
    </S.Conteiner>
    )
  }