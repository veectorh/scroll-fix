import styled from "styled-components";
import { device } from "../device";

const ScrollStyles = styled.section`
  width: 100%;
  position: relative;
  height: calc(20vh + ${({ childrenLen }) => childrenLen * 100}vh);

  .track {
    width: 100%;
    height: 101vh;
    overflow: hidden;
    position: sticky;
    top: 0;
  }

  .placeholders {
    padding-top: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    .placeholder {
      width: 100%;
      height: 100vh;
    }
  }

  @media ${device.tablet} {
    height: auto;
    .track {
      height: auto;
    }
  }
`;

export default ScrollStyles;
