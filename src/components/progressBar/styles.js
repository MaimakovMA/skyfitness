import styled from 'styled-components';

export const ProgressBarInput = styled.input`
  overflow: hidden;
  background: ${(props) => (props.background ? props.background : 'white')};
  border-radius: 22px;
  border: 2px solid ${(props) => (props.color ? props.color : '#565eef')};

  &::-webkit-slider-runnable-track {
    height: 36px;
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    // width: 278px;
    -webkit-appearance: none;
    height: 5px;
    box-shadow: -800px 0 0 800px ${(props) => (props.color ? props.color : '#565eef')};;
  }

  -webkit-appearance: none;
  width: 278px;
  height: 36px;
  display: flex;
  align-items: center;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid ${(props) => (props.color ? props.color : '#565eef')};;
    height: 12px;
    width: 12px;
    background: ${(props) => (props.color ? props.color : '#565eef')};;
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
