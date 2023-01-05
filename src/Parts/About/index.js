import React, {useState} from 'react'
import { Background, Container, Content, SectionH1, SectionH2, SectionParagraph, SectionWrapper, ArrowDownward, ArrowDown, SectionImage} from './Elements';
import { Button } from './../../Components/ButtonElement';
import me from '../../Images/me.JPG'

const HeroSection = () => {
  const[hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container id = "home">
        <Background/>
        <Content>
            <SectionH1>
                Lawrence Liu's Personal Portfolio
            </SectionH1>
            {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '30px'}}> */}
            <SectionH2>
                Welcome to my website!
                <SectionParagraph>
                    I am Lawrence, an aspiring software engineer, but a junior in Stony Brook University. I'm a Computer Science major, a Peer Mentor, an Event Coordinator, and an idealist. I want to use my skills to build and improve upon concepts and applications. I'm always willing for new and challenging projects! 
                </SectionParagraph>
            </SectionH2>
                {/* <img src={me} style ={{maxHeight: '400px', borderRadius: '20px'}} alt=""/> */}
            {/* </div> */}
            <SectionWrapper>
                <Button to = 'contact' smooth ={true} duration = {800} spy = {true} onMouseEnter = {onHover} onMouseLeave = {onHover} primary = "true" dark = "true">
                    Get in touch with me! {hover ?  <ArrowDownward/>  : <ArrowDown/>}
                </Button>
            </SectionWrapper>
        </Content>
    </Container>
  )
}

export default HeroSection