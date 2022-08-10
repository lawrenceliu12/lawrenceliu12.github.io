import styled from 'styled-components'

export const Container = styled.div
`
  display: flex; 
  position: fixed; 
  left: 0; 
  flex-direction: column; 
  top: 35%;
  z-index: 2;
`

export const Wrapper = styled.ul``

export const Item = styled.li
`
  display: flex; 
  padding-left: 1rem;
  padding-right: 1rem; 
  background-color: #000000; 
  justify-content: space-between; 
  align-items: center; 
  width: 10rem; 
  height: 3.5rem; 
`

export const Link = styled.a
`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
`