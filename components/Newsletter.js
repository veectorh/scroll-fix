import { useState } from "react";
import ButtonStyles from './styles/ButtonStyles';
import Link from 'next/link';
import FooterStyles from './styles/FooterStyles';
import NewsletterModal from './NewsletterModal';

export default function Newsletter() {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="newsletter">
      <h4>Join Our Newsletter</h4>
      <p>Stay informed on when speakers and artists will be in your area and receive updates on new educational resources.</p>
      <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }} fullWidth={true} onClick={handleButtonClick}>
        <Link href="#">Sign Up Now</Link>
      </ButtonStyles>
      {showModal && (
        <NewsletterModal onClose={handleCloseModal} />
      )}
    </div>
  )
}