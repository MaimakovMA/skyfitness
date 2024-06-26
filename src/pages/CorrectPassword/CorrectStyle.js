import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  position: fixed; 
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1050;
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;]
  pointer-events: auto; 
  padding: 0;

  }
`

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`

export const LoginName = styled.div`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
`

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  &:disabled {
    background-color: #303030;
  }
`

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`

export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 62px;
    background-color: #580EA2;
    border-radius: 6px;
    margin-left: 4px;
    border: none;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    & a {
      width: 100%;
      height: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.05px;
      color: #FFFFFF;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    &:hover {
      background-color: #3F007D;
    }
    &:active {
      background-color: #271A58;
    }  
`

export const ModalButtonLink = styled(Link)`
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
    &:visited {
        text-decoration: none;
        font-family: 'StratosSkyeng', sans-serif;
        cursor: pointer;
    }
`