import styled from "styled-components";
import NeedHelp from "@/components/NeedHelp";
import { loadFAQs } from "@/lib/load-faqs";
import FAQ from "@/components/FAQ";
import { device } from "@/components/device";
import ContainerBox from "@/components/styles/ContainerBox";
import Head from 'next/head'

const FAQStyle = styled.section`
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

  .question-answer {
    background: rgba(242, 242, 242, 1);
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      p {
        font-family: 'Oswald';
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #000000;
        max-width: 1000px;
        margin: 0;
      }
      .icon {
        margin-left: 10px;
        color: #F8A151;
        font-size: 55px;
        line-height: 0;
        font-weight: 320
      }
    }

    .answer {
      /* display: none; */
      padding: 0 20px 20px;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05em;
        margin: 14px 0;
      }
      a {
        color: inherit;
        text-decoration: underline;
      }
    }
  }

  @media ${device.tablet} {
    padding: 50px 0 0;

    h1 {
     
      font-size: 30px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.05em;
      text-align: left;      
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

    .question-answer {
      .question {
        padding: 16px;
        p {
         
          font-size: 14px; 
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 0.05em; 
          text-align: left;
        }

        .icon {
        color: #F8A151;
        font-size: 40px;
        line-height: 0;
        font-weight: 320
        }
      }

      .answer {
        padding: 0 16px 16px;

        p {
          margin: 8px 0;
        }
      }
    }
  }

  @media ${device.mobileL} {
    padding: 36px 0 0;
  }


`;

export default function FAQPage({ faqs }) {
  return (
    <>
      <ContainerBox>
        <Head>
          <title>SpeakOut | FAQs </title>
          <meta property="og:title" content="SpeakOut | FAQs"/>
          <meta property="og:description" content="Voices Changing Lives" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.speakoutnow.org/faq" />
          <meta property="og:image" content="https://speakout-website.s3.amazonaws.com/speakout_logo_dark_c683312f3e.png" />
        </Head>
        <FAQStyle>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <p>Here are brief responses to questions most often asked of us:</p>
          {
            faqs.data.map(faq => (
              <FAQ question={faq.attributes.question} answer={faq.attributes.answer} key={faq.id} />
            ))
          }
        </FAQStyle>
      </ContainerBox>
      <NeedHelp />
    </>
  );
}

export async function getStaticProps() {
  const faqs = await loadFAQs();
  return { props: { faqs } }
}