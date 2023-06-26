import styled from "styled-components";
import { device } from "../device";
const EducationalInstituteStyles = styled.section`
  background: #f2f2f2;
  text-align: center;
  padding: 0;
  p {
    max-width: 898px;
    margin: 0 auto 66px;
  }

  .copy-image {
    display: flex;
    align-items: center;
    width: 100%;
    /* margin-bottom: -4px; */
    height: 101vh;
    position: absolute;
    top: 0;
    left: 0;
    &.visible {
      z-index: 10;
      .copy {
        transform: translateY(0);
      }
      .image {
        transform: translateY(0);
      }
    }

    .copy {
      transition: all 1s cubic-bezier(0.7, 0, 0.3, 1);
      transform: translateY(100%);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      .copy-container {
        max-width: 353px;
        margin: 0 auto;
        text-align: left;
      }
    }
    .image {
      transition: all 1s cubic-bezier(0.7, 0, 0.3, 1);
      transform: translateY(-100%);
      height: 100%;

      img {
        position: relative !important;
        object-fit: cover;
      }
    }

    #virtual-event {
      object-position: -90px 0%;
    }
    #summer-institute {
      object-position: -300px 0%;
    }
    #original-film {
      object-position: 0px 0%;
    }
  }

  .copy-image:nth-child(even) {
    flex-direction: row-reverse;
  }

  .copy-image > * {
    flex-basis: 100%;
  }

  @media ${device.tablet} {
    .copy-image {
      position: relative;
      flex-direction: column;
      height: fit-content;
      gap: 24px;
      background: white;
      .image {
        transform: none;
        width: 100%;
      }
      .copy {
        transform: none;
        .copy-container {
          max-width: 100%;
        }
      }
    }

    p {
      width: 100%;
      max-width: 100%;
      margin: 0 auto 33px;
    }

    .copy-image {
      #virtual-event {
        object-position: 0px 0%;
      }
      #summer-institute {
        object-position: 0px 0%;
      }
      #original-film {
        /* object-position: -120px 0%; */
      }

      .image {
        height: 40vh;
      }
    }

    .copy-image:nth-child(even) {
      flex-direction: column;
    }

    .copy-image:first-child {
      h2 {
        margin-top: 0px;
      }
    }

    h2 {
      //styleName: H1 Mobile;

      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;
    }
  }
`;

export default EducationalInstituteStyles;
