import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Social from './Social';

const StickyNav = styled.div`
  position: sticky;
  top: 0;
  color: transparent;
  z-index: 10;
`;
const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  backdrop-filter: blur(2px);
  padding: 0px 90px;
  position: sticky;
`;

const Logo = styled.nav`
  a {
    display: flex;
    align-items: center;
    padding: 15px 0px;
  }
`;

export default function Header() {
  return (
    <StickyNav>
      <HeaderStyles>
        <Logo>
          <Link href="/">
            <Image
              src="/images/speakout-logo.png"
              alt="Speakout"
              width="100"
              height="46"
              priority
            />
          </Link>
        </Logo>
        <Nav />
        <Social />
      </HeaderStyles>
    </StickyNav>
  );
}