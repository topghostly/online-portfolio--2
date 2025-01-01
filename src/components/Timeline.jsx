import React from "react";
import styled from "styled-components";

// Timeline styles
const Holder = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  height: 75px;
  width: 600px;
  border-bottom: solid 2px black;
  align-items: center;

  p.date {
    font-size: 20px;
    font-family: "Helvetica-BoldCondensed";
    color: black;
    text-align: center;
    font-size: var(--fs-7);
    text-align: start;
  }
  p.name {
    font-family: "Graphix-Regular";
    font-size: var(--fs-3);
  }
  p.type {
    font-family: "Graphix-Regular";
    font-size: var(--fs-3);
    text-align: end;
  }
`;

function Timelines() {
  return (
    <Holder>
      <p className="date">2024</p>
      <p className="name">Sublime Designs</p>
      <p className="type">Website</p>
    </Holder>
  );
}

function Timeline() {
  return (
    <Container>
      <Head>
        PROJECT <span>TIMELINE</span>
      </Head>
      <TimelineHolder>
        <Timelines />
        <Timelines />
        <Timelines />
        <Timelines />
      </TimelineHolder>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
`;

const Head = styled.h1`
  position: relative;
  font-size: var(--fs-8);
  font-family: "Helvetica-BoldCondensed";
  height: fit-content;

  span {
    font-family: "Helvetica-BlackCondensedOblique";
  }
`;

const TimelineHolder = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 15px;
  flex-direction: column;
`;

export default Timeline;
