import React from "react";
import styled from "styled-components";
import img from "/images/sublimeBig.png";
import RevolvingLogo from "./RevolvingLogo";

function Sublime() {
  return (
    <Container>
      <Holder>
        {" "}
        <RevolvingLogo color={"white"} background={"none"} />
        <img src={img} alt="Sublime designs and constructions website" />
      </Holder>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-content: center;

  img {
    width: 100%;
  }
`;

const Holder = styled.div`
  position: relative;
  width: inherit;
  height: fit-content;
`;

export default Sublime;
