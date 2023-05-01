import styled from 'styled-components';
import { device } from '../device';
const FooterStyles = styled.footer`
  .newsletter-footer {
    padding: 0px 90px;
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.05em;
    color: white;
    text-transform: uppercase;
    margin-bottom: 10px;

    span {
      font-size: 18px;
      text-transform: lowercase;
      font-weight: 300;
    }
  }

  .instagram-handle:hover {
    color: white;
    span {
      color: #F8A151;
      font-weight: 400;
    }
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
    padding: 66px 30px 62px;
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

    .privacy {
      color: white;
      text-decoration: underline;
    }
    .privacy:hover {
      color: #F8A151
    }
  }

  @media ${device.tablet} {
    h4{
      //styleName: H3 Mobile;
     
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.05em;
      text-align: left;

      span {
        font-size: 12px;
        font-weight: 300;

      }
    }

    .newsletter-footer {
      padding: 16px 30px;
      p {
        //styleName: Body Mobile;
        /* font-family: Fira Sans; */
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.05em;
        text-align: left;
      }
    }

    .br {
      display: inline;
    }

    .newsletter-footer {
      flex-direction: column;
      gap: 20px;
    }
    
    .footer {
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 30px;
      gap: 16px;
      .logo-social {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        .logo img {
          width: 146px;
          height: 66px;
        }
        .social {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
      }

      .contact-info {
        .image-info {  
          .info {
            p {
              a {
                //styleName: Body Mobile;
                /* font-family: Fira Sans; */
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0.05em;
                text-align: left;
              }
            }
            p {
                //styleName: Body Mobile;
                /* font-family: Fira Sans; */
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0.05em;
                text-align: left;
            }
          }
        }
      }

      .mission h5 {
       
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; 
        letter-spacing: 0.05em;
        text-align: left;

      }
      .mission p {
        //styleName: Body Mobile;
        /* font-family: Fira Sans; */
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.05em;
        text-align: left;
      }
    }
  }
`;

export default FooterStyles;