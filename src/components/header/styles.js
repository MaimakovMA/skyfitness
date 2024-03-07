import styled from 'styled-components'

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 66px 0;
`
export const UserNameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const UserName = styled.span`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  text-align: right;
`

export const UserNameButton =styled.button`
cursor: pointer;
border: none;
background: none;
outline: none;
`
