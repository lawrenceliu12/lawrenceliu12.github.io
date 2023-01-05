import styled from 'styled-components'
import {GoX} from 'react-icons/go'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); 
  background-color: #000000; 
  background-color: #17161F; 
  display: grid;
  align-items:center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen? '100%': '0')};
  top: ${({ isOpen }) => (isOpen? '0': '-100%')};
`

export const ClosedIcon = styled(GoX)`
  color: #fff
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const Wrapper = styled.div`
  color: #fff;
`

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 20px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 20px);
  }
`

export const Link = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover{
    color: #4F9999;
    transition: 0.2s ease-in-out;
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #4F9999;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 60px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #1D3461;
    color: #010606;
  }
`