import Image from 'next/image';
import Link from 'next/link';
import FooterStyles from './styles/FooterStyles';
import ButtonStyles from './styles/ButtonStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <div className="newsletter-footer">
        <div className="newsletter">
          <h4>Join Our Newsletter</h4>
          <p>Stay informed on when speakers and artists will be in your area and receive updates on new educational resources.</p>
          <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }} fullWidth={true}><Link href="#">Sign Up Now</Link></ButtonStyles>
        </div>
        <div className="instagram-section">
          <h4>Follow us <div className="br" /> On Instagram</h4>
          <div className='instagram-images'>
            <a href="https://www.instagram.com/p/CrTihQXLo0h/" target="_blank" rel="noreferrer">
              <Image
                src='/images/ig1.jpg'
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CrRmfo-PtDj/" target="_blank" rel="noreferrer">
              <Image
                src='/images/ig2.jpg'
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CrOov-tP9lk/" target="_blank" rel="noreferrer">
              <Image
                src='/images/ig3.jpg'
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CrJw_1VPK2o/" target="_blank" rel="noreferrer">
              <Image
                src='/images/ig4.jpg'
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            {/* <a href="https://www.instagram.com/p/CnpuzElyLbV/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/326306315_1538939279844994_291280877626659987_n.jpg?stp=c0.169.1349.1349a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=3BMMRZD37GEAX-cCF1q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDtlDEKq-P2PsAMNXD7negs-6i8MRUucpiQiGKsAsOyDg&oe=63F3E4D5&_nc_sid=8fd12b"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CnF3sWOPKmE/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/323792812_630842359042560_7318687714542453803_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=KhXwE6LCBZAAX8vEaKe&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfALwB08OLJ-sh3E4g0Ca2zRaglkg2GRL-e_Z10hsKHalg&oe=63F4C053&_nc_sid=8fd12b"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo-social">
          <div className='logo'>
            <Link href="/">
              <Image
                src="/images/speakout-logo.png"
                alt="Speakout"
                width="172"
                height="79"
                priority
              />
            </Link>
          </div >
          <div className="social">
            <a href="https://www.facebook.com/SpeakOutSpeakers" target="_blank" rel="noreferrer">
              <Image
                src='/images/facebook.png'
                alt="Facebook"
                width="12"
                height="21"
              />
            </a>
            <a href="https://www.instagram.com/SpeakOutspeakers" target="_blank" rel="noreferrer">
              <Image
                src='/images/instagram.png'
                alt="Instagram"
                width="20"
                height="20"
              />
            </a>
            <a href="https://twitter.com/SpeakOutIDEC" target="_blank" rel="noreferrer">
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width="23"
                height="19"
              />
            </a>
          </div >
        </div>
        <div className="mission">
          <h5>The Institute for Democratic<br/> Education and Culture</h5>
          <p>A mission-driven speakers agency <br/>and education institute.</p>
        </div>
        <div className="contact-info">
          <div className="image-info">
            <div className="image">
              <Image
                src='/images/email-icon.png'
                alt="Email"
                width="24"
                height="17"
                priority
              />
            </div>
            <div className="info">
              <p><a href="mailto:info@speakoutnow.org">info@speakoutnow.org</a></p>
            </div>
          </div>
          <div className="image-info">
            <div className="image">
              <Image
                src="/images/phone-icon.png"
                alt="Phone"
                width="19"
                height="19"
                priority
              />
            </div>
            <div className="info">
              <p><a href="tel:+15106479115">+1 (510) 647-9115</a></p>
            </div>
          </div>
          <div className="image-info">
            <div className="image">
              <Image
                src="/images/location-icon.png"
                alt="Address"
                width="14"
                height="21"
                priority
              />
            </div>
            <div className="info">
              <p>PO Box 22748, Oakland, CA 94609</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 SpeakOut. All rights reserved. <a href="/privacy-policy" className="privacy">Privacy policy</a>.</p>
      </div>
    </FooterStyles>
  )
}