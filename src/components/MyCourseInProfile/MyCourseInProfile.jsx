import { useEffect, useState } from 'react';
import * as S from './MyCourseInProfile.styles';
import { getAllCourses } from 'api';
import { UserLoggedIn } from 'hooks/UserLoggedIn';

function MyCourseInProfile() {

  const [allCourses, setAllCourses] = useState()
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
    console.log(`Тренировки по курсу "${item._id}"`)
    console.log(`В нём будут: ${item.workouts}`)
  }

  UserLoggedIn();

  return (
    <S.HeaderStyleMyProfile>
      <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
      <S.TableCourses>
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

export default MyCourseInProfile
