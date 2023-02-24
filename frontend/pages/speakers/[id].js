import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyles from '@/components/styles/ButtonStyles';
import Image from 'next/image';
import TopicListStyles from '@/components/styles/TopicListStyles';
import QuotesCarousel from '@/components/QuotesCarousel';
import OurStore from '@/components/OurStore';

const SpeakerHeroStyles = styled.section`
  background: rgba(56, 240, 240, 0.2);
  display: flex;
  justify-content: space-between;
  .speaker-info {
    padding: 50px 90px;
    .return-link {
      a {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.065em;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #00AFB5;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    h1 {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 89px;
      letter-spacing: 0.03em;
      color: #000000;
      margin: 0;
      padding: 60px 0 15px;
    }
    p {
      color: #000000;
      margin: 0;
      max-width: 800px;
    }
    .buttons {
      display: flex;
      gap: 9px;
      margin-top: 34px;
    }
  }
  .speaker-image {
    img {
      position: relative !important;
      object-fit: cover;
    }
  }
`;

const SpeakerInfoStyles = styled.section`
  display: flex;
  justify-content: center;
  gap: 7em;
  margin-top: 50px;
  .left {
    max-width: 715px;
  }
  .right {
    width: 265px;
  }
  .heading-flex {
    display: flex;
    gap: 115px;
  }
  .headings {
    border-bottom: 1px solid #000000;
  }
  .content {
    padding-bottom: 75px;
  }
  .topics {
    margin: 30px 0;
  }
  .links {
    width: 270px;
    margin: 25px 0 0;
    p {
      font-family: 'Fira Sans', Arial;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.05em;
      text-decoration-line: underline;
      text-transform: capitalize;
      color: #00AFB5;
      margin-bottom: 15px;
    }
  }
  h2 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #000000;
    text-transform: uppercase;
    margin: 0;
    padding: 5px 10px 10px 0px;
    /* text-align: center; */
  }
  .selected {
      color: #00AFB5;
      text-decoration: underline;
      text-underline-offset: 11px;
      text-decoration-thickness: 5px;
  }
  .hide {
    display: none;
  }
`;

