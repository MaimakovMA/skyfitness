import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  // color: #000000;
  // max-width: 1440px;
  // margin: 0 auto;
  background-color: #FAFAFA;
  // display: flex;
  // flex-direction: column;
  // align-content: center;
  // flex-wrap: wrap;
  
    padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  // background: #271a58;
  min-height: 100vh;


`
export const Logo = styled.img`
    padding-top: 32px;
    padding-left: 122px;
    width: 236px;
`

export const LogoBox = styled(Link)``

export const LogoChoose = styled.img`
    padding-top: 30px;
    
`

export const User = styled.div`
color: rgb(0, 0, 0);
font-family: StratosSkyeng;
font-size: 24px;
font-weight: 400;
line-height: 32px;
letter-spacing: -0.1px;
text-align: right;
font-size: 24px;
position: absolute;
width: 80px;
height: 32px;
left: 1197px;
right: -1108.64px;
top: 33px;
bottom: -15px;
`

export const Styled = styled.section`

`

export const LoginPassName = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-bottom: 20px;
  `

  export const LogoUser = styled.img`
  position: absolute;
width: 50px;
height: 50px;
left: 1132px;
right: -1013.64px;
top: 24px;
bottom: -24px;
  `