import "../assets/Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-info">Otis Guess: Sofware Engineer</div>
      <div className="main-info">About Me: Football Enthusiast</div>
      <div className="main-info">Discover My Work</div>
      <Link to="/portfolio">
        <div className="main-oval">click here</div>
      </Link>
    </div>
  );
}
