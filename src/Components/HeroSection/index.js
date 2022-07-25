import React, {useState} from 'react'
import { Background, Container, BG, Content, SectionH1, SectionH2, SectionParagraph, SectionWrapper, ArrowForward, ArrowRight} from './Elements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const[hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container id = "Home">
        <Background/>
        <Content>
            <SectionH1>
                Lawrence Liu's Personal Portfolio
            </SectionH1>
                <SectionH2>
                    Welcome to my website!
                    <SectionParagraph>
                        I am Lawrence, an aspiring software engineer, but a junior in Stony Brook University. I'm a Computer Science major, a Peer Mentor, an Event Coordinator, and an idealist. I want to use my skills to build and improve upon concepts and applications. I'm always willing for new and challenging projects! 
                    </SectionParagraph>
                </SectionH2>
            <SectionWrapper>
                <Button to = 'contact' onMouseEnter = {onHover} onMouseLeave = {onHover} primary = "true" dark = "true">
                    Get in touch with me! {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </SectionWrapper>
        </Content>
    </Container>
  )
}

export default HeroSection