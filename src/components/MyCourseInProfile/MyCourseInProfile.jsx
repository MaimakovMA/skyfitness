import { useEffect, useState } from 'react'
import * as S from './MyCourseInProfile.styles'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { getAllCourses } from 'api'
import WorkoutSelect from 'components/WorkoutSelect/WorkoutSelect'

function MyCourseInProfile() {
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
          ? allCourses.map((item, id) => {
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

export default MyCourseInProfile
