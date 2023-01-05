import styled from "styled-components";

export const ContactContainer = styled.div`
  background: linear-gradient(to bottom, #17161F 30%, #4F9999);
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px){
    padding: 100px 0;
    height: 100%;
  }
`

export const ContactWrapper = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  max-width: 100vw;
`

export const HeadingWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  max-width: 100vw;
`

export const Header = styled.h1`
  padding-top: 100px;
  text-align: center;
  padding-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #79B791;
  width: 100%;

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  text-align: center;
  font-size: 25px;
  line-height: 24px;
  font-weight: 400;
  color: #426E7A;
  width: 100%;
  padding-bottom: 30px;
`

export const ContactFormWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
`

export const ContactForm = styled.form`
  display: flex; 
  flex-direction: column;
  padding-top: 30px;
  background-color: #427575;
  border-radius: 20px;
  width: 50%;
  @media screen and (max-width: 768px){
    width: 75%;
  }
`
export const ContactText = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  text-align: left;
  width: 80%;
`

export const ContactInput = styled.input`
  padding: 0.5rem; 
  background-color: transparent; 
  color: #ffffff; 
  border-radius: 0.375rem; 
  border-width: 1px; 
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  :focus{
    outline: none;
  }
  @media screen and (max-width: 768px){
    width: 100%
  }
`

export const ContactTextArea = styled.textarea`
  padding: 0.5rem; 
  background-color: transparent; 
  color: #ffffff; 
  border-radius: 0.375rem; 
  border-width: 1px; 
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  :focus{
    outline: none;
  }
  @media screen and (max-width: 768px){
    width: 100%
  }
`

export const ContactSendButton = styled.button`
  display: flex; 
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 1.5rem;
  padding-right: 1.5rem; 
  margin-left: auto;
  margin-right: auto; 
  margin-top: 2rem;
  margin-bottom: 2rem; 
  cursor: pointer;
  color: #ffffff; 
  align-items: center; 
  border-radius: 0.375rem; 
  border-width: 0;
  background-color: #376996;

  &:hover{
    transform: scale(1.03, 1.03);
    transition-duration: 300ms; 
  }
`