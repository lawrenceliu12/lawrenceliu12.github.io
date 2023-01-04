import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  background: linear-gradient(to bottom, #17161F 30%, #4F9999);
  /* background: #17161F; */
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px){
    padding: 100px 0;
    height: 100%;
  }
`

export const InformationWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const TextWrapper = styled.div`
  max-width: 1100px;
  padding-top: 10px;
  padding-bottom: 30px;
`

export const Heading = styled.h1`
  padding-top: 60px;
  text-align: center;
  padding-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #79B791;

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  text-align: center;
  max-width: 1100px;
  font-size: 25px;
  padding-bottom: 1rem;
  line-height: 24px;
  font-weight: 400;
  color: #426E7A;
`

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding-left: 3rem;
  padding-right: 3rem;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr, 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const ProjectBox = styled.div`
  padding: 1rem;
  border-radius: 1.25rem; 
  border: 1px solid transparent;
  box-shadow: 0 4px 6px -1px rgb(255, 255, 255), 0 2px 4px -1px rgb(255, 255, 255); 
  height: calc((100vh - 300px)/2);
  max-height: 250px;
  max-width: calc((1200px - 300px) / 3);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover{
    transition-duration: 200ms;
    box-shadow: 0 4px 6px -1px rgb(177, 156, 217), 0 2px 4px -1px rgb(177, 156, 217);
    transform: scale(1.03, 1.03);
  }
`

export const ProjectName = styled.h3`
  margin: 0.01px 0 0.5px;
  justify-content: left;
  padding-left: 0.60rem;
  color: cornflowerblue;
  padding-top: 15px;
`

export const ProjectImage = styled.img`
  transition-duration: 200ms; 
  border-radius: 1.25rem; 
  max-height: 70%;
  max-width: 100%;
  &:hover{
    transform: scale(1.03, 1.03);
  }
`

export const ProjectInformation = styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid cornflowerblue;
  border-radius: 1.25rem;
  background: #17161F;
  /* background: linear-gradient(to bottom, #17161F 15%, #4F9999); */

  @media screen and (max-width: 1024px){
    width: 80%;
  }

  @media screen and (max-width: 700px){
    width: 95%;
  }
`

export const ProjectInformationCloseButton = styled.div`
  margin-top: 1%;
  float: right;
  background: transparent;
  border: transparent;
  color: white;
  padding-right: 1rem;
  font-size: xx-large;
  width: 5%;
`

export const ProjectInformationHeader = styled.h1`
  padding-top: 2%;
  text-align: center;
  font-size: 40px;
  width: 100%;
  line-height: 1.1;
  font-weight: 600;
  color: #79B791;
  padding-bottom: 2%;
  padding-left: 5%;

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`
export const ProjectInformationBody = styled.div`
  padding-left: 2%;
  padding-top: 2%;
  display: grid;
  grid-template-columns: 48% 50%;
  font-size: 20pt;
  word-wrap: break-word;
  justify-content: center;
  padding-bottom: 2%;

  @media screen and (max-width: 1024px){
    grid-template-columns: 100%;
    font-size: 25px;
  }

  @media screen and (max-width: 700px){
    grid-template-columns: 100%;
    font-size: 20px;
  }
`

export const ProjectInformationFooter = styled.div`

`

export const ProjectInformationPicture = styled.img`
  width: 75%;
  height: auto;
  margin-top: auto;
  
  @media screen and (max-width: 1024px){
    display: none;
  }

  @media screen and (max-width: 700px){
    display: none;
  }
`
