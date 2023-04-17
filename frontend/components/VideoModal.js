import styled from 'styled-components';

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

  iframe {
    margin: -5px;
    background-color: rgba(0, 0, 0, 0.85);
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
`;

export default function VideoModal({ videoSrc, onClose }) {
  console.log("SRC", videoSrc);
  const videoId = new URL(videoSrc).searchParams.get("v");
  console.log("ID", videoId);

  return (
    <Overlay>
      <ModalContent>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <button onClick={onClose}>x</button>
      </ModalContent>
    </Overlay>
  )
}