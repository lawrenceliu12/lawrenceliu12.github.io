import styled from 'styled-components'

export const Container = styled.div
`
  color: #fff;
  background ${({background}) => (background ? '#4F9999' : '#17161F')};

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const InformationWrapper = styled.div
`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const TextWrapper = styled.div
`
  max-width: 1100px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading = styled.h1
`
  margin-top: 60px;
  text-align: center;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ headingText }) => (headingText ? '#79B791' : '#010606')};

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p
`
  text-align: center;
  max-width: 1100px;
  margin-bottom:35px;
  font-size: 25px;
  line-height: 24px;
  font-weight: 400;
  color: ${({subtitleText}) => (subtitleText ? '#426E7A' : '#fff')}
`

export const ButtonWrapper = styled.div
`
  display: flex;
  justify-content: center;
`