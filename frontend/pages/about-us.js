import NeedHelp from "@/components/NeedHelp";
import QuotesCarousel from "@/components/QuotesCarousel";
import styled from "styled-components";

const AboutPageStyle = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto;
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


export default function AboutUsPage() {
  return (
    <>
      <AboutPageStyle>
        <h1>About Us</h1>
        <p>SpeakOut — The Institute for Democratic Education and Culture is a non-profit, mission-driven speakers agency and education institute.</p>

        <h3>Our History</h3>
        <p>
          Speak Out was founded in 1990 as part of the non-profit Institute for Social and Cultural Change which included the progressive publishing house South End Press and Z Magazine. Initially, Speak Out was a way to showcase South End Press authors like Howard Zinn, Noam Chomsky, Elizabeth Martinez, Winona LaDuke, among others.
        </p><br/>
        <p>
          Founder Jean Caiani brought to the work her experience in organizing speaking tours for former CIA agent and whistleblower Philip Agee as well as her years with the United Farms Workers Union where she coordinated tours for Cesar Chavez.
        </p><br/>
        <p>
          Within several years, it became clear the Speak Out was fullfilling an incredible need by providing progressive speakers in the campus arena and there was growth in the roster - from the initial handful to dozens of speakers, scholars, performing and visual artists, exhibits and films.
        </p><br/>
        <p>
          Speak Out eventually went on to establish its own 501(c)3 non-profit status as the Institute for Democratic Education and Culture, with an educational mission to educate, inspire and empower young people to become actively engaged in society and to work for social justice.
        </p><br/>
        <p>
          In addition to the hundreds of lectures and performances organized each year with campuses, companies, community organizations, and government agencies, the organization's work has expanded into new areas as well. Speak Out has been publishing and distributing educational materials, curriculum, and diversity resources. Through our on-line store, Speak Out offers books, DVDs, CDs and webinars. Our online virtual events, featuring our speakers and other thoughtleaders, are powerful, educational and inspiring. Our online E-Course for students, Race, Power, and Privilege, contributes to building an equitable campus culture. Our first short feature film production, The Syed Family Xmas Eve Game Night, had its world premiere at the Toronto International Film Festival and garnering critical and audience praise as it continues on the film festival circuit.
        </p>
      </AboutPageStyle>
      <QuotesCarousel />
      <NeedHelp />
    </>
  );
}