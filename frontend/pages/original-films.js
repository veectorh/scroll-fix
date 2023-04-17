import styled from "styled-components";
import Image from 'next/image';
import ButtonStyles from "@/components/styles/ButtonStyles";
import ReactMarkdown from "react-markdown";
import { loadAPI } from "@/lib/load-api";
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";
import Head from 'next/head'
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

const OriginalFilmStyles = styled.section`
  padding: 100px 0 0;
  max-width: 1340px;
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
    /* flex-wrap: wrap; */
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
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }

    h2 {
      //styleName: H1 Mobile;
     
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.085em;
      text-align: left;
    }

    p {
      margin: 0 0 24px;
    }

    .movies {
      gap: 24px;
      flex-direction: column;
      .movie {
      .movie-image {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
          }
      }
    }
    }

    .callout {
      margin-top: 10px;
      padding: 20px 20px 30px;
      h2 {
        text-align: center;
        
      }
      p{
        //styleName: Body Copy;
        font-family: Fira Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-align: center;
        
      }
    }
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
  }

`;

export default function OriginalFilmsPage({ films }) {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  console.log("FILMS", films);

  return (
    <>
      <Head>
        <title>SpeakOut | Original Films </title>
        <meta property="og:title" content="SpeakOut | Original Films"/>
        <meta property="og:description" content="Voices Changing Lives" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speakoutnow.org/original-films" />
        <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
      </Head>
      <OriginalFilmStyles>
        <ContainerBox>
          <div className="intro">
            <h1>SPEAKOUT ORIGINAL FILMS</h1>
            <p>Explore our selection of SpeakOut-produced films and learn about the talented speakers and artists involved. Support the next generation of artists and filmmakers by watching and contributing to our films.</p>
          </div>
          <div className="movies">
            {
              films.data.map(film => (
                <div className="movie" key={film.id}>
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
                    <ButtonStyles theme={{ main: "#00AFB5" }} style={{ display: film.attributes.trailer_url === null ? "none" : "flex"}} onClick={handleButtonClick}>
                      <a>Watch the trailer</a>
                    </ButtonStyles>
                    {film.attributes.trailer_url && showModal && (
                      <VideoModal videoSrc={film.attributes.trailer_url} onClose={handleCloseModal} />
                    )}
                    <ButtonStyles theme={{ main: "#00AFB5" }} style={{ display: film.attributes.buy_url === null ? "none" : "flex"}}>
                      <a href={film.attributes.buy_url} target="_blank">Buy the film</a>
                    </ButtonStyles>
                  </div>
                </div>
              ))
            }
          </div>
      </ContainerBox>
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
    </>
  );
}

export async function getStaticProps() {
  const films = await loadAPI("original-films");
  return { props: { films } }
}