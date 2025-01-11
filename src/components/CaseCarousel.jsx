import React, { useState } from "react";
import Case from "./Case";
import styled from "styled-components";
import Sublime from "./case-components/Sublime";
import ImageRaft from "./case-components/ImageRaft";
import AgentMeet from "./case-components/AgentMeet";
import EchoNote from "./case-components/EchoNote";

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
    component: <EchoNote />,
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
  grid-template-columns: repeat(2, 590px);
  gap: 20px;
  justify-content: center;

  @media (min-width: 1050px) and (max-width: 1250px) {
    grid-template-columns: repeat(2, 490px);
  }
  @media (min-width: 463px) and (max-width: 1050px) {
    grid-template-columns: repeat(1, 590px);
  }
`;
export default WorkCarousel;
