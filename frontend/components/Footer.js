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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper erat. Sed tempor a dolor et mattis.</p>
          <ButtonStyles theme={{ main: "rgba(9, 88, 91, 0.6)" }} fullWidth={true}><Link href="#">Sign Up Now</Link></ButtonStyles>
        </div>
        <div className="instagram-section">
          <h4>Follow us <br/>On Instagram</h4>
          {/* <div className='instagram-images'>
            <a href="https://www.instagram.com/p/CoczDQrJmEJ/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/329783503_1964936083837401_35886849969918183_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=GYfy4viTVBYAX-B3sBD&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDtzKz-gsRMgBo0WiG6WLNBlCopyNJ37CzfOiC2fgLMgQ&oe=63F3F4B4&_nc_sid=4f375e"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CoIgQ5gSRIp/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/328343721_136142175992300_4959602985400347971_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=c90FY3D9gZoAX9_siM0&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBDwvWhLLVUjeWq0nF-t3BIZLE3Vo-yF6A5lOblviCfjw&oe=63F41F13&_nc_sid=4f375e"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/Cn4-Vhnjz2J/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/327166719_920288815646653_5337147632539691665_n.jpg?stp=c0.280.720.720a_dst-jpg_e15_s640x640&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=wnNmzlnSOkwAX8iZsGF&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBbVjBI-Vdz9q26-c3ZhGfJZPhNgw2A2qOvcv6BwkEXUQ&oe=63F145CE&_nc_sid=8fd12b"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/Cn2U79MDB7P/?hl=en" target="_blank" rel="noreferrer">
              <Image
                src="https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/327108332_896592711691738_9217700112696790543_n.jpg?stp=c0.280.720.720a_dst-jpg_e15_s640x640&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=cTF_m1S07rgAX_d4Bak&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAHBp6byQ_3oZdKfGZeNccnVMWrvuq9vBsvsxcgYlP0mA&oe=63F14811&_nc_sid=8fd12b"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.instagram.com/p/CnpuzElyLbV/?hl=en" target="_blank" rel="noreferrer">
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
            </a>
          </div> */}
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
          <h5>The Institute for Democratice<br/> Education and Culture</h5>
          <p>A mission-driven speakers agency <br/>and education instiute.</p>
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
              <p><a href="tel:+15106010182">+1 (510) 601-0182</a></p>
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