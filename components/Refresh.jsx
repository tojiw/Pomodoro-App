import "./RefreshButton.css";
import { useState } from "react";
// import reset from "../components/Images/reset.png"
const RefreshButton = ({ onRefresh }) => {
  const [isSpinning, setSpinning] = useState(false);

  const handleRefreshClick = () => {
    setSpinning(true);
    onRefresh(1500);
    
    setTimeout(() => {
      setSpinning(false);
    }, 1000);
  };

  return (
    <button
      className={`refresh-button ${isSpinning ? "spin" : ""}`}
      onClick={handleRefreshClick}
    >
      ↻
    </button>
  );
};

export default RefreshButton;
