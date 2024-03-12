import * as S from './styles'

export default function ProgressButton({setModalActive}) {
    return <S.Button onClick={() => setModalActive(1)}>Заполнить свой прогресс</S.Button>
}