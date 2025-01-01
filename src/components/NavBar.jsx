import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <NavContainer>
      <NavHeadText>WHY TEMITOPE</NavHeadText>
      <NavLinkHolder>
        <ul>
          <li>01/HEY</li>
          <li>02/ABOUT</li>
          <li>03/CASE</li>
          <li>04/CONTACT</li>
          <li>05/RESUME</li>
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

    li {
      cursor: pointer;
    }
  }
`;
export default NavBar;