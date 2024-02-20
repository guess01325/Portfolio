import "../assets/Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio-main">
      <li>
        <a  href="https://choose-you.herokuapp.com/" className="choose-you/">
          I choose You
        </a>
      </li>

      <li>
        <a href="https://madden-plays.netlify.app/" className="madden-plays">
          Madden Plays
        </a>
      </li>
      <li>
        <a href="https://quad-pack.netlify.app/" className="quad-pack">
          Quad Pack
        </a>
      </li>
      <li>
        <a href="https://tacato-truck.netlify.app/" className="tacato-truck">
          Tacato Truck
        </a>
      </li>
      <a
        href="https://clinquant-cranachan-d8dc7b.netlify.com/"
        className="inspiring-youth"
      >
        Inspiring Youth
      </a>
      <li></li>
    </div>
  );
}
