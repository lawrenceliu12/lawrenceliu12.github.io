import React from 'react'
import {GoThreeBars} from 'react-icons/go'
import {Nav, Container, Logo, MobileIcon, Items, Menu, Links} from './Elements'

function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <Container>
            <Logo to = 'home' smooth ={true} duration = {500} spy = {true}>lawrence</Logo>
            <MobileIcon onClick={toggle}>
              <GoThreeBars />
            </MobileIcon>
            <Menu>
              <Items>
                <Links to = "home" smooth ={true} duration = {500} spy = {true}>About</Links>
              </Items>
              <Items>
                <Links to = "projects" smooth ={true} duration = {500} spy = {true}>Projects</Links>
              </Items>
              <Items>
                <Links to = "experiences" smooth ={true} duration = {500} spy = {true}>Experiences</Links>
              </Items>
              <Items>
                <Links to = "contact" smooth ={true} duration = {500} spy = {true}>Contact</Links>
              </Items>
            </Menu>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar