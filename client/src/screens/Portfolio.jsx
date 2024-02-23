import "../assets/Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio-main">
      <li className="choose-you">
        <a href="https://choose-you-c1449d99d0dc.herokuapp.com/" target="blank">I choose You</a>
      </li>
      <li className="madden-plays">
      <a href="https://madden-plays.netlify.app/" target="blank"> Madden Plays</a>
      </li> 

      {/* <li className="quad-pack">
        <a href="https://quad-pack.netlify.app/" target="blank">Quad Pack</a>
        
      </li> */}

      {/* <li className="tacato-truck">
        <a href="https://tacato-truck.netlify.app/" target="blank">Tacato Truck</a>
      </li> */}

      <li className="inspiring-youth">
        <a href="https://clinquant-cranachan-d8dc7b.netlify.com/" target="blank">
          Inspiring Youth
        </a>
      </li>
    </div>
  );
}
