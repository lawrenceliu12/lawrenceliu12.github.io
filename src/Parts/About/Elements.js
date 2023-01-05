import styled from 'styled-components'
import {MdArrowDownward, MdArrowDropDown} from 'react-icons/md'

export const Container = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`

export const Background = styled.div
`
  position: absolute;
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #4F9999 30%, #17161F); 
  // background: #4F9999;
`

export const Content = styled.div
`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionH1 = styled.h1
`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const SectionH2 = styled.h2
`
  color: #C8A2C8;
  margin-top: 80px;
  font-size: 40px;
  text-align: left;
  font-weight: 300;

  @media screen and (max-width: 768px){
    font-size: 30px;
  }

  @media screen and (max-width: 480px){
    font-size: 24px;
  }
`

export const SectionParagraph = styled.p
`
  color: #fff;
  font-size: 22px;
  text-align: left;
  max-width: 770px;
  font-weight: 300;

  @media screen and (max-width: 768px){
    font-size: 22px;
  }

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`

export const SectionWrapper = styled.div
`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowDownward = styled(MdArrowDownward)
`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowDown = styled(MdArrowDropDown)
`
  margin-left: 8px;
  font-size: 20px;
`

export const SectionImage = styled.img`
  height: 50px;
`