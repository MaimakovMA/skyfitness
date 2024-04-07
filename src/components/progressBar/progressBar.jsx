import * as S from './styles.js';

const palette = [
  {
    color: "#565eef",
    background: "rgba(86, 94, 239, 0.1)",
    id: 0
  }, 
  {
    color: "#FF6D00",
    background: "rgba(255, 109, 0, 0.1)",
    id: 1
  },
  {
    color: "#9A48F1",
    background: "rgba(154, 72, 241, 0.1)",
    id: 2
  },
  {
    color: "#565eef",
    background: "rgba(86, 94, 239, 0.1)",
    id: 3
  }, 
  {
    color: "#FF6D00",
    background: "rgba(255, 109, 0, 0.1)",
    id: 4
  },
  {
    color: "#9A48F1",
    background: "rgba(154, 72, 241, 0.1)",
    id: 5
  },
]



export default function ProgressBar({ percentage, keyColor}) {
  const paletteItem = palette.find(elem => elem.id === keyColor)
  
  return (
    <div>
    <S.Counter><div style={{height:"20px", width: `${percentage > 20 ? percentage*2.7-55 : 10}px`}}></div>{Math.floor(percentage)}%</S.Counter>
    <S.ProgressBarInput
      type="range"
      min={0}
      max={100}
      step={1}
      value={percentage}
      color={paletteItem.color}
      background={paletteItem.background}
    >
    </S.ProgressBarInput>
    </div>
  )
}
