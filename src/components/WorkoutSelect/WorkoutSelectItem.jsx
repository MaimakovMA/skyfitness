import { useEffect, useState } from 'react'
import * as S from './WorkoutSelection.styled'
import { useSelector } from 'react-redux'
import { getProgress } from 'api'

export const WorkoutSelectItem = ({
  name,
  type,
  task,
  user_id,
  workout_id,
}) => {
  const [progress, setProgress] = useState()
  useEffect(() => {
    let id = user_id
    getProgress({ id, workout_id }).then((data) => {
      setProgress(data.exercises)
    })
  }, []),
    []

  const result = () => {
    let sumProgress = 0
    if (progress) {
      for (let item in progress) {
        sumProgress += Number(progress[item].quantity)
      }
    }
    if (task === 0) {
      return false
    } else {
      return task === sumProgress
    }
  }

  return (
    <S.SelectItem $isFinished={result()}>
      <S.TitleOfworkoutBlock>
        {name.split('/')[0]}
        {result() ? (
          <S.SelectItemCheckboxImg src="/img/icon-complete.svg" />
        ) : (
          ''
        )}
      </S.TitleOfworkoutBlock>
      <S.DescOfworkoutBlock>
        {name.split('/').splice(1, name.split('/').length).join(' / ')}
      </S.DescOfworkoutBlock>
      <S.SelectItemType>{type}</S.SelectItemType>
    </S.SelectItem>
  )
}
