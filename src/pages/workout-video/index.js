import React, { useState } from 'react'
import Header from '../../components/header/header'
import WorkoutTitle from '../../components/workoutTitle/workoutTitle'
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs'
import Video from '../../components/video/video'
import ExercisesAndProgressBlock from '../../components/exercisesAndProgressBlock/exercisesAndProgressBlock'
import ModalQuestionnaire from '../../components/modalQuestionnaire/modalQuestionnaire'
import ModalProgressSuccess from '../../components/modalProgressSuccess/modalProgressSuccess'


export const WorkoutVideoPage = () => {
  const [modalActive, setModalActive] = useState(0)

  return (
    <main style={{ margin: '0 140px 0 140px' }}>
      <Header />
      <WorkoutTitle title={'Йога'} />
      <BreadCrumbs
        arr={['Красота и здоровье',"/",'Йога на каждый день','/','2 день']}
      />
      {modalActive === 1 ? <ModalQuestionnaire setModalActive={setModalActive}/> : ''}
      {modalActive === 2 ? <ModalProgressSuccess/> : ''}
      <Video />
     <ExercisesAndProgressBlock setModalActive={setModalActive}/>
    </main>
  )
}
