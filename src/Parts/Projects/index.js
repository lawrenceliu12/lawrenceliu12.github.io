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
    ProjectInformationCloseButton, 
    ProjectInformationPicture } from './ProjectElements'
import {MdClose} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import C from '../../Images/C.png'
import googlesheets from '../../Images/googlesheets.png'
import zork from '../../Images/zork.png'
import playlister from '../../Images/playlister.png'
import logo from '../../Images/logo1.png'
import VAAMP from '../../Images/VAAMP.png'

const Projects = () => {
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalPicture, setModalPicture] = useState("");
    const [modalLink, setModalLink] = useState("");

    const projectDescriptions = [
        {
            id: 1,
            src: googlesheets,
            title: "Google Sheets Logger",
            description: "A package that is accessable in C# that performs excel functions onto a spreadsheet using Google Sheet's personal API. This package is built specifically to assist logging and data management to be more efficient in showcasing.",
            link: 'https://github.com/sbucampusres/CSharp-Logger'
        },
        {
            id: 2,
            src: VAAMP,
            title: "VAAMP",
            description: "A program called Voice Activated AI-Made Portrait utilizes speech to text to generate four AI portraits based off their prompt. The picture is then shuffled onto a list that is then outputted onto a display. User is able to skip back and forth pictures.",
            link: 'https://google.com'
        },
        {
            id: 3,
            src: playlister,
            title: "Playlister",
            description: "A full web application that lets users create a playlist of their favorite songs built from MongoDB and React. Playlists can be published, commented, and liked/disliked from users that are logged in.",
            link: 'https://github.com/lawrenceliu12/playlister_final'
        },
        {
            id: 4,
            src: zork,
            title: "Zork",
            description: "A text-based story adventure game built from Java where users can create and edit their own adventure. Each path leads them down a new scenario, where there is an end scenario where they have either won or lost. Inspired from the original Zork. ",
            link: 'https://github.com/lawrenceliu12/CSE-214-Data-Structures-and-Algorithms-Projects/tree/main/Zork%20-%20Binary%20Tree'
        },
        {
            id: 5,
            src: C,
            title: "Dynamic Memory Allocator",
            description: "A memory allocator simulator that does the same operations as malloc, free, and realloc from C, designed for the x86-64 computer architecture. This program allocates space in memory using a segregated free list.",
            link: 'https://google.com'
        },
        {
            id: 6,
            src: logo,
            title: "Personal Website",
            description: "A website that is built to showcase my own personal projects and experiences during my years in college, and let you viewers get to know more about me!",
            link: 'https://github.com/lawrenceliu12/Personal-Website'
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
                        projectDescriptions.map(({ id, src, title, description, link }) => (
                            <ProjectBox key={id} onClick={(event) => {
                                if (!modal){
                                    event.stopPropagation();
                                    toggleModal(); 
                                    setModalTitle(title); 
                                    setModalDescription(description);
                                    setModalPicture(src);
                                    setModalLink(link);}}
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
                                <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <ProjectInformationPicture src={modalPicture} alt=""/>
                                    <FaGithub style={{marginTop: 'auto', fontSize: '25pt', cursor: 'pointer'}} onClick = {(event) => {
                                        event.stopPropagation();
                                        window.open(modalLink, "_blank");
                                        }}/>
                                    <span style={{fontSize: '12pt'}}>
                                            Check out the repository!
                                    </span>
                                </div>
                            </ProjectInformationBody> 
                        </ProjectInformation> : ''}
                </Item>
            </InformationWrapper>
        </Container>
    )
}

export default Projects