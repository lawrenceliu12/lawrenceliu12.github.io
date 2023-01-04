import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: linear-gradient(to bottom, #4F9999 30%, #17161F);
  /* background: #17161F; */
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px){
    padding: 100px 0;
    height: 100%;
  }
`

export const Wrapper = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const HeadingWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  max-width: 100vw;
`

export const Header = styled.h1`
  padding-top: 60px;
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
`

export const ExperienceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
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

export const ExperienceBox = styled.div`
  padding: 1rem;
  border-radius: 1.25rem; 
  border: 1px solid transparent;
  box-shadow: 0 4px 6px -1px rgb(255, 255, 255), 0 2px 4px -1px rgb(255, 255, 255); 
  height: calc((100vh - 300px)/4.3);
  max-height: 250px;
  width: calc(100vw - 20vw);
  /* max-width: calc((1200px - 300px)); */
  &:hover{
    transition-duration: 200ms;
    box-shadow: 0 4px 6px -1px rgb(177, 156, 217), 0 2px 4px -1px rgb(177, 156, 217);
    transform: scale(1.03, 1.03);
  }
`

export const ExperienceName = styled.h2`
  justify-content: left;
  color: black;

  @media screen and (max-width: 1024px){
    font-size: 20px;
  }

  @media screen and (max-width: 700px){
    font-size: 15px;
  }
`

export const ExperienceOrganization = styled.div`
  font-size: 0.67em;
  font-weight: 700;
  color: black;

  @media screen and (max-width: 1024px){
    font-size: 12px;
  }

  @media screen and (max-width: 700px){
    font-size: 10px;
  }
`

export const ExperienceImage = styled.img`
  border-radius: 1.25rem; 
  max-height: 85%;
  max-width: 100%;
  float: right;
  clear: right;

  @media screen and (max-width: 1024px){
    max-height: 75%;
    max-width: 75%;
  }

  @media screen and (max-width: 700px){
    max-height: 50%;
    max-width: 50%;
  }
`

export const ExperienceTime = styled.div`
  float: right;
  color: black;
  font-weight: 700;
  @media screen and (max-width: 1024px){
    font-size: 10px;
  }

  @media screen and (max-width: 700px){
    font-size: 8px;
  }
`

export const ExperienceDescription = styled.div`
  max-width: 80%;
  height: 100%;

  @media screen and (max-width: 1750px){
    font-size: 13px;
  }

  @media screen and (max-width: 1150px){
    font-size: 10px;
    max-width: 100%;
  }

  @media screen and (max-width: 700px){
    font-size: 8px;
    max-width: 100%;
  }
`


