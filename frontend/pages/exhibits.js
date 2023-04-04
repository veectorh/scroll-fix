import Image from 'next/image';
import Link from 'next/link';
import styled from "styled-components";
import Exhibit from '@/components/Exhibits';
import quotemark from '../public/images/quote-blue.png';
import vevent from '../public/images/virtual-events.png'
import ButtonStyles from '../components/styles/ButtonStyles';
import { loadAPI } from '@/lib/load-api';
import { device } from '@/components/device';
import ContainerBox from '@/components/styles/ContainerBox';
const ExhibitsPageStyle = styled.section`
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
 
  p {
    color: #2A2A2A;
    margin: 0;
    max-width: 910px;
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;  
      margin-bottom : 8px;
    }

    p {
      //styleName: Body Mobile;
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  
  }


  @media ${device.mobileL} {
    padding: 36px 0 0;
  }

  
    @media ${device.tablet} {
        .page-detail {
          margin: 0px 36px;
        }
    }
  
    @media ${device.mobileL} {
        .page-detail {
          margin: 0px 24px;
        }
    }
  
    @media ${device.mobileM} {
        .page-detail {
          margin: 0px 24px;
        }
    }
  
    @media ${device.mobileS} {
        .page-detail {
          margin: 0px 24px;
        }
    }

`;

const ExhibitsListStyle = styled.div`
  max-width: 1258px;
  padding-top: 40px;
  margin-bottom: 25px;
`;

const FamilyExhibitsStyle = styled.section`
  background-color: white;
  /* position: relative; */
  h2 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 53px;
    letter-spacing: 0.03em;
    color: #000000;
    margin: 0;
  }
  .copy-quote {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 125px;
    background: rgba(56, 240, 240, 0.2);
    padding: 80px 10vw 211px;
    .copy {
      /* max-width: 543px; */
      flex: 0.9;
    }
    .quote {
      /* min-width: 587px; */
      flex: 1;
      .quote-container {
        padding: 40px 0 0;
        position: relative;
        img {
          position: absolute;
          top: 5px;
          left: -36px;
          z-index: 1;
        }
        .quote-text {
          font-size: 30px;
          font-weight: 300;
          line-height: 40px;
          letter-spacing: 0.03em;
          color: #000000;
          margin-bottom: 20px;
          position: inherit;
          z-index: 9;
        }
        .quote-author {
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.05em;
          color: #000000;
          span {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.085em;
            color: #00AFB5;
          }
        }
      }
    }
  }
  .family-exhibits {
    display: flex;
    gap: 29px;
    flex-wrap: wrap;
    padding: 80px 10vw 55px;
    margin-top: -220px;
    .exhibit {
      width: 399px;
      img {
        border-radius: 20px;
      }
      h4 {
        font-family: 'Oswald';
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #2A2A2A;
        margin: 6px 0px;
      }
    }
  }

  @media ${device.tablet} {

    .copy-quote {
      flex-direction: column;
      gap: 40px;
      padding: 56px 10vw 230px;
      .quote {
        .quote-container {
          img {
            top: 26px;
            left: -6px;
            width: 30px;
            height: 30px;
          }
          .quote-text {
            font-size: 18px;
            font-weight: 300;
            line-height: 24px;
            letter-spacing: 0.03em;
            text-align: left;
          }
          .quote-author {
            font-weight :500;
            font-size:16px;
            line-height: 23.71px;
            letter-spacing:8.5%;
            span {
              font-weight :400;
              font-size: 12px;
              line-height: 15px;
              letter-spacing: 5%;
            }
          }
        }
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    .family-exhibits {
      display: flex;
      gap:20px; 
      margin-top: -200px;
      .exhibit {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
        h4 {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.085em;
          text-align: left;
          margin-bottom: 4px;
        }
      }
    }
 
  }

  @media ${device.mobileL} {
      .copy-quote {
        gap: 0px;
        padding: 48px 10vw 200px;
      }
  }

  @media ${device.tablet} {
        .family-exhibits {
          padding: 5vh 36px;
        }
    }
  
    @media ${device.mobileL} {
        .family-exhibits {
          padding: 5vh 24px;
        }
    }
  
    @media ${device.mobileM} {
        .family-exhibits {
          padding: 5vh 24px;
        }
    }
  
    @media ${device.mobileS} {
        .family-exhibits {
          padding: 5vh 24px;
        }
    }
`;

export default function ExhibitsPage({ exhibits, familyExhibits }) {
  return (
    <>
      <ContainerBox>
        <ExhibitsPageStyle>
          <div className="page-detail">
            <h1>Exhibits</h1>
            <p>
              Book one of SpeakOut's award-winning exhibitions that explore history, race, family diversity, sexual orientation gender identity, and culture. Whether presented in person or virtually, each powerful exhibit offers an unforgettable educational experience.
            </p>
          </div>
          <ExhibitsListStyle>
            {
              exhibits.data.map(exhibit => (
                <Exhibit key={exhibit.id} exhibit={{ exhibit }} />
              ))
            }
          </ExhibitsListStyle>
        </ExhibitsPageStyle>
      </ContainerBox>
      <FamilyExhibitsStyle>
        <div className="copy-quote">
          <div className="copy">
            <h2>Family Diversity Exhibits</h2>
            <p>
              These award-winning, traveling photo-text exhibits tell the stories of real people and help eliminate prejudice, stereotyping, bullying, and harassment of people who are discriminated against due to sexual orientation, genter, gender identity, race, national origin, religion, and disabilities of all kinds. Bring one or more to your campus, house of worship, workplace, library, museum, corporate headquarters, conference, or community gathering.
            </p>
            <p>
              Each easy-to-display exhibition includes approximately 20 museum-quality framed photographs (16" x 20") along with accompanying laminated text. Several of the exhibits are also available for virtual screenings. Peggy Gillespie, the Co-Founder and Director of Family Diversity Projects, is also available to speak in conjunction with any exhibition.
            </p>
          </div>
          <div className="quote">
            <div className="quote-container">
              <Image
                src={quotemark}
                alt="Quote"
                width="83"
                className='quote-image'
              />
              <div className="quote-text">
                An unforgettable experience. I witnessed first-hand the incredible power of the dialogue that comes from experiencing the photographs and the text panels. The exhibit touched every student I spoke with, whether or not they had their own story to tell.
              </div>
              <div className="quote-author">
                — Dale Rogers Marshall <span>President, Wheaton College, Norton, MA</span >
              </div>
            </div>
          </div>
        </div>
        <div className="family-exhibits">
          {
            familyExhibits.data.map(familyExhibit => (
              <div className="exhibit" key={familyExhibit.id}>
                <Image
                  src={familyExhibit.attributes.image.data.attributes.url}
                  alt={familyExhibit.attributes.name}
                  width={399}
                  height={243}
                  priority
                />
                <h4>{familyExhibit.attributes.name}</h4>
                <p>{familyExhibit.attributes.description}</p>
                <ButtonStyles theme={{ main: "#00AFB5;" }} style={{ display: familyExhibit.attributes.video_url === null ? "none" : "flex" }}>
                  <Link href={familyExhibit.attributes.video_url === null ? "/#" : familyExhibit.attributes.video_url}>Watch a clip</Link>
                </ButtonStyles>
              </div>
            ))
          }
        </div>
      </FamilyExhibitsStyle>
    </>
  );
}

export async function getStaticProps() {
  const exhibits = await loadAPI("exhibits");
  const familyExhibits = await loadAPI("family-diversity-exhibits")
  return { props: { exhibits, familyExhibits } }
}