import logo from "../src/assets/Group 5.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      NexDoro by{" "}
      <a href="https://twitter.com/WaqasFarazz">
        {" "}
        <span> Waqas Faraz</span>{" "}
      </a>
    </div>
  );
};

export default Header;
