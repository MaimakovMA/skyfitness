import React from 'react'
import Header from '../../components/header/header'
import WorkoutTitle from '../../components/workoutTitle/workoutTitle'
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs'
import Video from '../../components/video/video'
import ExercisesAndProgressBlock from '../../components/exercisesAndProgressBlock/exercisesAndProgressBlock'


export const WorkoutVideoPage = () => {
  return (
    <main style={{ margin: '0 140px 0 140px' }}>
      <Header />
      <WorkoutTitle title={'Йога'} />
      <BreadCrumbs
        arr={['Красота и здоровье',"/",'Йога на каждый день','/','2 день']}
      />
      <Video />
     <ExercisesAndProgressBlock/>
    </main>
  )
}
