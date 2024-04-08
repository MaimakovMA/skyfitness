import { styled } from 'styled-components';

export const Conteiner = styled.div`
    background-color: rgb(39, 26, 88);
    padding-right: 76px;
    padding-left: 140px;
`

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 35px;
`

export const Anchor = styled.a``

export const Button = styled.a`
    height: 50px;
    width: 156px;
    border-radius: 46px;
    background: rgb(199, 233, 87);
    color: rgb(0, 0, 0);
    font-family: StratosSkyeng;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
     &:hover {
        background: rgb(218, 242, 137);
    }
    &:active {
        background: rgb(235, 255, 171);
    }
`