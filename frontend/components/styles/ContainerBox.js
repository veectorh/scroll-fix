import { device } from "../device";
import styled from 'styled-components';
const ContainerBox = styled.section`
    margin: 0px 20px;

    @media ${device.laptopL} {
      margin: 0px 48px;
    }

    @media ${device.laptop} {
      margin: 0px 36px;
    }

    @media ${device.tablet} {
      margin: 0px 36px;
    }

    @media ${device.mobileL} {
      margin: 0px 24px;
    }

    @media ${device.mobileM} {
      margin: 0px 24px;
    }

    @media ${device.mobileS} {
      margin: 0px 24px;
    }

`;


export default ContainerBox;