import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: #17161F;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100 px;
`;

export const Logo = styled(LinkScroll)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-200%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 55px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Items = styled.li`
  height: 60px;
`;

export const Links = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #01bf71;
  }
  &:hover{
    transition: all 0.2s ease-in-out;
    color: #4F9999;
  }
`;

export const Button = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const ButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #333;
  white-space: nowrap;
  padding: 8px 16px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`