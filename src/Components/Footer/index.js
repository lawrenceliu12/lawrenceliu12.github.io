import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {SiHandshake} from 'react-icons/si'
// import {Container, Wrapper, Logo, Icon} from './Elements'
import {Container, Icon, P} from './Elements'
// import "./Footer.css"

const Footer = () => {
  return (
    // <Container>
    //     <Wrapper>
    //         <Icon onClick={toggle}>
    //             <FaFacebook />
    //         </Icon>
    //         <Icon onClick={toggle}>
    //             <FaGithub />
    //         </Icon>
    //         <Icon onClick={toggle}>
    //             <FaLinkedin />
    //         </Icon>
    //         <Icon onClick={toggle}>
    //             <FaInstagram />
    //         </Icon>
    //         <Icon onClick={toggle}>
    //             <SiHandshake />
    //         </Icon>
    //     </Wrapper>
    // </Container>
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