import ButtonStyles from "@/components/styles/ButtonStyles";
import Link from "next/link";
import styled from "styled-components";

const ThankYouStyle = styled.section`
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
  p {
    color: #2A2A2A;
    margin: 0 0 35px;
  }
`;

export default function ThankYouPage() {
  return (
    <ThankYouStyle>
      <h1>Thank you for signing up!</h1>
      <p>You will now receive updates from SpeakOut.</p>
      <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/">Back to Home</Link></ButtonStyles>
    </ThankYouStyle>
  );
}