
import React from "react";
import styled from 'styled-components';
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

// Define the LinkedIn button styled component with the provided styles
const LinkedInButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634,
              -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

// Container to align buttons horizontally
const ButtonContainer = styled.div`
  display: flex;
  gap: 25px; /* Space between buttons */
  align-items: center; /* Center align items vertically */
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ButtonContainer>
              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
              <LinkedInButton href="https://www.linkedin.com/in/premalathakumaran01/" target="_blank">
                LinkedIn
              </LinkedInButton>
            </ButtonContainer>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src="Male Avatar.gif" alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

