import EducationalInstitute from "@/components/EducationalInstitute";
import NeedHelp from "@/components/NeedHelp";
import QuotesCarousel from "@/components/QuotesCarousel";
import styled from "styled-components";

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
`;

export default function InstitutePage() {
  return (
    <>
      <InstitutePageStyle>
        <h1>INSTITUTE FOR DEMOCRATIC<br/>EDUCATION AND CULTURE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc consequat vulputate. Donec libero magna, tincidunt nec sapien ut, porttitor gravida tortor.</p>
      </InstitutePageStyle>
      <EducationalInstitute />
    </>
  );
}