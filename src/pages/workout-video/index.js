import React from 'react'
import Header from '../../components/header/header'

export const WorkoutVideoPage = () => {
  return (
    <>
      <Header/>
      <h1>ЗАГОЛОВОК</h1>
      <span>ХЛЕБНЫЕ КРОШКИ</span>
      <video></video>
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
    </>
  )
}
