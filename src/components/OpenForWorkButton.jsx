import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function OpenForWorkButton() {
  const blinkingRef = useRef(null);

  useEffect(() => {
    gsap.to(blinkingRef.current, {
      opacity: 0,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <Container>
      <Holder>
        <Text>
          Open to <span>new oppurtunities</span>
        </Text>
        <BlinkingBox ref={blinkingRef} />
      </Holder>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const Holder = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: var(--color-brown-100);
  cursor: pointer;
  margin: 0px auto;
`;
const Text = styled.p`
  position: relative;
  font-size: var(--fs-1);
  font-family: "Helvetica-Bold";

  span {
    font-family: "Helvetica-LightOblique";
  }
`;
const BlinkingBox = styled.div`
  height: 0.4375rem;
  aspect-ratio: 1;
  background-color: var(--color-green);
  border-radius: 50%;
  opacity: 1;
`;

export default OpenForWorkButton;
