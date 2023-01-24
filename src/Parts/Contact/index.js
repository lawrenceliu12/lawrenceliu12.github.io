import React from 'react'
import { ContactContainer, ContactWrapper, HeadingWrapper, Header, Subtitle, ContactFormWrapper, ContactForm, ContactText, ContactInput, ContactTextArea, ContactSendButton } from './ContactElements'

const Contact = () => {
    return (
        <ContactContainer name = "contact">
            <ContactWrapper>
                <HeadingWrapper>
                    <Header>
                        Contact Me
                        <Subtitle>
                            I'd like to get to know you guys more!
                        </Subtitle>
                    </Header>
                </HeadingWrapper>
            </ContactWrapper>
            <ContactFormWrapper>
                    <ContactForm action={"https://getform.io/f/6270982e-8743-4e6c-8460-2ed7de2dc766"} method="POST">
                        <ContactText>
                            I am always open for a conversation so we can get to know each other better! Feel free to contact me with your name and email below. Thank you for going through my portfolio!
                        </ContactText>
                        <ContactInput type="text" name = "name" required = "required" placeholder = "Name"/>
                        <ContactInput type="text" name = "email" required = "required" placeholder = "Email"/>
                        <ContactTextArea name = "message" required = "required" placeholder = "Message" rows="10" />
                        <ContactSendButton>
                            Let's connect
                        </ContactSendButton>
                    </ContactForm>
                </ContactFormWrapper>
        </ContactContainer>
    )
}

export default Contact