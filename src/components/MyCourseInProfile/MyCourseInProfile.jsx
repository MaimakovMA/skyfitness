import * as S from './MyCourseInProfile.styles';
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
//import { useGetWorkoutsQuery } from 'store/slices/apiSlice.js';


//import { Cards } from '../Cards/Cards.jsx';

function MyCourseInProfile() {

  const { course } = useSelector(({ user }) => user);
  

  const { id } = useParams();
  const { workoutsList } = useSelector(({ workouts }) => workouts);
  console.log(workoutsList)
  
  /*const { data = {} } = useGetWorkoutsQuery({ id });
  console.log(data)*/

    return (
        <S.HeaderStyleMyProfile>
          <S.NameCourseUser>Мои Курсы</S.NameCourseUser>
          {course.map(( item, id ) => {
              const { name ,image } = item;
              return (
          <S.BlockCard   key={name}>  
          <S.Card style={{ backgroundImage: `url(${image})`}}>
            <S.CourseName >{name}</S.CourseName>
          </S.Card>
          </S.BlockCard>
          )})}
    </S.HeaderStyleMyProfile>
  )
}

export default MyCourseInProfile