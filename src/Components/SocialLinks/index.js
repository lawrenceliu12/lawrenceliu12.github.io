import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Container, Wrapper, Item, MidItem, BotItem, Link} from './Elements'
import resume from '../../Lawrence_Liu_Resume.pdf'

const SocialLinks = () => {
  return (
    <Container>
        <Wrapper>
            <Item>
              <Link href='https://linkedin.com/in/liu-lawrence' target="_blank">
                <>
                  LinkedIn<FaLinkedin size={30}/>
                </>
              </Link>
            </Item>
            <MidItem>
              <Link href='https://github.com/lawrenceliu12' target="_blank">
                <>
                  Github<FaGithub size={30}/>
                </>
              </Link>
            </MidItem> 
            <MidItem>
              <Link href='mailto:lawrenceliu1212@gmail.com'>
                <>
                  Mail<HiOutlineMail size={30}/>
                </>
              </Link>
            </MidItem>
            <BotItem>
              <Link href={resume} target="_blank" download={true}>
                <>
                  Resume<BsFillPersonLinesFill size={30}/>
                </>
              </Link>
            </BotItem>
        </Wrapper>
    </Container>
  )
}

export default SocialLinks