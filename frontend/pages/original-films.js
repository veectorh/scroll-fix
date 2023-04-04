import styled from "styled-components";
import Image from 'next/image';
import ButtonStyles from "@/components/styles/ButtonStyles";
import ReactMarkdown from "react-markdown";
import { loadAPI } from "@/lib/load-api";

const OriginalFilmStyles = styled.section`
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
  .buttons {
    display: flex;
    gap: 15px;
  }
  .movies {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    .movie {
      margin-bottom: 30px;
      .movie-image {
        max-width: 593px;
        background: #000000;
          img {
            width: 100%;
            object-fit: cover;
            overflow: hidden;
          }
      }

      .movie-description {
        max-width: 533px;
      }
    }
  }

  .callout {
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 80px;
    margin-top: 50px;
    p {
      text-align: center;
    }
  }
`;

export default function OriginalFilmsPage({ films }) {
  return (
    <OriginalFilmStyles>
      <div className="intro">
        <h1>SPEAKOUT ORIGINAL FILMS</h1>
        <p>Explore our selection of SpeakOut-produced films and learn about the talented speakers and artists involved. Support the next generation of artists and filmmakers by watching and contributing to our films.</p>
      </div>
      <div className="movies">
        {
          films.data.map(film => (
            <div className="movie">
              <div className="movie-image">
                <Image 
                  src={film.attributes.image.data.attributes.url}
                  alt={film.attributes.name}
                  width={400} 
                  height={838} 
                  priority
                />
              </div>
              <div className="movie-description">
                <h2>{film.attributes.name}</h2>
                <ReactMarkdown children={film.attributes.description} />
              </div>
              <div className="buttons">
                <ButtonStyles theme={{ main: "#00AFB5" }} style={{ display: film.attributes.trailer_url === null ? "none" : "flex"}}>
                  <a href={film.attributes.trailer_url} target="_blank" >Watch the trailer</a>
                </ButtonStyles>
                <ButtonStyles theme={{ main: "#00AFB5" }} style={{ display: film.attributes.buy_url === null ? "none" : "flex"}}>
                  <a href={film.attributes.buy_url} target="_blank">Buy the film</a>
                </ButtonStyles>
              </div>
            </div>
          ))
        }
      </div>

      <div className="callout">
        <h2>Apply to SpeakOut’s Emerging Filmmakers Fund</h2>
        <p>We support and nurture the next generation of talented and diverse filmmakers by providing grants and resources to help bring their vision to life. Whether you are a budding filmmaker looking to apply, or a film-lover looking to support the cause, we welcome you to join us!</p>
        <div className="buttons">
            {/* <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Submit to the fund</a>
            </ButtonStyles> */}
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="https://www.paypal.com/us/fundraiser/charity/2248447" target="_blank">Donate to the fund</a>
            </ButtonStyles>
          </div>
      </div>
    </OriginalFilmStyles>

  );
}

export async function getStaticProps() {
  const films = await loadAPI("original-films");
  return { props: { films } }
}