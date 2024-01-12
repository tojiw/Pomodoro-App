import "./TopButtons.css";
import Popup from "./Popup";
import { useState } from "react";
const TopButtons = ({ setBreak, setLongBreak }) => {
  const [popUp, setPopUp] = useState(false);

  function PomodoroClick() {
    setPopUp(true);
  }

  function handleShortClick() {
    setBreak(300);
  }

  function handleLongClick() {
    setLongBreak(600);
  }

  // function closePopup() {
  //   setPopUp(false);
  // }
  return (
    
      <div className="tbContainer">
        <button className="Pomodoro" onClick={PomodoroClick}>
          Pomodoro
        </button>
        <button className="SB" onClick={handleShortClick}>
          Short Break
        </button>
        <button className="LB" onClick={handleLongClick}>
          Long Break
        </button>
      </div>
    
  );
};

export default TopButtons;
