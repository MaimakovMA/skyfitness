import styled from 'styled-components'

export const ModalForm = styled.div`
  --modal-width: 444px;
  --modal-height: 554px;

  position: fixed;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 0px 50px rgba(0, 0, 0, 0.5);
`

export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`
export const InputLabel = styled.p`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: left;
`

export const ModalInput = styled.input`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 8px 8px 10px;

  &::placeholder {
    color: rgb(208, 206, 206);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    text-align: left;
  }
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */

    &:focus {
      outline: none;
    }
  }
`

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 46px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;

  &:disabled {
    background-color: #303030;
  }
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`
