import styled from 'styled-components';
import Image from "next/image";
import ButtonStyles from './styles/ButtonStyles';
import ReactMarkdown from "react-markdown";
import { device } from './device';

const SponsoredProjectStyle = styled.div`
  width: 400px;
  img {
    object-fit: contain;
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
  p {
    a {
    text-decoration: underline;
    color: inherit;
  }
  }
  @media ${device.tablet} {
    width: 100%;

    h4 { 
      //styleName: H2 Mobile;
      font-family: Oswald;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.085em;
      text-align: left;
    }
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
      <ReactMarkdown children={project.attributes.description} />
      <ButtonStyles theme={{ main: "#00AFB5" }}>
        <a href={project.attributes.learn_more_url} target="_blank">Learn More</a>
      </ButtonStyles>
    </SponsoredProjectStyle>
  );
};