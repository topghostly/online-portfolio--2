import React from "react";
import styled from "styled-components";
import img from "/images/agentMeetBig.png";

function AgentMeet() {
  return (
    <Container>
      <img src={img} alt="AgentMeet site website" />
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

export default AgentMeet;
