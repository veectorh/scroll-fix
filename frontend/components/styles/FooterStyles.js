import styled from 'styled-components';

const FooterStyles = styled.footer`
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.05em;
    color: white;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: white;
    margin: 0;
    padding: 0;
  }
  p {
    color: white;
    margin: 0;
    margin-bottom: 17px;
  }

  .newsletter-footer {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 40px 7vw;
    background: #00AFB5;

    .newsletter {
      max-width: 514px;
    }
    .instagram-section {
      max-width: 536px;

      .instagram-images {
        display: flex;
        gap: 10px;
      }
    }
  }
  .newsletter-footer > * {
    flex-basis: 100%
  }
  .footer {
    background: #2A2A2A;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9vw;
    padding: 66px 0 62px;
    .logo-social {
      .logo {
        margin-bottom: 21px;
      }
      a {
        margin: 0 5px;
      }
    }
    .mission {
      width: 281px;
      p {
        margin-top: 12px;
      }
    }
    .contact-info {
      .image-info {
        display: flex;
        gap: 15px;

        .info {
          p {
            a {
              text-decoration: none;
              color: inherit;
            }
            
          }
        }
      }
    }
  }
  .copyright {
    background: #1E1E1E;
    text-align: center;
    padding: 10px 0;
    p {
      font-size: 8px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.05em;
      margin-bottom: 0;
    }
  }
`;

export default FooterStyles;