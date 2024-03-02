import YouTube from "react-youtube";

const LoopingVideo = ({ videoKey }) => {
  const onEnd = (event) => {
    event.target.playVideo(); // Play the video again when it ends
  };

  const opts = {
    width: "100%",
    height: "auto",
    playerVars: {
      autoplay: 1, // Autoplay the video
      loop: 1, // Enable loop
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and player actions
      mute: 1, // Mute the video
      origin: window.location.origin,
    },
  };

  return (
    <YouTube
      videoId={videoKey}
      opts={opts}
      onEnd={onEnd}
      iframeClassName='iframe-video'
    />
  );
};

export default LoopingVideo;
