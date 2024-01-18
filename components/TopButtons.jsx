import "./TopButtons.css";
const TopButtons = ({ setBreak, setLongBreak, setPomodoro }) => {
  function PomodoroClick() {
    setPomodoro(1500);
  }

  function handleShortClick() {
    setBreak(300);
  }

  function handleLongClick() {
    setLongBreak(600);
  }

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
