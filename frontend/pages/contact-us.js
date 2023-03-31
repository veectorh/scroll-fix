import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';
import { device } from "@/components/device";
const ContactUsStyle = styled.section`
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

  .contact {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 30px;

    .contact-area {
      max-width: 260px;
      padding-top: 40px;
      .contact-info {
        .image-info {
          display: flex;
          gap: 15px;

          .info {
            p {
              margin-bottom: 15px;
              a {
                text-decoration: none;
                color: inherit;
              }    
            }
          }
        }
      }

      .logo-social {
        .logo {
          margin-bottom: 21px;
        }
        .social {
          margin-top: 30px;
        }
        a {
          margin: 0 5px;
        }
      }
    }

    .form {
      max-width: 900px;
      width: 100%;
      iframe {
        border: none;
        height: 1000px;
        width: 100%;
        margin: 0;
        padding: 0;

        a {
          color: orange;
        }
      }
    }
  }


  @media ${device.tablet} {
    .contact {
     flex-direction: column;
     .contact-area {
      max-width: 100%;
      width: 100%;
     }
    }
  }
`;

export default function ContactUsPage() {
  return (
    <ContactUsStyle>
      <h1>CONTACT US</h1>
      <p>Contact us for general inquiries or to learn more about how to get involved in SpeakOut's efforts for social justice.</p>

      <div className="contact">

        <div className="contact-area">
          <div className="logo-social">
            <div className='logo'>
              <Link href="/">
                <Image
                  src="/images/speakout-logo-dark.png"
                  alt="Speakout"
                  width="258"
                  height="119"
                  priority
                />
              </Link>
            </div >
          </div>

          <p>A mission-driven speakers agency<br /> and education institute.</p>

          <div className="contact-info">
            <div div className="image-info">
              <div className="image">
                <Image
                  src="/images/location-icon-dark.png"
                  alt="Address"
                  width="14"
                  height="21"
                  priority
                />
              </div>
              <div className="info">
                <p style={{ paddingLeft: "10px" }}>SpeakOut<br />PO Box 22748<br />Oakland, CA 94609</p>
              </div>
            </div>

            <div className="image-info">
              <div className="image">
                <Image
                  src="/images/phone-icon-dark.png"
                  alt="Phone"
                  width="19"
                  height="19"
                  priority
                />
              </div>
              <div className="info">
                <p style={{ paddingLeft: "5px" }}><a href="tel:+15106010182">+1 (510) 601-0182</a></p>
              </div>
            </div>

            <div className="image-info">
              <div className="image">
                <Image
                  src='/images/email-icon-dark.png'
                  alt="Email"
                  width="24"
                  height="17"
                  priority
                />
              </div>
              <div className="info">
                <p style={{ paddingLeft: "2px" }}><a href="mailto:info@speakoutnow.org">info@speakoutnow.org</a></p>
              </div>
            </div>
          </div>

          <div className="logo-social">
            <div className="social">
              <a href="https://www.facebook.com/SpeakOutSpeakers" target="_blank" rel="noreferrer">
                <Image
                  src='/images/facebook-dark.png'
                  alt="Facebook"
                  width="12"
                  height="21"
                />
              </a>
              <a href="https://www.instagram.com/SpeakOutspeakers" target="_blank" rel="noreferrer">
                <Image
                  src='/images/instagram-dark.png'
                  alt="Instagram"
                  width="20"
                  height="20"
                />
              </a>
              <a href="https://twitter.com/SpeakOutIDEC" target="_blank" rel="noreferrer">
                <Image
                  src="/images/twitter-dark.png"
                  alt="Twitter"
                  width="23"
                  height="19"
                />
              </a>
            </div>
          </div>

        </div>

        <div className="form">
          <iframe src="https://speakout.formstack.com/forms/contact_us" title="Contact Us" width="600" height="400"></iframe>
        </div>
      </div>
    </ContactUsStyle>
  );
}