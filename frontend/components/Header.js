import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Social from './Social';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { device } from './device';
import React, { useState } from 'react';

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

  @media ${device.tablet} {
    padding: 0px 30px;
  }
`;

const Logo = styled.nav`
  a {
    display: flex;
    align-items: center;
    padding: 15px 0px;
  }
`;

const Icon = styled.nav`
  display: none;
  align-items: center;
  svg {
  display: flex;
  align-items: center;
  font-size: 40px;
  color: white;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

export default function Header() {

  const [openSideBar, setOpenSideBar] = useState(false);
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
        <Icon>
          {!openSideBar ?
            <div onClick={() => setOpenSideBar(true)}>
              <AiOutlineMenu />
            </div>
            :
            <div onClick={() => setOpenSideBar(false)}>
              <RxCross2 />
            </div>
          }
        </Icon>
      </HeaderStyles>
      {openSideBar && (
        <NavMobile setOpenSideBar={setOpenSideBar} />
      )}
    </StickyNav>
  );
}