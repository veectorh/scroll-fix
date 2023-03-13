import ButtonStyles from "@/components/styles/ButtonStyles";
import HelpStyles from "@/components/styles/HelpStyles";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <HelpStyles>
      <h1>Error 404.  We couldn't find the page you requested.</h1>
      <p>The page may have been removed, renamed, or made temporarily unavailable.</p>
      <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/">Back to Home</Link></ButtonStyles>
    </HelpStyles>
  );
}