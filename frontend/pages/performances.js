import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import { loadPerformances } from "@/lib/load-performances";
import Performance from "@/components/Performance";

const PerformancesPageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  background-color: white;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
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
    max-width: 910px;
  }
`;

const PerfomancesListStyle = styled.div`
  max-width: 1258px;
  padding-top: 40px;
`;

export default function PerformancesPage({ performances }) {
  return (
    <>
      <PerformancesPageStyle>
        <h1>Performances</h1>
        <p>Experience the power of live performance from top SpeakOut artist/activists. Solo-shows, spoken word and poetry, comedy, and film - each program brings vital and inspiring messages to campuses and communities. Join us for a transformative experience, available in person or virtually.</p>
        

        <PerfomancesListStyle>
          {
            performances.data.map(performance => (
              <Performance key={performance.id} performance={{ performance }} />
            ))
          }
        </PerfomancesListStyle>
      </PerformancesPageStyle>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const performances = await loadPerformances();
  return { props: { performances } }
}
