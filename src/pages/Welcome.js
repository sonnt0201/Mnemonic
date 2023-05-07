import { WelcomeVid } from "../assets/videos";
import { useEffect, useRef } from "react";
export const Welcome = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <video
      ref={videoRef}
      src={WelcomeVid.default}
      type="video/mp4"
      loop
      autoPlay={true}
      muted
      playsinline 
    />
  );
};
