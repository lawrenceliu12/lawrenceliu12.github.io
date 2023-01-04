import React from 'react'
import {Container, Wrapper, HeadingWrapper, Header, Subtitle, ExperienceWrapper, ExperienceBox, ExperienceImage, ExperienceName, ExperienceTime, ExperienceDescription, ExperienceOrganization} from './ExperienceElements'
import campusresidences from '../../Images/campusresidences.jpg'
import ceas from '../../Images/ceas.jpg'
import casb from '../../Images/casb.png'

const Experiences = () => {

const experienceDescriptions = [
    {
        id: 1,
        src: campusresidences,
        title: "Full-Stack Developer",
        organization: "Campus Residence's IT",
        time: "March 2022 - Present",
        description: "I work in a team with 5 full-stack developing students. We work specifically on creating and managing web applications projects within the Campus Residence's IT department. I am mostly focused on working with backend development and making sure the proper data is sent to the frontend. But, I also occassionally work on frontend development whenever needed. Our applications are heavily utilized throughout multiple teams on campus.",
    },
    {
        id: 2,
        src: campusresidences,
        title: "Student Technician",
        organization: "Campus Residence's IT",
        time: "August 2021 - Present",
        description: "I work in a small team of 16 other student technicians, which monitor and resolve any IT related problems on campus. We make sure that technology is up to date by performing assessments on computers, printers, and TV's used by staff and students. I also manage the problems seen on campus through a ticketing system, with an average resolution time within 3 days and an average of 8 tickets resolved within a week.",
    },
    {
        id: 3,
        src: ceas,
        title: "Peer Mentor",
        organization: "College Of Engineering and Applied Sciences",
        time: "May 2022 - Present",
        description: "My inability to get out of the high school mentality almost costed me being accepted into the computer science program. I was very stubborn and unable to grow, which caused a lot of issues as a freshman. Being a Peer Mentor allowed me to ensure that my mentees would not encounter the same issue as me, and I would be able to provide them the knowledge and guidance that is needed for their assimilation to College and success. ",
    },
    {
        id: 4,
        src: casb,
        title: "Event Coordinator",
        organization: "Chinese Association at Stony Brook (CASB)",
        time: "September 2021 - Present",
        description: "As an Event Coordinator for an organization, I focus mostly on making sure events are planned to the utmost detail as possible. I book available rooms and venue spots located around campus to host events that range from 100-300 students. As an organization, we focus on promoting the diverse Chinese culture, and as an Event Coordinator, I make sure that these events uphold these values and messages for students to learn about."
    },
]

return (
    <Container name = "experiences">
        <Wrapper>
            <HeadingWrapper>
                <Header>
                    Experiences
                </Header>
                <Subtitle>
                    Summary of my experiences thus far
                </Subtitle>
            </HeadingWrapper>
            <ExperienceWrapper>
                {
                    experienceDescriptions.map(({id, src, title, organization, time, description}) => (
                        <ExperienceBox key = {id}>
                            <ExperienceTime>
                                {time}
                            </ExperienceTime>
                            <ExperienceImage src = {src} alt = ""/>
                            <ExperienceName>
                                {title}
                                <ExperienceOrganization>
                                    {organization}
                                </ExperienceOrganization>
                            </ExperienceName>
                            <ExperienceDescription>
                                {description}
                            </ExperienceDescription>
                        </ExperienceBox>
                    ))
                }
            </ExperienceWrapper>
        </Wrapper>
    </Container>
)
}

export default Experiences