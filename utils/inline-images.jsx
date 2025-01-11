import image from "/images/pill-image-01.png";
import styled from "styled-components";

export function PillImage() {
  return <Img src={image} />;
}

const Img = styled.img`
  position: relative;
  display: inline;
  width: var(--fs-7);
  margin: 0;
  padding: 0;
  transform: translateY(15px);

  @media screen and (max-width: 1050px) {
    width: var(--fs-6);
    transform: translateY(10px);
  }
`;
