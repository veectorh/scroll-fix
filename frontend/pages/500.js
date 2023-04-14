import ButtonStyles from "@/components/styles/ButtonStyles";
import ContainerBox from "@/components/styles/ContainerBox";
import HelpStyles from "@/components/styles/HelpStyles";
import Link from "next/link";
import Head from 'next/head'

export default function ThankYouPage() {
  return (
    <ContainerBox>
      <Head>
        <title>SpeakOut | 500</title>
      </Head>
      <HelpStyles>
        <h1>Our apologies.</h1>
        <p>The system is currently experiencing technical difficulties.</p>
        <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/">Back to Home</Link></ButtonStyles>
      </HelpStyles>
    </ContainerBox>
  );
}