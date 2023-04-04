import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { device } from './device';
import Image from 'next/image';

const NavStyles = styled.nav`
  font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #00AFB5;
  background-blend-mode: multiply;
  background: #0A5052;
  display: none;
  
  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 15px;
  }

  a:hover {
    color: #F8A151;
  }



  .main-nav-link-div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #00AFB5;
      width: 100%;
      height: 55px;
  }
  .main-nav-link {
    width: fit-content;
  }

  .main-nav-social {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    border-bottom: 1px solid #00AFB5;
  }

  .active-link {
    color: #F8A151;
  }

  li {
    list-style: none;
  }

  .link-1 {
    width: 100%
  }

  .icon {
   transition: .2s ease-in;
   color: white;
   margin: 15px;
  }

  .active-icon {
    color: #F8A151;
  }

  .ul-list-1 {
    width: 100%;
   
    background-blend-mode: multiply;
    align-items: center;
    justify-content: center;
    display: none;
    width: 100%;
    
    ul {
    width: 100%;
    margin: 0px;
    }
    ul li {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #00AFB5;
      width: 100%;
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

   @media ${device.tablet} {
    display: block;
  }
`;

const SocialStyles = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0px;
  a {
    margin: 0 5px;
  }
`;


export default function NavMobile({ setOpenSideBar }) {
    const router = useRouter();

    return (
        <NavStyles>
            <div className='link-1'>
                <div className='main-nav-link-div'>
                    <Link onClick={() => setOpenSideBar(false)}  className={`${router.pathname === '/speakers' || router.pathname === '/performances' || router.pathname === '/exhibits' || router.pathname === '/film-programs' || router.pathname === '/inquiry-form' ? "active-link" : ''} main-nav-link`} href="/speakers">
                        SPEAKERS
                    </Link>
                    <BsChevronDown className={` ${router.pathname === '/speakers' || router.pathname === '/performances' || router.pathname === '/exhibits' || router.pathname === '/film-programs' || router.pathname === '/inquiry-form' ? "active-link" : ''} icon`} />
                </div>
                <div className='ul-list-1'>
                    <ul>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/speakers' && ("active-link")}`} href="/speakers">Our Speakers</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/performances' && ("active-link")}`} href="/performances">PERFORMANCES</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/exhibits' && ("active-link")}`} href="/exhibits">EXHIBITS</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/film-programs' && ("active-link")}`} href="/film-programs">FILM PROGRAMS</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/inquiry-form' && ("active-link")}`} href="/inquiry-form">INQUIRY FORM</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='link-1'>
                <div className='main-nav-link-div'>
                    <Link onClick={() => setOpenSideBar(false)}  className={`${router.pathname === '/institute' || router.pathname === '/e-course' || router.pathname === '/events' || router.pathname === '/summer-institute' || router.pathname === '/original-films' ? "active-link" : ''} main-nav-link`} href="/institute">
                        INSTITUTE
                    </Link>
                    <BsChevronDown className={`${router.pathname === '/institute' || router.pathname === '/e-course' || router.pathname === '/events' || router.pathname === '/summer-institute' || router.pathname === '/original-films' ? "active-icon" : ''} icon`} />
                </div>
                <div className='ul-list-1'>
                    <ul>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/institute' && ("active-link")}`} href="/institute">About the Institute</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/e-course' && ("active-link")}`} href="https://speakoutinstitute.thinkific.com/collections" target={'_blank'}>E-COURSE</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/events' && ("active-link")}`} href="/events">VIRTUAL EVENTS</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/summer-institute' && ("active-link")}`} href="/summer-institute">SUMMER INSTITUTE</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/original-films' && ("active-link")}`} href="/original-films">SpeakOut ORIGINAL FILMS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='link-1' >
                <div className='main-nav-link-div'>
                    <Link onClick={() => setOpenSideBar(false)}  className={`${router.pathname === '/about-us' || router.pathname === '/our-team' || router.pathname === '/faq' || router.pathname === '/sponsored-projects' || router.pathname === '/contact' ? "active-link" : ''} main-nav-link`}
                        href="/about-us">
                        ABOUT
                    </Link>
                    <BsChevronDown className={` ${router.pathname === '/about-us' || router.pathname === '/our-team' || router.pathname === '/faq' || router.pathname === '/sponsored-projects' || router.pathname === '/contact' ? "active-icon" : ''} icon`} />
                </div>
                <div className='ul-list-1' >
                    <ul>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/about-us' && ("active-link")}`} href="/about-us">Our History</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/our-team' && ("active-link")}`} href="/our-team">OUR TEAM</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/faq' && ("active-link")}`} href="/faq">FAQs</Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/sponsored-projects' && ("active-link")}`} href="/sponsored-projects">
                                FISCALLY-SPONSORED PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/contact-us' && ("active-link")}`} href="/contact-us">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='main-nav-social' >
                <Link onClick={() => setOpenSideBar(false)} className={`${router.pathname === '/store' && ("active-link")}`} href="/store">
                    STORE
                </Link>
            </div>
            <div className='main-nav-social' >

                <SocialStyles>
                    <a onClick={() => setOpenSideBar(false)} href="https://www.facebook.com/SpeakOutSpeakers" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/facebook.png"
                            alt="Facebook"
                            width="9"
                            height="17"
                        />
                    </a>
                    <a onClick={() => setOpenSideBar(false)} href="https://www.instagram.com/SpeakOutspeakers" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/instagram.png"
                            alt="Instagram"
                            width="16"
                            height="16"
                        />
                    </a>
                    <a onClick={() => setOpenSideBar(false)} href="https://twitter.com/SpeakOutIDEC" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/twitter.png"
                            alt="Twitter"
                            width="18"
                            height="15"
                        />
                    </a>
                </SocialStyles>
            </div>
        </NavStyles>
    );
}
