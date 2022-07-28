import React from 'react'
import { Button } from '../ButtonElement'
import {Container, InformationWrapper, TextWrapper, Heading, Subtitle, ButtonWrapper} from './Elements'

const Information = ({id, background, headingText, heading, subtitleText, subtitle, buttonLabel}) => {
  return (
    <>
      <Container background = {background} id = {id}>
        <InformationWrapper>
          <TextWrapper>
              <Heading headingText = {headingText}>{heading}</Heading>
              <Subtitle subtitleText = {subtitleText}>{subtitle}</Subtitle>
              <ButtonWrapper>
                  <Button to ='experience'>{buttonLabel}</Button>
              </ButtonWrapper>
          </TextWrapper>
        </InformationWrapper>
      </Container>
    </>
  )
}

export default Information