import styled from "styled-components"
import Speaker from "./Speaker";

const RelatedSpeakersStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1100px; */
  padding: 50px 0 80px;

  .speakers {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
export default function RelatedSpeakers({ relatedSpeakers }) {
  return (
    <RelatedSpeakersStyles>
      <h2>Related Speakers</h2>
      <div className="speakers">
        {
          relatedSpeakers.map(speaker => (
            <Speaker key={speaker.id} speaker={speaker} />
          ))
        }
      </div>
    </RelatedSpeakersStyles>
  )
}