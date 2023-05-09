import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import './DownloadButton.css'
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
          Install App
        </button>
      )}
    </>
  );
};
