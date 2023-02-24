import styled from 'styled-components';
import Image from "next/image";
import ButtonStyles from './styles/ButtonStyles';

const SponsoredProjectStyle = styled.div`
  width: 400px;
  img {
    object-fit: cover;
  }
  h4 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #000000;
  }
`;

export default function SponsoredProject({ project }) {
  return (
    <SponsoredProjectStyle>
      <Image
        src={project.attributes.image.data.attributes.url}
        alt={project.attributes.name}
        width="399"
        height="243"
        priority
      />
      <h4>{project.attributes.name}</h4>
      <p>{project.attributes.description}</p>
      <ButtonStyles theme={{ main: "#00AFB5" }}>
        <a href={project.attributes.learn_more_url} target="_blank">Learn More</a>
      </ButtonStyles>
    </SponsoredProjectStyle>
  );
};