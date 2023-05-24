import styled from "styled-components";

const SharedBackground = styled.section`
  filter: contrast(100%) brightness(100%);
  background-color:hsla(181,100%,35%,1);
  background-image:
  radial-gradient(at 2% 13%, hsla(0,0%,100%,0.1) 0px, transparent 50%),
  radial-gradient(at 98% 6%, hsla(181,78%,18%,1) 0px, transparent 50%),
  radial-gradient(at 39% 40%, hsla(28,92%,64%,0.67) 0px, transparent 50%),
  radial-gradient(at 74% 5%, hsla(181,78%,18%,1) 0px, transparent 50%),
  radial-gradient(at 28% 7%, hsla(28,92%,64%,1) 0px, transparent 50%),
  radial-gradient(at 19% 70%, hsla(181,100%,35%,1) 0px, transparent 50%),
  url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.57' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export default SharedBackground;