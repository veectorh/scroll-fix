import Link from "next/link";
import HeroStyles from "./styles/HeroStyles";
import ContainerBox from "./styles/ContainerBox";
import VideoModal from "./VideoModal";
import ButtonStyles from "./styles/ButtonStyles";
import SharedBackground from "./styles/SharedBackground";

export default function Hero({showModal, onClick, onClose}){
  return (
    <SharedBackground>
      <HeroStyles>
        <ContainerBox>
          <h1>SPEAKOUT</h1>
          <p className="sub-text">A mission-driven speakers agency and education institute.</p>
          <p className="voices">Voices changing lives.</p>
          <div className="hero-buttons">
            <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/speakers">Explore Our Speakers</Link></ButtonStyles>
            <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }}><Link href="/institute">Explore the Institute</Link></ButtonStyles>
            <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }} onClick={onClick}>
              <a>Watch Our Video <span></span></a>
            </ButtonStyles>
            {showModal && (
              <VideoModal videoSrc="https://www.youtube.com/watch?v=op0SFgqziP4" onClose={onClose} />
            )}
          </div>
        </ContainerBox>
      </HeroStyles>
    </SharedBackground>
  )
}
