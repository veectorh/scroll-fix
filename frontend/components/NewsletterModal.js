import styled from 'styled-components';
import { device } from './device';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 0;
  margin: 0;
  position: relative;

  .iframeContainer {
    width: 80vw;
    height: 90vh;
    iframe {
      height: 100%;
      width: 100%;
    }
  }

  button {
    position: absolute;
    top: -1.5em;
    right: -1.5em;
    background-color: transparent;
    border: none;
    color: rgba(248, 161, 81, 1);
    font-size: 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
  }

  @media ${device.mobile} {
    .iframeContainer {
      width: 80vw;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
`;

export default function NewsletterModal({ onClose }) {
  return (
    <Overlay>
      <ModalContent>
        <div className="iframeContainer">
          <iframe src="https://lp.constantcontactpages.com/su/U1hkiPj/newsletter"></iframe>
        </div>
        <button onClick={onClose}>x</button>
      </ModalContent>
    </Overlay>
  )
}