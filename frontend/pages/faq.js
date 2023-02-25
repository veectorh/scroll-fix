import ButtonStyles from "@/components/styles/ButtonStyles";
import Link from "next/link";
import styled from "styled-components";
import { BsChevronBarExpand } from "react-icons/bs";
import NeedHelp from "@/components/NeedHelp";


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
    /* padding: 20px; */

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

      }
    }

    .answer {
      display: none;
      padding: 0 20px 20px;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05em;
        margin: 0;
      }
    }
  }
`;


export default function FAQPage() {
  return (
    <>
      <FAQStyle>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>Here are brief responses to questions most often asked of us:</p>
        <div className="question-answer">
          <div className="question">
            <p>Does non-profit mean there is no charge for speakers and artists?</p>
            <BsChevronBarExpand className='icon' />
          </div>
          <div className="answer">
            <p>
            While Speak Out is a 501(c)3 tax-exempt organization, speakers and artists do ask an honorarium plus travel expenses and accommodations must be covered. We work with some 100 speakers and artists – some of them make their living through lectures or performances; others are raising funds for their own organizations, communities and causes.<br/><br/>

            Fees range from $3000 and up. While all speakers and artists have a set fee there can sometimes be flexibility. For example, if a speaker or artist is already going to be in your area, block booking may reduce costs. Some speakers have specific criteria on when they might charge less, especially for groups or communities that have less access to funds. Contact Speak Out for costs on the specific people you’re interested in.
            </p>
          </div>
        </div>
        <div className="question-answer">
          <div className="question">
            <p>Where are the speakers and artists located geographically?</p>
            <BsChevronBarExpand className='icon' />
          </div>
        </div>
        <div className="question-answer">
          <div className="question">
            <p>Are SpeakOut speakers and artists available for other events related to their engagement such as book-signings, press interviews, receptions, etc? Are SpeakOut speakers and artists available for other events related to their engagement such as book-signings, press interviews, receptions, etc?</p>
            <BsChevronBarExpand className='icon' />
          </div>
        </div>
      </FAQStyle>
      <NeedHelp />
    </>
  );
}