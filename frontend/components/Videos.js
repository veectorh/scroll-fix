import styled from "styled-components";

const VideoStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1100px; */
  padding: 50px 0 80px;
`;

export default function Videos({ videos }) {
  console.log("INSIDE", videos);
  return (
    <VideoStyles>
      <h2>Videos</h2>
      <div className="videos">
        {
          videos.map(video => (
            <p>{video.video_name}</p>
          ))
        }
      </div>
    </VideoStyles>
  )
}