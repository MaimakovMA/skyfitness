import * as S from './styles'

export default function BreadCrumbs({arr}) {
  return (
    <S.BreadCrumbsList>
      {arr.map((item) => (
        <li key={arr.indexOf(item)}>{item}</li>
      ))}
    </S.BreadCrumbsList>
  )
}
