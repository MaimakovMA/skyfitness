import styled from 'styled-components'

export const ProgressBarInput = styled.input`
  overflow: hidden;
  background: rgba(86, 94, 239, 0.1);
  border-radius: 22px;
  border: 2px solid #565eef;

  &::-webkit-slider-runnable-track {
    height: 36px;
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    // width: 278px;
    -webkit-appearance: none;
    height: 5px;
    box-shadow: -800px 0 0 800px #565eef;
  }

  -webkit-appearance: none;
  width: 278px;
  height: 36px;
  display: flex;
  align-items: center;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid #565eef;
    height: 12px;
    width: 12px;
    background: #565eef;
    margin-top: -5px;
  }

  &::ms-track {
    width: 100%;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`
export const Counter = styled.span`
position: absolute;
color: white;
padding-top: 7px;
// padding-left: 10px;
display: flex;
`