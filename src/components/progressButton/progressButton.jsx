import * as S from './styles';

export const ProgressButton = ({setModalActive}) => {
    return <S.Button onClick={() => setModalActive(1)}>Заполнить свой прогресс</S.Button>
}