import "./App.css";
import { useEffect, useState } from "react";
import TopButtons from "../components/TopButtons";
import SpotifyPomodoro from "../components/SpotifyPomodoro";
import Footer from "../components/Footer";
import Refresh from "../components/Refresh";
import Header from "../components/Header";
function App() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(1500);

  const handleRefreshLogic = (setDuration) => {
    setSeconds(setDuration);
  };

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
      <Header />
      <div className="timer">
        <p>{formatTime(seconds)}</p>
      </div>
      <div className="ButtonContainer">
        <div className="Buttons">
          <button
            className="Power"
            onClick={function Start() {
              setIsActive(true);
            }}
          >
            Play
          </button>

          <button
            className="Power"
            onClick={function stop() {
              setIsActive(false);
            }}
          >
            Stop
          </button>
          <Refresh onRefresh={handleRefreshLogic}></Refresh>
        </div>
      </div>
      <TopButtons
        setBreak={setSeconds}
        setLongBreak={setSeconds}
        setPomodoro={setSeconds}
      ></TopButtons>
      <SpotifyPomodoro />
      <Footer />
    </>
  );
}

export default App;
