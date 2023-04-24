import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import { loadStaff } from "@/lib/load-staff";
import { loadDirectors } from "@/lib/load-directors";
import { useState } from 'react';
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";
import Head from 'next/head'

const OurTeamStyles = styled.section`
  padding: 100px 0 0;
  max-width: 1250px;
  margin: 0 auto 40px;
  h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 89px;
    letter-spacing: 0.03em;
    color: #F8A151;
    margin: 0 0 15px;
  }
  h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 53px;
    letter-spacing: 0.03em;
    color: #000000;
    margin: 20px 0 10px;;
  }
  p {
    color: #2A2A2A;
    margin: 0 0 35px;
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
    }

    p {
      //styleName: Body Mobile;
      /* font-family: Fira Sans; */
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
`;

const TeamImagesStyles = styled.section`
  /* padding: 100px 0 0; */
  max-width: 1250px;
  margin: 0 auto 40px;
  padding-top: 20px;

  .heading {
    h2 {
      font-weight: 400;
      font-size: 36px;
      line-height: 53px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #000000;
      width:100%; 
      border-bottom: 1px solid #000; 
      line-height:0.1em;
      margin: 0;
      span {
        background:#fff; 
        padding: 0 10px 0 0;
      }
    }
  }

  @media ${device.tablet} {
    .heading h2{
     
      font-size: 20px;
      font-weight: 500;
      line-height: 1px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    
  }

`;

const MembersListStyles = styled.div`
  padding: 40px 0 60px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 28px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-row-gap: 16px;
    padding: 40px 0 0px;
  }
`;

//   border-radius: 20px;
//   overflow: hidden;
//   position: relative;
//   height: 466px;
//   background: rgba(67, 67, 67, 0.6);
//   img {
//     width: 399px;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 20px;
//     overflow: hidden;
//   }
//   .speaker-info {
//     background-color: rgba(0, 0, 0, 0.5);
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 80px;
//     padding: 8px 16px;
//     max-width: 399px;
//     overflow: hidden;
//     border-bottom-right-radius: 20px;
//     cursor: pointer;
//     .name {
//       font-family: 'Oswald';
//       font-size: 18px;
//       font-weight: 500;
//       line-height: 25px;
//       letter-spacing: 0.085em;
//       text-transform: uppercase;
//       color: #F8A151;
//       margin: 0;
//     }
//     .tagline {
//       font-size: 12px;
//       font-weight: 400;
//       line-height: 17px;
//       letter-spacing: 0.05em;
//       color: #ffffff;
//       margin: 0;
//     }
//   }
// `;
const TeamMemberStyles = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 466px;
  background: rgba(67, 67, 67, 0.6);
  position: relative;
  img {
    /* min-width: 399px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    overflow: hidden;
  }
  .speaker-info {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({ isExpanded }) => (isExpanded ? '100%' : '80px')};
    padding: 8px 16px;
    max-width: 100%;
    overflow: hidden;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    transition: height 0.3s ease-in-out;
    .name {
      font-family: 'Oswald';
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0.085em;
      text-transform: uppercase;
      color: #F8A151;
      margin: 0;
    }
    .tagline {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #ffffff;
      margin: 0;
    }
    .description {
      margin-top: 27px;
      font-size: 14px;
      color: #ffffff;
    }
    .icon {
      color: #F8A151;
      font-size: 55px;
      line-height: 0;
      font-weight: 320;
      position: absolute;
      top: 25px;
      right: 11px;
    }
  }

  @media ${device.tablet} {
  .speaker-info {
    height: ${({ isExpanded }) => (isExpanded ? '100%' : '74px')};
    .name {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    .tagline {
      /* font-family: Fira Sans; */
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
  }
`;


function OurTeamPage({ staff, directors }) {
  const jeaniIndex = staff.data.findIndex(item => item.attributes.name === "Jean Caiani");
  const shavonneeIndex = staff.data.findIndex(item => item.attributes.name === "Shavonnee Clark-Lowe");
  // move Jean Caiani to the first index
  staff.data.splice(0, 0, staff.data.splice(jeaniIndex, 1)[0]);
  // move Shavonnee to the second index
  staff.data.splice(1, 0, staff.data.splice(shavonneeIndex, 1)[0]);

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>

      <Head>
        <title>SpeakOut | Our Team</title>
        <meta property="og:title" content="SpeakOut | Our Team"/>
        <meta property="og:description" content="Voices Changing Lives" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speakoutnow.org/our-team" />
        <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
      </Head>
      <ContainerBox>
        <OurTeamStyles>
          <h1>Our Team</h1>
          <p>Meet the passionate and dedicated team behind SpeakOut, who are on a mission to create positive change through education, storytelling, and activism.</p>
        </OurTeamStyles>

        <TeamImagesStyles>
          <div className="heading">
            <h2><span>Staff</span></h2>
          </div>
          <MembersListStyles>
            {staff.data.map((s, index) => (
              <TeamMemberStyles
                key={index}
                isExpanded={index === expandedIndex}
                onClick={() => toggleExpansion(index)}
              >
                <Image 
                  src={s.attributes.photo.data?.attributes.url} 
                  alt={s.attributes.name} 
                  width={399} 
                  height={466} 
                  priority
                />
                <div className="speaker-info">
                  <p className="name">{s.attributes.name}</p>
                  <p className="tagline">{s.attributes.title}</p>
                  <p className="description">{s.attributes.description}</p>
                  <div className="icon">{index === expandedIndex ? '–' : '+'}</div>
                </div>
              </TeamMemberStyles>
            ))}
          </MembersListStyles>
        </TeamImagesStyles>

        <TeamImagesStyles>
          <div className="heading">
            <h2><span>Board of Directors</span></h2>
          </div>
          <MembersListStyles>
            {
              directors.data.map((director, index) => (
                <TeamMemberStyles
                  key={index}
                  isExpanded={index === expandedIndex}
                  onClick={() => toggleExpansion(index)}
                >
                  <Image
                    src={director.attributes.photo.data?.attributes.url}
                    alt={director.attributes.name}
                    width={399}
                    height={466}
                    priority
                  />
                  <div className="speaker-info">
                    <p className="name">{director.attributes.name}</p>
                    <p className="tagline">{director.attributes.title}</p>
                    <p className="description">{director.attributes.description}</p>
                    <div className="icon">{index === expandedIndex ? '–' : '+'}</div>
                  </div>
                </TeamMemberStyles>
              ))
            }
          </MembersListStyles>
        </TeamImagesStyles>
      </ContainerBox>
    </>
  );
}

export async function getStaticProps() {
  const staff = await loadStaff();
  const directors = await loadDirectors();
  return { props: { staff, directors } }
}

export default OurTeamPage;