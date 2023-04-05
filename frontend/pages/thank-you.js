import ButtonStyles from "@/components/styles/ButtonStyles";
import HelpStyles from "@/components/styles/HelpStyles";
import Link from "next/link";
import Head from 'next/head'

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>SpeakOut | Thank You</title>
      </Head>
      <HelpStyles>
        <h1>Thank you for signing up!</h1>
        <p>You will now receive updates from SpeakOut.</p>
        <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/">Back to Home</Link></ButtonStyles>
      </HelpStyles>
    </>
  );
}