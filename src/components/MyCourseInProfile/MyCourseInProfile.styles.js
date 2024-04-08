import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyleMyProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
`

export const TableCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 35px;
`
export const NameCourseUser = styled.p`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  margin-bottom: 60px;
`

export const BlockCard = styled(NavLink)`
  width: 360px;
`

export const Card = styled.div`
  background: tracnsparent;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
  2x;
  grid-column: span 3;
  color: black;
  height: 480px;
  width: 360px;
  border-radius: 30px;
  margin-top: 20px;
  display: inline-block;
  background-position: 50% 50%;
  background-size: auto;
  :hover{
  transform: scale(1.03);
  transition: 2seconds ease-in-out;
  }
  @media (max-width: 1274px) {
    height: 400px;
    width: 300px;
  }
  @media (max-width: 1024px) {
    height: 400px;
    width: 300px;
  }
`

export const CourseName = styled.h2`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.5px;
  width: 290px;
  padding-top: 30px;
  padding-left: 30px;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
`
