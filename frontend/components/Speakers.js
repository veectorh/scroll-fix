import styled from "styled-components";
import NeedHelp from "./NeedHelp";
import Speaker from "./Speaker";
import ThreeLink from "./ThreeLink";
import TopicListStyles from "./styles/TopicListStyles";

const SpeakersPageStyle = styled.section`
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

const SpeakersListStyles = styled.section`
  padding: 40px 0 100px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default function Speakers(speakers, topics, error) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log("TOPICS:", speakers.topics.data);
  // console.log("SPEAKERS:", speakers);

  return (
    <>
      <SpeakersPageStyle>
        <h1>Speakers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc consequat vulputate. Donec libero magna, tincidunt nec sapien ut, porttitor gravida tortor.</p>
        <div className="filter-description">
          <h4>Filter Speakers by Topic</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc</p>
        </div>
        <TopicListStyles>
          {
            speakers.topics.data.map((topic) => (
              <div key={topic.id}>{topic.attributes.name}</div>
            ))
          }
        </TopicListStyles>
        <div>
          <SpeakersListStyles>
            {
              speakers.speakers.map(speaker => (
                <Speaker key={speaker.id} speaker={speaker} />
              ))
            }
          </SpeakersListStyles>
        </div>
      </SpeakersPageStyle>
      <NeedHelp />
      <ThreeLink />
    </>
  )
};