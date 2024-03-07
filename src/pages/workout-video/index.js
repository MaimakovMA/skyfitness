import React from 'react'
import Header from '../../components/header/header'
import WorkoutTitle from '../../components/workoutTitle/workoutTitle'
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs'
import Video from '../../components/video/video'

export const WorkoutVideoPage = () => {
  return (
    <main style={{ margin: '0 140px 0 140px' }}>
      <Header />
      <WorkoutTitle title={'Йога'} />
      <BreadCrumbs
        arr={['Красота и здоровье', 'Йога на каждый день', '2 день']}
      />
      <Video />
      <div>
        <div>
          <h2>УПРАЖНЕНИЯ</h2>
          <ul>
            <li>УПРАЖНЕНИЕ</li>
            <li>УПРАЖНЕНИЕ</li>
            <li>УПРАЖНЕНИЕ</li>
          </ul>
        </div>
        <div>
          <h2>МОЙ ПРОГРЕСС ПО ТРЕНИРОВКЕ</h2>
          <ul>
            <li>
              <span>УПРАЖНЕНИЕ</span>
              <input type="range"></input>
            </li>
            <li>
              <span>УПРАЖНЕНИЕ</span>
              <input type="range"></input>
            </li>
            <li>
              <span>УПРАЖНЕНИЕ</span>
              <input type="range"></input>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
