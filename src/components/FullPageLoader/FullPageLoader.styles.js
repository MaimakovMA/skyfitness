import { styled } from 'styled-components';

export const Box = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const Loader = styled.span`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #6ebeff;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  & ::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #337AB7;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`