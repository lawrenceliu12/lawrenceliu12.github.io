import React, { useState } from 'react'
import { Container, InformationWrapper, TextWrapper, Heading, Subtitle, Item, ProjectBox, ProjectName, ProjectImage, ProjectInformation, ProjectInformationHeader } from './ProjectElements'
import valPic from '../../Images/valPic.png'
import reactWeather from '../../Images/reactWeather.jpg'

const Projects = () => {
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const projectDescriptions = [
        {
            id: 1,
            src: valPic,
            title: "Google Sheets Logger",
            description: "asdf",
        },
        {
            id: 2,
            src: reactWeather,
            title: "Valorant Store Discord Bot",
            description: "asdf",
        },
        {
            id: 3,
            src: valPic,
            title: "Printer Dashboard",
            description: "asdf",
        },
        {
            id: 4,
            src: valPic,
            title: "Zork",
            description: "asdf",
        },
        {
            id: 5,
            src: valPic,
            title: "Memory Allocation",
            description: "asdf",
        },
        {
            id: 6,
            src: valPic,
            title: "Personal Website",
            description: "asdf",
        },
    ]

    function toggleModal() {
        setModal(!modal);
    }

    return (
        <Container name="projects" onClick={() => {setModal(false)}}>
            <InformationWrapper>
                <TextWrapper>
                    <Heading>
                        Projects
                    </Heading>
                    <Subtitle>
                        Summary of all the projects I personally worked on
                    </Subtitle>
                </TextWrapper>
                <Item>
                    {
                        projectDescriptions.map(({ id, src, title, description }) => (
                            <ProjectBox key={id} onClick={(event) => {event.stopPropagation(); toggleModal(); setModalTitle(title);}}>

                                <ProjectImage src={src} alt="" />
                                <ProjectName>{title}</ProjectName>
                            </ProjectBox>
                        ))
                    }
                    {modal ?
                        <ProjectInformation>
                            <ProjectInformationHeader>
                                {modalTitle}
                            </ProjectInformationHeader>
                        </ProjectInformation> : ''}
                </Item>
            </InformationWrapper>
        </Container>
    )
}

export default Projects