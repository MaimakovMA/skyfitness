import * as S from './styles.js'

export default function ProgressBar({ percentage, color }) {
  return (
    <S.ProgressBarInput
      type="range"
      min={0}
      max={100}
      step={1}
      value={percentage}
      color={color}
    >
    </S.ProgressBarInput>
  )
}
