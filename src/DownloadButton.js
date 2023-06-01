import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import './DownloadButton.css'
import { DownloadIcon } from "./assets/icons";
export const DownloadButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  });
}, []);


  return (
    <>
      {
      deferredPrompt && 
      (
        <button
        
            className="download-button"
          onClick={() => {
            deferredPrompt.prompt();
            setDeferredPrompt(null);
          }}
        >
        <img className="download-icon" src={DownloadIcon.default} alt="download"/>
          Install
        </button>
      )}
    </>
  );
};
