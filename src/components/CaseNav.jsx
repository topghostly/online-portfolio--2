import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const NAV_ITEMS = [
  { label: "All", position: 1, width: 23 },
  { label: "Web", position: 28, width: 29 },
  { label: "Mobile", position: 62, width: 37 },
];
// const NAV_ITEMS = [
//   { label: "All", position: 1, width: 70 },
//   { label: "Web", position: 89, width: 95 },
//   { label: "Mobile", position: 202, width: 120 },
// ];

function CaseNav() {
  const activeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const { position, width } = NAV_ITEMS[activeIndex];

    gsap.to(activeRef.current, {
      left: `${position}%`,
      width: `${width}%`,
      duration: 0.7,
      ease: "bounce.out",
    });
  }, [activeIndex]);

  return (
    <Container>
      <Holder>
        <Active ref={activeRef} />
        <ul>
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <button
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </Holder>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  place-content: center;
`;

const Holder = styled.div`
  position: relative;
  width: 330px;
  height: 55px;
  border-radius: 100px;
  border: solid 3px var(--color-brown-400);

  @media screen and (max-width: 768px) {
    width: 270px;
    height: 50px;
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0px 3px;

    li {
      button {
        font-size: var(--fs-4);
        padding: 5px 20px;
        border-radius: 100px;
        outline: none;
        border: none;
        color: var(--color-brown-500);
        background: none;
        font-family: "Graphix-Medium";
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 768px) {
          font-size: var(--fs-3);
        }
      }
      .active {
        color: black;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

const Active = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 70px;
  height: 88%;
  background-color: var(--color-brown-300);
  border-radius: 100px;
  z-index: -1;
`;

export default CaseNav;
