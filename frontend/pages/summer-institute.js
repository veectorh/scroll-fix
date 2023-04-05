import styled from "styled-components";
import ButtonStyles from "@/components/styles/ButtonStyles";
import Link from "next/link";
import Image from 'next/image';
import { loadSummerInstitutes } from "@/lib/load-summer-institutes";
import Head from 'next/head'

const SummerInstituteStyle = styled.section`
  padding: 50px 0 0;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    letter-spacing: 0.03em;
    color: #000000;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #000000;
  }
  .sub-heading {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #000000;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  .orange-heading {
    color: rgba(248, 161, 81, 1);
  }
  .intro {
    max-width: 1250px;
    margin: 0 auto;
    padding: 50px 0 50px;
    p { 
      max-width: 890px;
    }
  }
  .summer-institute {
    background: rgba(248, 161, 81, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
    p {
      padding: 0 17vw;
      text-align: center;
    }

    .top {
      margin-top: 66px;
      margin-bottom: 25px;
    }
    .speakers {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 50px;
      flex-wrap: wrap;
      .speaker {
        display: flex;
        flex-direction: column;
        .speaker-image {
          background: rgba(248, 161, 81, 1);
          width: 120px;
          height: 120px;
          border-radius: 20px;
        }
        .speaker-name {
          font-family: 'Fira Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.05em;
          color: #000000;
          text-transform: uppercase;
          width: 120px;
          padding-top: 15px;
        }
      }
    }

    .sessions {
      display: flex;
      flex-direction: row;
      gap: 44px;
      flex-wrap: wrap;
      .session {
        .session-description {
          font-family: 'Fira Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #000000;
          width: 172px;
          text-align: center;
        }
        .name {
          font-weight: 700;
        }
      }
    }
  }
`;

const PreviousInstitutesCTA = styled.section`
  display: flex;
  gap: 9px;
  justify-content: space-between;
  margin-top: 9px;
  h2 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    letter-spacing: 0.03em;
    color: #000000;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #000000;
    margin: 20px 0 0;
  }
  .sub-heading {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #000000;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
`;

const PreviousInstituteStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: rgba(242, 242, 242, 1);
  padding: 60px 20px;

  p { 
    max-width: 570px;
    text-align: center;
    margin-bottom: 25px;
  }
`;


export default function SummerInstitutePage({ institutes}) {
  return (
    <>
      <Head>
        <title>SpeakOut | Summer Institute</title>
      </Head>
      <SummerInstituteStyle>
        <div className="intro">
          <h1>Summer Institute</h1>
          <p>A virtual institute focused on building equity and social justice education and providing participants with ideas, tools, and resources to create inclusive learning environments on campus and online. For college faculty and professional staff.</p>
        </div >

        {
          institutes.data.map(institute => (
            <div className="summer-institute" key={institute.id} >
              <h2 className="orange-heading">{institute.attributes.year}</h2>
              <p className="sub-heading">Summer Institute</p>
              <h3>{institute.attributes.title}</h3>
              <p>{institute.attributes.description}</p>
              <ButtonStyles theme={{ main: "#00AFB5" }}>
                  <Link href={institute.attributes.register_url}>Register Now</Link>
              </ButtonStyles>

              <h3 className="top">SPEAKERS</h3>
              <div className="speakers">
                {
                  institute.attributes.speakers.data.map(speaker => (
                    <div className="speaker">
                      <div className="speaker-image">
                        {/* Add Speaker Image here from API */}
                        {/* <Image 
                          src={image.data.attributes.url} 
                          alt={name} 
                          width={436} 
                          height={255} 
                          priority
                        /> */}
                      </div>
                      <div className="speaker-name">{speaker.attributes.fullName}</div>
                    </div>
                  ))
                }
              </div>

              <h3 className="top">SESSIONS</h3>
              <div className="sessions">
                {
                  institute.attributes.sessions.map(session => (
                    <div className="session">
                      <div className="session-description">
                        {session.session_name} WITH <span className="name">{session.speaker.data.attributes.fullName}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </SummerInstituteStyle>

      <PreviousInstitutesCTA>
        <PreviousInstituteStyle>
          <h2>2021</h2>
          <p className="sub-heading">Summer Institute</p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim </p>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/speakers">Register Now</Link>
          </ButtonStyles>
        </PreviousInstituteStyle>
        <PreviousInstituteStyle>
          <h2>2020</h2>
          <p className="sub-heading">Summer Institute</p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim </p>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
              <Link href="/speakers">Register Now</Link>
          </ButtonStyles>
        </PreviousInstituteStyle>
      </PreviousInstitutesCTA>
    </>
  );
}

export async function getStaticProps() {
  const institutes = await loadSummerInstitutes();
  return { props: { institutes } }
}