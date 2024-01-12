import "./App.css";
import { useEffect, useState } from "react";
import resetIcon from "../components/Images/reset.png";
import TopButtons from "../components/TopButtons";
import Fullscreen from "../components/Fullscreen";
import SpotifyPomodoro from "../components/SpotifyPomodoro";
function App() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(function () {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return function () {
      clearInterval(interval); //understand this
    };
  }, [isActive, seconds]);

  const formatTime = function (timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <>
      <div className="container">
        <div className="timer">
          <p>{formatTime(seconds)}</p>
        </div>
        <div className="ButtonContainer">
          <div className="Buttons">
            <button
              className="start"
              onClick={function Start() {
                setIsActive(true);
              }}
            >
              Play
            </button>
            <img
              src={resetIcon}
              className="stop"
              onClick={() => {
                setIsActive(false);
                setSeconds(1500);
              }}
            />
          </div>
        </div>
      </div>
      <TopButtons setBreak={setSeconds} setLongBreak={setSeconds}></TopButtons>
      <Fullscreen></Fullscreen>
      <SpotifyPomodoro></SpotifyPomodoro>
    </>
  );
}

export default App;
