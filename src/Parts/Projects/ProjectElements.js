import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  // background: linear-gradient(to bottom, #17161F 15%, #4F9999);
  background: #17161F;
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
  &:hover{
    transition-duration: 200ms;
    box-shadow: 0 4px 6px -1px rgb(177, 156, 217), 0 2px 4px -1px rgb(177, 156, 217);
  }
`

export const ProjectName = styled.h3`
  margin: 0.01px 0 0.5px;
  justify-content: left;
  padding-left: 0.60rem;
  color: #000;
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
`

export const ProjectInformationCloseButton = styled.button`
  float: right;
  background: transparent;
  border: transparent;
  color: white;
  padding-right: 1rem;
  font-size: xx-large;
`

export const ProjectInformationHeader = styled.h1`
  padding-top: 4%;
  text-align: center;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: #79B791;

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`
export const ProjectInformationBody = styled.div`
  display: grid;
  grid-template-columns: 30% 65%;
  grid-template-rows: 33% 33% 33%;
  gap: 10px 20px;
  font-size: 25pt;  
`

export const ProjectInformationFooter = styled.div`

`
