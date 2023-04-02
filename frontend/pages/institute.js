import EducationalInstitute from "@/components/EducationalInstitute";
import NeedHelp from "@/components/NeedHelp";
import QuotesCarousel from "@/components/QuotesCarousel";
import ContainerBox from "@/components/styles/ContainerBox";
import styled from "styled-components";
import { device } from "@/components/device";

const InstitutePageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
  }
  .filter-description {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin: 40px 0 20px;
  }
  h4 {
    font-family: 'Oswald';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #2A2A2A;
    margin: 0;
  }
  p {
    color: #2A2A2A;
    margin: 0;
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
      font-family: Oswald;
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;      
    }
    
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
  }
`;

export default function InstitutePage() {
  return (
    <>
      <ContainerBox>
        <InstitutePageStyle>
          <h1>EDUCATION INSTITUTE</h1>
          <p>A digital destination that empowers young people, educators, and professionals through transformative programming featuring our speakers. The goal of our educational programs is to create a more just society.</p>
        </InstitutePageStyle>
      </ContainerBox>
      <EducationalInstitute />
    </>
  );
}