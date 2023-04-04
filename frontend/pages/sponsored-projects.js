import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import SponsoredProject from "@/components/SponsoredProject";
import { loadSponsoredProjects } from "@/lib/load-sponsored-projects";

const SponsoredProjectsStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1260px;
  margin: 0 auto 40px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0 0 15px;
  }
  p {
    color: #2A2A2A;
    margin: 0 0 35px;
    max-width: 910px;
  }
`;

const SponsoredProjectsListStyles = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  column-gap: 30px;
  row-gap: 40px;
`;

export default function SponsoredProjectsPage({ projects }) {
  return (
    <>
      <SponsoredProjectsStyle>
        <h1>Our Fiscally-Sponsored Projects</h1>
        <p>Explore the important work of our fiscally-sponsored projects and consider supporting their efforts to create positive change in their communities and beyond. Together, we can invest in the movement for social justice and create a more equitable and compassionate world.</p>
        <SponsoredProjectsListStyles>
          {
            projects.data.map(project => (
              <SponsoredProject key={project.id} project={project} />
            ))
          }
        </SponsoredProjectsListStyles>
      </SponsoredProjectsStyle>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const projects = await loadSponsoredProjects();
  return { props: { projects }}
}