import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


const NavStyles = styled.nav`
  font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  position: relative;
  
  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 15px;
  }

  a:hover {
    color: #F8A151;
    text-decoration: underline;
  }

  .main-nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .active-link {
    color: #F8A151;
  }

  li {
    list-style: none;
    display: inline;
  }

  .link-1 {
    height: 100%;
    display: flex;
  }

  .icon {
   transition: .2s ease-in;
  }

  .ul-list-1 {
    position: fixed;
    left: 0px;
    width: 100%;
    background: #09585BBF;
    background-blend-mode: multiply;
    height: 57.64px;
    top: 78.5px;
    align-items: center;
    justify-content: center;
    display: none;

    ul li {
      margin: 0 20px;
    }
    
  }
  
  .link-1:hover .ul-list-1, .ul-list-1:hover {
     display: flex;
   }

  .link-1:hover .icon {
    transform: rotate(180deg);
  }

  ul{
    padding: 0px
   }
`;

export default function Nav() {
  const router = useRouter();

  return (
    <NavStyles>
      <div className='link-1'>
        <Link className={`${router.pathname === '/speakers' || router.pathname === '/performances' || router.pathname === '/exhibits' || router.pathname === '/film-programs' || router.pathname === '/inquiry-form' ? "active-link" : ''} main-nav-link`} href="/speakers">
          SPEAKERS
          <BsChevronDown className='icon' />
        </Link>
        <div className='ul-list-1'>
          <ul style={{ paddingRight: "5%" }}>
            <li>
              <Link className={`${router.pathname === '/speakers' && ("active-link")}`} href="/speakers">Our Speakers</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/performances' && ("active-link")}`} href="/performances">PERFORMANCES</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/exhibits' && ("active-link")}`} href="/exhibits">EXHIBITS</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/film-programs' && ("active-link")}`} href="/film-programs">FILM PROGRAMS</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/inquiry-form' && ("active-link")}`} href="/inquiry-form">INQUIRY FORM</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='link-1'>
        <Link
          className={`${router.pathname === '/institute' || router.pathname === '/e-course' || router.pathname === '/events' || router.pathname === '/summer-institute' || router.pathname === '/original-films' ? "active-link" : ''} main-nav-link`} href="/institute">
          INSTITUTE
          <BsChevronDown className='icon' />
        </Link>
        <div className='ul-list-1'>
          <ul>
            <li>
              <Link className={`${router.pathname === '/institute' && ("active-link")}`} href="/institute">About the Institute</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/e-course' && ("active-link")}`} href="https://speakoutinstitute.thinkific.com/collections" target={'_blank'}>E-COURSE</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/events' && ("active-link")}`} href="/events">VIRTUAL EVENTS</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/summer-institute' && ("active-link")}`} href="/summer-institute">SUMMER INSTITUTE</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/original-films' && ("active-link")}`} href="/original-films">SpeakOut ORIGINAL FILMS</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='link-1' >
        <Link
          className={`${router.pathname === '/about-us' || router.pathname === '/our-team' || router.pathname === '/faq' ||router.pathname === '/sponsored-projects' || router.pathname === '/contact' ? "active-link" : ''} main-nav-link`}
          href="/about-us">
          ABOUT
          <BsChevronDown className='icon' />
        </Link>
        <div className='ul-list-1' >
          <ul style={{ paddingRight: "5%" }}>
            <li>
              <Link className={`${router.pathname === '/about-us' && ("active-link")}`} href="/about-us">Our History</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/our-team' && ("active-link")}`} href="/our-team">OUR TEAM</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/faq' && ("active-link")}`} href="/faq">FAQs</Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/sponsored-projects' && ("active-link")}`} href="/sponsored-projects">
                FISCALLY-SPONSORED PROJECTS
              </Link>
            </li>
            <li>
              <Link className={`${router.pathname === '/contact-us' && ("active-link")}`} href="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>

      <Link className={`${router.pathname === '/store' && ("active-link")}`} href="/store">
        STORE
      </Link>
    </NavStyles>
  );
}
