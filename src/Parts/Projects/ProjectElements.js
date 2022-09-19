import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  background: linear-gradient(to bottom, #17161F 15%, #4F9999);
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
  margin-top: 10px;
  padding-top: 0;
  padding-bottom: 30px;
`

export const Heading = styled.h1`
  margin-top: 60px;
  text-align: center;
  margin-bottom: 24px;
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
`

export const ProjectImage = styled.img`
  transition-duration: 200ms; 
  border-radius: 1.25rem; 
  max-height: 100%;
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
  border: 2px solid transparent;
`

export const ProjectInformationHeader = styled.h1`
  margin-top: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: #79B791;

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`
