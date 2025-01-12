import React from "react";
import NavBar from "../components/NavBar";
import OpenForWorkButton from "../components/OpenForWorkButton";
import styled from "styled-components";
import CaseNav from "../components/CaseNav";
import WorkCarousel from "../components/CaseCarousel";
import Timeline from "../components/Timeline";
import { FingerPrint, Peace, World } from "../../utils/svg";
import HoverAnimation from "../../utils/HoverAnimation";
import Scene from "../components/model-component/Scene";
import { PillImage } from "../../utils/inline-images";

// Header Style
const HeaderHolder = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(80vh - 100px);
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
  @media (max-width: 902px) {
    height: calc(60vh);
  }
  @media (max-width: 549px) {
    height: calc(55vh);
  }
`;

const Container = styled.div`
  /* position: relative; */
`;

const TextContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 30px 1fr 100px;
  height: fit-content;

  @media (max-width: 549px) {
    grid-template-rows: 70px 1fr 100px;
  }
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

  @media (max-width: 902px) {
    font-size: var(--fs-8);
  }
  @media (max-width: 549px) {
    text-align: center;
    line-height: 60px;
    span {
      display: block;
    }
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

    @media screen and (max-width: 1050px) {
      font-size: var(--fs-6);
    }
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
  display: flex;
  flex-direction: column;
  gap: 10px;

  .contact--right {
    p {
      font-size: var(--fs-9);
      width: 600px;
      font-family: "Helvetica-Bold";
      line-height: 1.1;

      @media (max-width: 1050px) {
        font-size: var(--fs-8);
      }

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
        @media (max-width: 1050px) {
          width: calc(var(--fs-6) + 2px);
        }
      }

      p {
        color: black;
        font-size: var(--fs-7);
        font-family: "Graphix-Regular";
        text-align: right;

        @media (max-width: 1050px) {
          font-size: var(--fs-6);
        }
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
  .abbr--text {
    display: none;

    @media (max-width: 627px) {
      display: flex;
    }
  }
  .full--text {
    display: flex;

    @media (max-width: 627px) {
      display: none;
    }
  }
`;

function Header() {
  return (
    <HeaderHolder>
      <Container>
        <Scene />
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
        Hi, I’m <PillImage /> Tope <Peace />, a software developer <World />{" "}
        practicing and building quality solutions <FingerPrint /> for the past 5
        years.
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
          Want to <br /> reach <span>out?</span>
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
              strokeLinecap="round"
              strokeWidth="63"
            />
          </svg>
          <p>topghostly@gmail.com</p>
        </a>
      </div>
      <Footer />
    </ContactHolder>
  );
}

function Footer() {
  return (
    <FooterHolder>
      <ul className="full--text">
        <li>
          <HoverAnimation>LINKEDIN</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>GITHUB</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>INSTAGRAM</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>TWITTER</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>MOBILE</HoverAnimation>
        </li>
      </ul>
      <ul className="abbr--text">
        <li>
          <HoverAnimation>LI</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>GH</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>IG</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>TW</HoverAnimation>
        </li>
        <li>
          <HoverAnimation>MB</HoverAnimation>
        </li>
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
        <Contact />
      </MainHolder>
    </>
  );
}

const MainHolder = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 90px;
  overflow-x: hidden;

  @media (min-width: 768px) and (max-width: 1250px) {
    padding: 0px 30px;
  }

  @media screen and (max-width: 767px) {
    padding: 0px 10px;
  }

  @media (max-width: 1050px) {
    gap: 60px;
  }
`;
export default Home;
