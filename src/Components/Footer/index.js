import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {SiHandshake} from 'react-icons/si'
import {Container, Icon, P} from './Elements'

const Footer = () => {
  return (
    <Container>
        <Icon>
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
            <SiHandshake />
        </Icon>
        <P>
            &copy; 2022 lawrenceliu.dev
        </P>
    </Container>
  );
}

export default Footer