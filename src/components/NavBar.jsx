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
            <HoverAnimation>03/CASE</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>04/CONTACT</HoverAnimation>
          </li>
          <li>
            <HoverAnimation>05/RESUME</HoverAnimation>
          </li>
        </ul>
      </NavLinkHolder>
    </NavContainer>
  );
}

const NavContainer = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavHeadText = styled.h1`
  font-size: 1rem;
  font-family: "Helvetica-Bold";
`;

const NavLinkHolder = styled.nav`
  position: relative;
  max-width: 1000px;
  min-width: 600px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    /* color: var(--color-brown-500); */

    li {
      cursor: pointer;
      /* padding: 3px 0px; */
      /* cursor: no-drop; */
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
