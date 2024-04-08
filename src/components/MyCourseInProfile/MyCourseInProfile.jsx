import { useEffect, useState } from 'react'
import * as S from './MyCourseInProfile.styles'
import { getAllCourses } from 'api'
import { WorkoutSelect } from 'components/WorkoutSelect/WorkoutSelect'

export const MyCourseInProfile = () => {
  const [allCourses, setAllCourses] = useState()
  const [modalActive, setModalactive] = useState(false)

  useEffect(() => {
    getAllCourses().then((data) => {
      let arr = []
      for (let item in data) {
        arr.push(data[item])
      }
      setAllCourses(arr)
    })
  }, [])

  const handleClickCourse = (item) => {
    setModalactive(item)
  }


  return (
    <S.HeaderStyleMyProfile onClick={() => modalActive ? setModalactive(false) : ''}>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
      <S.TableCourses>
        {modalActive ? <WorkoutSelect workouts_id={modalActive.workouts} /> : ''}
        {allCourses
          ? allCourses.map((item) => {
              const { name, image } = item
              return (
                <S.BlockCard key={name} onClick={() => handleClickCourse(item)}>
                  <S.Card style={{ backgroundImage: `url(${image})` }}>
                    <S.CourseName>{name}</S.CourseName>
                  </S.Card>
                </S.BlockCard>
              )
            })
          : ''}
      </S.TableCourses>
    </S.HeaderStyleMyProfile>
  )
}


