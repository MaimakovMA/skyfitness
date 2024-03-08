import styled from 'styled-components';

export const ProgressBarInput = styled.input`
overflow: hidden;
// width: 278px;
height: 36px;
-webkit-appearance: none;
background-color: transparent;
border-radius: 22px;
border: 2px solid #565EEF;
display: flex;
align-items: center;

&::-webkit-slider-runnable-track {
  height: 36px;
  -webkit-appearance: none;
  color: #13bba4;
}

&::-webkit-slider-thumb {
  // width: 278px;
  -webkit-appearance: none;
  height: 5px;
  background: #2e2e2e;
  box-shadow: -800px 0 0 800px #565EEF;
}

-webkit-appearance: none;
width: 278px;
height: 36px;
display: flex;
align-items: center;

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid #565EEF;
  height: 12px;
  width: 12px;
  background: #565EEF;
  margin-top: -5px;
}

&::ms-track {
  width: 100%;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

// &::-webkit-slider-runnable-track {
//   height: 5px;
//   background-color: #2E2E2E;
// }

`
