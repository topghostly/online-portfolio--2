import React from "react";
import NavBar from "../components/NavBar";
import OpenForWorkButton from "../components/OpenForWorkButton";
import styled from "styled-components";
import CaseNav from "../components/CaseNav";
import WorkCarousel from "../components/CaseCarousel";
import Timeline from "../components/Timeline";
import { Peace, World } from "../../utils/svg";
import HoverAnimation from "../../utils/HoverAnimation";

// Header Style
const HeaderHolder = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(90vh - 100px);
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 30px 1fr 150px;
  height: fit-content;
`;

const Role = styled.p`
  position: relative;
  color: var(--color-brown-500);
  display: grid;
  place-content: center;
  height: fit-content;
`;

const NameTag = styled.h1`
  position: relative;
  font-size: var(--fs-9);
  font-family: "Helvetica-BoldCondensed";
  height: fit-content;

  span {
    font-family: "Helvetica-BlackCondensedOblique";
  }
`;

// About styles
const AboutHolder = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;

  p {
    font-family: "Graphix-Regular";
    font-size: var(--fs-7);
    text-align: center;
    /* line-height: 50px; */
  }
`;

// Case Styles
const CaseHolder = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

// Contact styles
const ContactHolder = styled.section`
  position: relative;

  .contact--right {
    p {
      font-size: var(--fs-9);
      width: 600px;
      font-family: "Helvetica-Bold";
      line-height: 1.1;

      span {
        font-family: "Helvetica-BoldOblique";
      }
    }
  }
  .contact--left {
    a {
      text-decoration: none;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: fit-content;
      margin-left: auto;
      padding-bottom: 5px;
      border-bottom: solid 5px black;

      svg {
        display: inline;
        width: calc(var(--fs-7) + 2px);
      }

      p {
        color: black;
        font-size: var(--fs-7);
        font-family: "Graphix-Regular";
        text-align: right;
      }
    }
  }
`;

// Footer styles
const FooterHolder = styled.footer`
  width: 100%;
  height: 70px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    height: 100%;

    li {
      font-family: "Helvetica";
    }
  }
`;

function Header() {
  return (
    <HeaderHolder>
      <Container>
        <TextContainer>
          <Role>WEB & MOBILE DEVELOPER</Role>
          <NameTag>
            TEMITOPE <span>ABOLAJI</span>
          </NameTag>
          <OpenForWorkButton />
        </TextContainer>
      </Container>
    </HeaderHolder>
  );
}

function HomeAbout() {
  return (
    <AboutHolder>
      <p>
        Hi, I’m Tope <Peace />, a software developer practicing and building
        quality solutions for the past 4 years.
      </p>
    </AboutHolder>
  );
}

function CaseStudy() {
  return (
    <CaseHolder>
      <CaseNav />
      <WorkCarousel />
    </CaseHolder>
  );
}

function Contact() {
  return (
    <ContactHolder>
      <div className="contact--right">
        <p>
          Want to reach <span>out?</span>
        </p>
      </div>
      <div className="contact--left">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 800 800"
          >
            <path
              d="m240,560l320-320m0,0H240m320,0v320"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="63"
            />
          </svg>
          <p>topghostly@gmail.com</p>
        </a>
      </div>
    </ContactHolder>
  );
}

function Footer() {
  return (
    <FooterHolder>
      <ul>
        <li>LINKEDIN</li>
        <li>GITHUB</li>
        <li>INSTAGRAM</li>
        <li>TWITTER</li>
        <li>MOBILE</li>
      </ul>
    </FooterHolder>
  );
}

// Main home page function
function Home() {
  return (
    <>
      <NavBar />
      <MainHolder>
        <Header />
        <HomeAbout />
        <CaseStudy />
        <Timeline />
        <HoverAnimation>
          <p>Hover me</p>
        </HoverAnimation>
        <HoverAnimation>
          <p>Hover me</p>
        </HoverAnimation>
        <Contact />
        <Footer />
      </MainHolder>
    </>
  );
}

const MainHolder = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 90px;
`;
export default Home;
