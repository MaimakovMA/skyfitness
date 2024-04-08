import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Logo = styled.img`
    padding-top: 32px;
    width: 236px;
`
export const LogoBlockBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;    
`

export const LinkPersonalAccount = styled(Link)`
    margin-right: 25px;
    border-radius: 46px;
    background: rgb(20, 13, 64);
    height: 36px;
    width: 132px;
    margin-top: 26px;
    color: rgb(255, 255, 255);
    // font-family: StratosSkyeng;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
     &:hover {
        background: rgb(45, 31, 121);
    }
    &:active {
        background: rgb(59, 41, 162);
    }
`

export const LogoButton = styled(Link)`
    border-radius: 46px;
    background: rgb(20, 13, 64);
    height: 36px;
    width: 77px;
    margin-top: 26px;
    color: rgb(255, 255, 255);
    // font-family: StratosSkyeng;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
     &:hover {
        background: rgb(45, 31, 121);
    }
    &:active {
        background: rgb(59, 41, 162);
    }
`

export const Heading = styled.h2`
    margin: 0;
    margin-bottom: 30px;
    color: rgb(255, 255, 255);
    // font-family: StratosSkyeng;
    font-size: 20px;
    font-weight: 400;
    line-height: 115%;
    letter-spacing: -0.05px;
    text-align: left;
    padding-top: 15px;
`

export const TitelBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 35px;
`

export const Title = styled.h2`
    margin: 0;
    color: rgb(244, 244, 255);
    font-size: 67px;
    font-weight: 400;
    line-height: 91.5%;
    letter-spacing: -1.17px;
    text-align: left;    
`

export const Sticker = styled.img`
    position: relative;
    
`