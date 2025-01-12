import React from "react";
import styled from "styled-components";
import HoverAnimation from "../../utils/HoverAnimation";

function NavBar() {
  return (
    <NavContainer>
      <NavHeadText>WHY TEMITOPE</NavHeadText>
      <NavLinkHolder>
        <ul>
          <li>
            <HoverAnimation>01/HEY</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>02/ABOUT</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>04/CONTACT</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>05/RESUME</HoverAnimation>
          </li>
        </ul>
      </NavLinkHolder>
      <AbLinkHolder>
        <ul>
          <li>
            <HoverAnimation>01/HY</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>02/AB</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>04/CT</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>05/RS</HoverAnimation>
          </li>
        </ul>
      </AbLinkHolder>
    </NavContainer>
  );
}

const NavContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const NavHeadText = styled.h1`
  font-size: 1rem;
  font-family: "Helvetica-Bold";
  padding: 0px 20px;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0px;
  }
  @media (max-width: 496px) {
    display: none;
  }
`;

const NavLinkHolder = styled.nav`
  position: relative;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    li {
    }
    .active {
      color: black;
      border-bottom: 4px solid black;
      font-family: "Helvetica-Bold";
      cursor: pointer;
    }
  }
`;
const AbLinkHolder = styled.nav`
  position: relative;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 496px) {
    width: 100%;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    li {
    }
    .active {
      color: black;
      border-bottom: 4px solid black;
      font-family: "Helvetica-Bold";
      cursor: pointer;
    }
  }
`;
export default NavBar;
