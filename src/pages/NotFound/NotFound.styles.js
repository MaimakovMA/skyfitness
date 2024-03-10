import { styled } from 'styled-components';

export const Conteiner = styled.div`
    background-color: rgb(39, 26, 88);
`

export const TitelNotfound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding-top: 250px;
`

export const TitelNotfoundErrorText = styled.h1`
    font-family: StratosSkyeng;
    font-size: 160px;
    font-style: normal;
    font-weight: 400;
    line-height: 168px;
    margin: 0px;
    color: #FFFFFF;
`

export const TitelNotfoundErrorInformation = styled.h2`
    font-family: StratosSkyeng;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    display: flex;
    margin: 0px;
    color: #FFFFFF;
`

export const TitelNotfoundInfo = styled.h3`
    color: #4E4E4E;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    color: #FFFFFF;
`

export const NotfoundButton = styled.button`
    border-radius: 6px;
    background: var(--palette-purple-90, #580EA2);
    width: 278px;
    height: 52px;
    flex-shrink: 0;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
`