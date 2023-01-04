import React from 'react';
import {Container, ClosedIcon, Icon, Wrapper, Menu, Link} from './Elements';

function Sidebar({isOpen, toggle}) {
  return (
    <Container isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick = {toggle}>
            <ClosedIcon />
        </Icon>
        <Wrapper>
            <Menu> <Link to = "home" onClick = {toggle}>About</Link> </Menu>
            <Menu> <Link to = "projects" onClick = {toggle}>Projects</Link> </Menu>
            <Menu> <Link to = "experiences" onClick = {toggle}>Experiences</Link> </Menu>
            <Menu> <Link to = "contact" onClick = {toggle}>Contact</Link> </Menu>
        </Wrapper>
    </Container>
  )
}

export default Sidebar