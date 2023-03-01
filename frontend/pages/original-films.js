import styled from "styled-components";
import Image from 'next/image';
import ButtonStyles from "@/components/styles/ButtonStyles";

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

export default function OriginalFilmsPage() {
  return (
    <OriginalFilmStyles>
      <div className="intro">
        <h1>SPEAKOUT ORIGINAL FILMS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin fringilla sagittis. Nunc ultrices turpis eget nunc consequat vulputate. Donec libero magna, tincidunt nec sapien ut, porttitor gravida tortor.</p>
      </div>
      <div className="movies">
        <div className="movie">
          <div className="movie-image">
            <Image 
              src="https://fastly.picsum.photos/id/120/500/800.jpg?hmac=p9-EelyvGmpARM3F5pvBFpk78UPG16ENIcsomNlGpnE"
              alt="Night sky"
              width={400} 
              height={838} 
              priority
            />
          </div>
          <div className="movie-description">
            <h2>Vocabulary of Change</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim tortor. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ultricies mi eget mauris pharetra. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dis parturient montes nascetur ridiculus mus mauris vitae. At auctor urna nunc id cursus metus aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Sodales ut etiam sit amet. Enim sed faucibus turpis in eu mi </p>
          </div>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Watch the trailer</a>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Buy the film</a>
            </ButtonStyles>
          </div>
        </div>

        <div className="movie">
          <div className="movie-image">
            <Image 
              src="https://fastly.picsum.photos/id/381/500/800.jpg?hmac=Jm6Tr1BCCwbiDvzCtpSbTvUgvq3vOpYWng89mXoi0Ug"
              alt="Night sky"
              width={400} 
              height={838} 
              priority
            />
          </div>
          <div className="movie-description">
            <h2>Vocabulary of Change</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim tortor. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ultricies mi eget mauris pharetra. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dis parturient montes nascetur ridiculus mus mauris vitae. At auctor urna nunc id cursus metus aliquam. At elementum eu facilisis sed odio morbi quis commodo odio. Sodales ut etiam sit amet. Enim sed faucibus turpis in eu mi </p>
          </div>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Watch the trailer</a>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Buy the film</a>
            </ButtonStyles>
          </div>
        </div>
      </div>

      <div className="callout">
        <h2>Apply to SpeakOut’s Emerging Filmmakers Fund</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim  magna aliqua. Nibh ipsum consequat nisl vel pretium. Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim</p>
        <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Submit to the fund</a>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5" }}>
              <a href="#" target="_blank">Donate to the fund</a>
            </ButtonStyles>
          </div>
      </div>
    </OriginalFilmStyles>

  );
}