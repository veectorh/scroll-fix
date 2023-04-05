import ButtonStyles from "@/components/styles/ButtonStyles";
import HelpStyles from "@/components/styles/HelpStyles";
import Link from "next/link";
import Head from 'next/head'

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>SpeakOut | 404</title>
      </Head>
      <HelpStyles>
        <h1>We couldn't find the page you requested.</h1>
        <p>The page may have been removed, renamed, or made temporarily unavailable.</p>
        <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/">Back to Home</Link></ButtonStyles>
      </HelpStyles>
    </>
  );
}