export default function SingleSpeaker() {
  const router = useRouter();
  const query = router.query;
  // console.log("PATHNAME", router.query.id);
  // console.log('QUERY', query);
  // console.log('Router:', router.components);
  // const speakerQueryName = query.id.split('-').join(' ');
  // console.log({speakerQueryName});
  // const speakerID = query.speakerID;
  // console.log({speakerID});

  // TODO: LOOK INTO NEXTJS DOCS TO FIND HOW TO SSR ALL INDIVIDUAL SPEAKER PAGES = getStaticProps....


  return (
    <>
      <SpeakerHeroStyles>
        <div className="speaker-info">
          <div className="return-link">
            <Link href="/speakers">Back to All Speakers</Link>
          </div >
          <h1>{query.title}</h1>
          <p>{query.tagLine}</p>
          <div className="buttons">
            <ButtonStyles theme={{ main: "#00AFB5;" }}>
              <Link href="/speakers">
                Request Info
              </Link>
            </ButtonStyles>
            <ButtonStyles theme={{ main: "#00AFB5;" }}>
              <Link href="/speakers">
                Publicity Packet
                <span className="icon">
                  <Image
                    src='/images/download-icon.png'
                    alt="Download"
                    width={16}
                    height={16}
                  />
              </span>
              </Link>
            </ButtonStyles>
          </div>
        </div >
        <div className="speaker-image">
          <Image 
            src='/images/speaker1.png' 
            alt='Speaker'
            fill
            sizes="33vw"
            priority
          />
        </div>
      </SpeakerHeroStyles>
      <SpeakerInfoStyles>
        <div className="left">
          <div className="heading-flex headings">
            <h2 className='selected'>&nbsp;&nbsp;About&nbsp;&nbsp;</h2>
            <h2>&nbsp;&nbsp;Speeches&nbsp;&nbsp;</h2>
          </div>
          <div className="content">
            <div className="about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. <br/>
                Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim tortor. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ultricies mi eget mauris pharetra. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dis parturient montes nascetur ridiculus mus mauris vitae. At auctor urna nunc id cursus metus aliquam. <br />
                At elementum eu facilisis sed odio morbi quis commodo odio. Sodales ut etiam sit amet. Enim sed faucibus turpis in eu mi bibendum neque egestas. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Id aliquet risus feugiat in ante metus dictum at. Sed odio morbi quis commodo odio aenean sed. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Nec tincidunt praesent semper feugiat nibh sed.<br/>
                Eu ultrices vitae auctor eu augue ut lectus arcu. Libero enim sed faucibus turpis in. Pellentesque nec nam aliquam sem et tortor consequat id porta. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Amet venenatis urna cursus eget nunc. Id aliquet risus feugiat in. Vitae justo eget magna fermentum iaculis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Ullamcorper eget nulla facilisi etiam. Euismod quis viverra nibh cras pulvinar mattis. Facilisi cras fermentum odio eu. Facilisis volutpat est velit egestas dui id ornare. Diam quam nulla porttitor massa id neque aliquam. Faucibus in ornare quam viverra orci sagittis. Malesuada proin libero nunc consequat interdum varius sit amet.<br/>
                Eget nulla facilisi etiam dignissim. Consequat ac felis donec et odio pellentesque diam. Nisl suscipit adipiscing bibendum est ultricies. Egestas integer eget aliquet nibh praesent tristique magna sit. Ut porttitor leo a diam sollicitudin tempor id. Lacinia at quis risus sed vulputate. Id eu nisl nunc mi ipsum. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Nascetur ridiculus mus mauris vitae. Condimentum lacinia quis vel eros. In ante metus dictum at tempor commodo ullamcorper a lacus. Amet nisl suscipit adipiscing bibendum est. Varius vel pharetra vel turpis nunc eget lorem dolor. Hendrerit dolor magna eget est lorem ipsum dolor sit. Scelerisque purus semper eget duis at tellus. Sodales ut etiam sit amet nisl purus in mollis.
              </p>
            </div>
            <div className="speeches hide">
              <p>
                At elementum eu facilisis sed odio morbi quis commodo odio. Sodales ut etiam sit amet. Enim sed faucibus turpis in eu mi bibendum neque egestas. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Id aliquet risus feugiat in ante metus dictum at. Sed odio morbi quis commodo odio aenean sed. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Nec tincidunt praesent semper feugiat nibh sed.<br/>
                Eu ultrices vitae auctor eu augue ut lectus arcu. Libero enim sed faucibus turpis in. Pellentesque nec nam aliquam sem et tortor consequat id porta. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Amet venenatis urna cursus eget nunc. Id aliquet risus feugiat in. Vitae justo eget magna fermentum iaculis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Ullamcorper eget nulla facilisi etiam. Euismod quis viverra nibh cras pulvinar mattis. Facilisi cras fermentum odio eu. Facilisis volutpat est velit egestas dui id ornare. Diam quam nulla porttitor massa id neque aliquam. Faucibus in ornare quam viverra orci sagittis. Malesuada proin libero nunc consequat interdum varius sit amet.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium. <br/>
                Suspendisse in est ante in nibh mauris. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tristique nulla aliquet enim tortor. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ultricies mi eget mauris pharetra. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dis parturient montes nascetur ridiculus mus mauris vitae. At auctor urna nunc id cursus metus aliquam. <br />
                Eget nulla facilisi etiam dignissim. Consequat ac felis donec et odio pellentesque diam. Nisl suscipit adipiscing bibendum est ultricies. Egestas integer eget aliquet nibh praesent tristique magna sit. Ut porttitor leo a diam sollicitudin tempor id. Lacinia at quis risus sed vulputate. Id eu nisl nunc mi ipsum. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Nascetur ridiculus mus mauris vitae. Condimentum lacinia quis vel eros. In ante metus dictum at tempor commodo ullamcorper a lacus. Amet nisl suscipit adipiscing bibendum est. Varius vel pharetra vel turpis nunc eget lorem dolor. Hendrerit dolor magna eget est lorem ipsum dolor sit. Scelerisque purus semper eget duis at tellus. Sodales ut etiam sit amet nisl purus in mollis.
              </p>
            </div>
          </div>
        </div >
        <div className="right">
          <div className="headings">
            <h2>&nbsp;&nbsp;Topic Areas</h2>
          </div>
          <div className="topics">
            <TopicListStyles>
              <div>Test Lorem</div>
              <div>Lorem</div>
              <div>Vitae Ornare</div>
              <div>Dolor Sit</div>
              <div>Egestas integer</div>
            </TopicListStyles>
          </div >
          <div className="headings">
            <h2>&nbsp;&nbsp;Related Links</h2>
          </div>
          <div className="links">
            <a href="#"><p>Consequat ac felis donec et odio pellentesque diam</p></a>
            <a href="#"><p>Eget nulla facilisi etiam dignissim</p></a><br/>
          </div>
          <ButtonStyles theme={{ main: "#00AFB5" }}>
            <Link href="/ecourse">
              Share this Speaker
            </Link>
          </ButtonStyles>
        </div>
      </SpeakerInfoStyles>
      <QuotesCarousel />
      <OurStore />
    </>
  );
}