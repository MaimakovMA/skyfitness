import styled from 'styled-components'

export const ModalForm = styled.div`
  --modal-width: 444px;
  --modal-height: 360px;

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
  text-align: center;
`
