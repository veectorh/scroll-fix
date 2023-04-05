import styled from "styled-components";
import Head from 'next/head'

const InquiryFormStyle = styled.section`
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
    margin: 0 0 0;
    max-width: 950px;
  }

  .form {
      width: 900px;

      iframe {
        border: none;
        height: 2300px;
        width: 100%;
        margin: 0;
        padding: 0;

        a {
          color: orange;
        }
      }
    }
`;
export default function InquiryFormPage() {
  return (
    <>
      <Head>
        <title>SpeakOut | Inquiry Form</title>
      </Head>
      <InquiryFormStyle>
        <h1>SPEAKERS INQUIRY FORM</h1>
        <p>Please submit the form below to request more information on speakers including fees and availability. <br/>For immediate assistance, please call 510-647-9115 or email info@speakoutnow.org. <br/>For other inquiries, please use our contact form.<br/><br/>
        
        *Required Field.</p>

        <div className="form">
          <iframe src="https://speakout.formstack.com/forms/inquiry_form" title="Inquiry Form" width="600" height="1000"></iframe>
        </div>
      </InquiryFormStyle>
    </>
  );
}
