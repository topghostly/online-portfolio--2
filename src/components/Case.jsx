import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function Case({
  children: { name, component, about, type },
  setDimComponent,
  DimComponent,
}) {
  const [activeTab, setActiveTab] = useState(false); // State to check if case tab is the active tab

  const HolderRef = useRef(null);

  // Hover/Dim animation logic
  useEffect(() => {
    if (DimComponent && !activeTab) {
      gsap.to(HolderRef.current, {
        opacity: 0.1,
        duration: 0.2,
      });
    } else {
      gsap.to(HolderRef.current, {
        opacity: 1,
        duration: 0.2,
      });
    }
  }, [DimComponent]);

  return (
    <CaseContainer id="case" ref={HolderRef}>
      <Head>
        <div className="head--content">
          <h1>{name}</h1>
          <p>{about}</p>
        </div>
        <div
          className="arrow"
          onMouseEnter={() => {
            setDimComponent(true);
            setActiveTab(true);
          }}
          onMouseLeave={() => {
            setDimComponent(false);
            setActiveTab(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 800 800"
          >
            <path
              d="m141.1,400h517.8m0,0l-188.47-188.33m188.47,188.33l-188.47,188.33"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="66.67"
            />
          </svg>
        </div>
      </Head>
      <Line />
      <Main>{component}</Main>
    </CaseContainer>
  );
}

const CaseContainer = styled.div`
  width: 590px;
  height: 590px;
  background-color: var(--color-brown-300);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 90px 45px 430px;
  gap: 10px;
`;

const Head = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 63px;
  padding: 30px 30px 0px 30px;
  height: fit-content;
  .head--content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: "Graphix-Medium";
      font-size: var(--fs-6);
    }
    p {
      font-family: "Graphix-Regular";
      font-size: var(--fs-3);
      color: var(--color-brown-500);
    }
  }
  .arrow {
    width: 63px;
    aspect-ratio: 1;
    background-color: var(--color-brown-200);
    display: grid;
    place-content: center;
    border-radius: 50%;
    border: solid 3px var(--color-brown-400);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: solid 3px var(--color-brown-200);
      transition: all 0.2s ease-in-out;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      svg {
        color: black;
        transition: all 0.2s ease-in-out;
      }
    }

    svg {
      width: 33px;
      aspect-ratio: 1;
      transform: rotate(315deg);
      color: var(--color-brown-500);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Line = styled.div`
  width: 85%;
  height: 2px;
  margin: 20px auto;
  border-radius: 100px;
  background-color: var(--color-brown-400);
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Case;
