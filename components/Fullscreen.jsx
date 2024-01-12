import { useState } from "react";
import "./Fullscreen.css";
import FullscreenImg from "../components/Images/fullscreen.png";

const Fullscreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };

  return (
    <div className="fsc" onClick={handleToggleFullScreen}>
      <img src={FullscreenImg} alt="Fullscreen Image" className="fs" />
      {isFullScreen}
    </div>
  );
};

// onClick={handleToggleFullScreen}>
// {isFullScreen?"Exit Fullscreen":"Go FullScreen"}
export default Fullscreen;
