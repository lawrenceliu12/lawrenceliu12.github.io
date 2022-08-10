import styled from 'styled-components'

export const Container = styled.div
`
  display: none;
  position: fixed; 
  left: 0; 
  flex-direction: column; 
  top: 35%;
  z-index: 2;

  @media (min-width: 1024px) { 
    display: flex; 
  }
`

export const Wrapper = styled.ul``

export const Item = styled.li
`
  display: flex; 
  padding-left: 1rem;
  padding-right: 1rem; 
  background-color: #565656; 
  justify-content: space-between; 
  align-items: center; 
  width: 10rem; 
  height: 3.5rem; 
  margin-left: -100px;
  border-top-right-radius: 0.375rem; 

  &:hover{
    margin-left: -10px;
    transition-duration: 300ms; 
    border-radius: 0.375rem;
  }
  
`

export const MidItem = styled.li
`
  display: flex; 
  padding-left: 1rem;
  padding-right: 1rem; 
  background-color: #565656; 
  justify-content: space-between; 
  align-items: center; 
  width: 10rem; 
  height: 3.5rem; 
  margin-left: -100px;

  &:hover{
    margin-left: -10px;
    transition-duration: 300ms; 
    border-radius: 0.375rem;
  }
  
`

export const BotItem = styled.li
`
  display: flex; 
  padding-left: 1rem;
  padding-right: 1rem; 
  background-color: #565656; 
  justify-content: space-between; 
  align-items: center; 
  width: 10rem; 
  height: 3.5rem; 
  margin-left: -100px;
  border-bottom-right-radius: 0.375rem; 

  &:hover{
    margin-left: -10px;
    transition-duration: 300ms; 
    border-radius: 0.375rem;
  }
`

export const Link = styled.a
`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
`