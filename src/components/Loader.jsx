import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderContainer>
      <Text>
        <span>THE</span>
        <span>REAL</span>
        <span>AYINLA</span>
      </Text>
      <Curtain className="upper-curtain" />
      <Curtain className="lower-curtain" />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50% 50%;
  z-index: 900;
`;

const Text = styled.p`
  position: ab;
`;

const Curtain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #161111;
`;
export default Loader;
