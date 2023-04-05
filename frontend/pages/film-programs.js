import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import FilmProgram from "@/components/FilmProgram";
import { loadAPI } from "@/lib/load-api";
import Head from 'next/head'

const FilmProgramsPageStyle = styled.section`
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

const FilmProgramListStyle = styled.div`
  max-width: 1258px;
  padding-top: 40px;
`;

export default function FilmProgramsPage({ films }) {
  return (
    <>
      <Head>
        <title>SpeakOut | Film Programs</title>
      </Head>
      <FilmProgramsPageStyle>
        <h1>Film Programs</h1>
        <p>Book a film program featuring SpeakOut's award-winning filmmakers - in person or virutally. Explore a variety of cultural and social issues through powerful and thought-provoking films, accompanied by in-depth discussions with the filmmakers themselves. A unique and enriching experience!</p>

        <FilmProgramListStyle>
          {
            films.data.map(film => (
              <FilmProgram key={film.id} film={{ film }} />
            ))
          }
        </FilmProgramListStyle>
      </FilmProgramsPageStyle>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const films = await loadAPI("film-programs");
  return { props: { films } }
}
