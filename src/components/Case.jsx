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
              strokeLinecap="round"
              strokeWidth="66.67"
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
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--color-brown-300);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 15.25% 2.7% 79%;
  gap: 10px;
  position: relative;

  @media (max-width: 627px) {
    grid-template-rows: 22.25% 2.7% 72%;
  }
`;

const Head = styled.div`
  display: grid;
  grid-template-columns: 1fr 63px;
  padding: 30px 30px 0px 30px;
  height: fit-content;

  @media (max-width: 627px) {
    display: block;
    padding: 20px 20px 0px 20px;
  }
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

    @media (min-width: 1050px) and (max-width: 1250px) {
      h1 {
        font-size: var(--fs-4);
      }
      p {
        font-size: var(--fs-1);
      }
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

    @media (min-width: 1050px) and (max-width: 1250px) {
      width: 50px;

      svg {
        width: 25px;
      }
    }
    @media (max-width: 627px) {
      position: absolute;
      bottom: 10px;
      left: 10px;
      z-index: 10;
      width: 45px;
      svg {
        width: 15px;
      }
    }

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
  margin: auto;
  border-radius: 100px;
  background-color: var(--color-brown-400);

  @media (min-width: 1050px) and (max-width: 1250px) {
    width: 90%;
  }
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: green; */
  overflow: hidden;
`;

export default Case;
