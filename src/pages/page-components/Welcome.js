import { WelcomeVid, WelcomeGif } from "../../assets/videos";
import { useEffect, useRef } from "react";
import "./Welcome.css"
//  kiểm tra cho máy safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const Welcome = () => {
  const videoRef = useRef(null);
 
  return (
    <>
      {isSafari ? (
        <img src = {WelcomeGif.default} disablePictureInPicture/>
      ) : (
        <video
        className="welcome-vid"
          ref={videoRef}
          src={WelcomeVid.default}
          type="video/mp4"
          loop
          autoPlay={true}
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload"
          onContextMenu={e => {
            e.preventDefault()
          }}
        />
      )}
    </>
  );
};
