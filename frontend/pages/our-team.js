import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import { loadStaff } from "@/lib/load-staff";
import { loadDirectors } from "@/lib/load-directors";

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
`;

const MembersListStyles = styled.div`
  padding: 40px 0 60px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 28px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const TeamMemberStyles = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 466px;
  background: rgba(67, 67, 67, 0.6);
  img {
    width: 399px;
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
    height: 80px;
    padding: 8px 16px;
    max-width: 399px;
    overflow: hidden;
    border-bottom-right-radius: 20px;
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
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #ffffff;
      margin: 0;
    }
  }
`;



function OurTeamPage({ staff, directors }) {
  return (
    <>
      <OurTeamStyles>
        <h1>Our Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc consequat vulputate. Donec libero magna, tincidunt nec sapien ut, porttitor gravida tortor.</p>
      </OurTeamStyles>
  
      <TeamImagesStyles>
        <div className="heading">
          <h2><span>Staff</span></h2>
        </div>
        <MembersListStyles>
          {
            staff.data.map(s => (
              <TeamMemberStyles>
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
                </div>
              </TeamMemberStyles>
            ))
          }
        </MembersListStyles>
      </TeamImagesStyles>

      <TeamImagesStyles>
        <div className="heading">
          <h2><span>Board of Directors</span></h2>
        </div>
        <MembersListStyles>
          {
            directors.data.map(director => (
              <TeamMemberStyles>
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
                </div>
              </TeamMemberStyles>
            ))
          }
        </MembersListStyles>
      </TeamImagesStyles>
    </>
  );
}

export async function getStaticProps() {
  const staff = await loadStaff();
  const directors = await loadDirectors();
  return { props: { staff, directors }}
}

export default OurTeamPage;