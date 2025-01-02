import React from "react";
import styled from "styled-components";
import img from "/images/echonote-1.png";
import img2 from "/images/echonote-2.png";

function EchoNote() {
  return (
    <Container>
      <img src={img2} alt="Echonote app image display" className="image-2" />
      <img src={img} alt="Echonote app image display" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-content: center;
  overflow-y: hidden;
  display: flex;
  align-items: flex-start;

  img {
    width: 250px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-20%, -35%);
  }
  .image-2 {
    transform: translate(-80%, -34%) rotate(-6deg);
  }
`;

export default EchoNote;
