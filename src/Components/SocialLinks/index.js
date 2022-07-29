import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Container, Wrapper, Item, Link} from './Elements'

const SocialLinks = () => {
  return (
    <Container>
        <Wrapper>
            <Item>
                <Link href="">
                    <>
                    LinkedIn<FaLinkedin size={30}/>
                    </>
                </Link>
            </Item> 
        </Wrapper>
    </Container>
  )
}

export default SocialLinks