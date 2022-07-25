import React from 'react'
import {GoThreeBars} from 'react-icons/go'
import {Nav, Container, Logo, MobileIcon, Items, Menu, Links, Button, ButtonLink} from './Elements'

function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <Container>
            <Logo to = '/'>lawrence</Logo>
            <MobileIcon onClick={toggle}>
              <GoThreeBars />
            </MobileIcon>
            <Menu>
              <Items>
                <Links to = "home">About</Links>
              </Items>
              <Items>
                <Links to = "experiences">Experiences</Links>
              </Items>
              <Items>
                <Links to = "projects">Projects</Links>
              </Items>
              <Items>
                <Links to = "contact">Contact</Links>
              </Items>
            </Menu>
            <Button>
              <ButtonLink to = "/resume">Resume</ButtonLink>
            </Button>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar