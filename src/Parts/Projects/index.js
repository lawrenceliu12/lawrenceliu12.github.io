import React, { useState } from 'react'
import { Container, 
    InformationWrapper, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    Item, 
    ProjectBox, 
    ProjectName, 
    ProjectImage, 
    ProjectInformation, 
    ProjectInformationHeader,
    ProjectInformationBody,
    ProjectInformationCloseButton, } from './ProjectElements'
import {MdClose} from 'react-icons/md'
import valPic from '../../Images/valPic.png'
import reactWeather from '../../Images/reactWeather.jpg'

const Projects = () => {
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalPicture, setModalPicture] = useState("");

    const projectDescriptions = [
        {
            id: 1,
            src: valPic,
            title: "Google Sheets Logger",
            description: "A package that is accessable in C# that performs excel functions onto a spreadsheet using Google Sheet's personal API. This package is built specifically to assist logging and data management to be more efficient in showcasing.",
        },
        {
            id: 2,
            src: reactWeather,
            title: "Valorant Store Discord Bot",
            description: "A bot that is built specifically from the use of Discord's API in Python. It acts as a makeshift client from the Valorant server through HTTP requests that scrapes data from user accounts and outputs it in readable data.",
        },
        {
            id: 3,
            src: valPic,
            title: "Playlister",
            description: "A full web application that lets users create a playlist of their favorite songs built from MongoDB and React. Playlists can be published, commented, and liked/disliked from users that are logged in.",
        },
        {
            id: 4,
            src: valPic,
            title: "Zork",
            description: "A text-based story adventure game built from Java where users can create and edit their own adventure. Each path leads them down a new scenario, where there is an end scenario where they have won. Inspired from the original Zork. ",
        },
        {
            id: 5,
            src: valPic,
            title: "Dynamic Memory Allocator",
            description: "A memory allocator simulator that does the same operations as malloc, free, and realloc from C, designed for the x86-64 computer architecture. This program allocates space in memory using a segregated free list.",
        },
        {
            id: 6,
            src: valPic,
            title: "Personal Website",
            description: "A website that is built to showcase my own personal projects and experiences during my years in college, and let you viewers get to know more about me!",
        },
    ]

    function toggleModal() {
        setModal(!modal);
    }

    return (
        <Container name="projects">
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
                            <ProjectBox key={id} onClick={(event) => {
                                console.log(modal);
                                if (!modal){
                                    event.stopPropagation();
                                    toggleModal(); 
                                    setModalTitle(title); 
                                    setModalDescription(description);
                                    setModalPicture(src);}}
                                }>
                                <ProjectImage src={src} alt="" />
                                <ProjectName>{title}</ProjectName>
                            </ProjectBox>
                        ))
                    }
                    {modal ?
                        <ProjectInformation>
                            <ProjectInformationCloseButton onClick={(event) => {
                                event.stopPropagation();
                                toggleModal();
                            }}>
                                <MdClose style={{cursor: 'pointer'}}/>
                            </ProjectInformationCloseButton>
                            <ProjectInformationHeader>
                                {modalTitle}
                            </ProjectInformationHeader>
                            <hr style={{color: 'white'}}/>
                            <ProjectInformationBody>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {modalDescription}
                                </div>
                                <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={modalPicture} alt="" style={{width: '75%', height: 'auto'}}/>
                                </div>
                            </ProjectInformationBody> 
                        </ProjectInformation> : ''}
                </Item>
            </InformationWrapper>
        </Container>
    )
}

export default Projects