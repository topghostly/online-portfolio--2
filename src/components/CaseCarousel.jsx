import React, { useState } from "react";
import Case from "./Case";
import styled from "styled-components";
import Sublime from "./case-components/Sublime";
import ImageRaft from "./case-components/ImageRaft";
import AgentMeet from "./case-components/AgentMeet";

export const CASE_COMPONENTS = [
  {
    name: "Sublime",
    component: <Sublime />,
    about: "Firm website for Sublime Designs",
    type: "Website",
    date: "2024",
  },
  {
    name: "EchoNote",
    component: <AgentMeet />,
    about: "Voice memo mobile app",
    type: "Mobile",
    date: "2024",
  },
  {
    name: "ImageRaft",
    component: <ImageRaft />,
    about: "Firm website for Sublime Designs",
    type: "Website",
    date: "2023",
  },
  {
    name: "AgentMeet",
    component: <AgentMeet />,
    about: "Firm website for Sublime Designs",
    type: "Website",
    date: "2022",
  },
];

function WorkCarousel() {
  const [DimComponent, setDimComponent] = useState(false);
  return (
    <Container>
      {CASE_COMPONENTS.map((item, index) => (
        <Case
          key={index}
          setDimComponent={setDimComponent}
          DimComponent={DimComponent}
        >
          {item}
        </Case>
      ))}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
export default WorkCarousel;
