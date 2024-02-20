import "../assets/Main.css";
import { Link } from "react-router-dom";
import { sliderData } from "../components/sliderData";
import  { useState, useEffect } from "react";


export default function Main({  }) {
const [current, setCurrent] = useState(0)
const delay = 1500;

useEffect(() =>{
    let intervalId = setInterval (() => {
      cycleSlides();
}, delay);
  
return () => clearInterval(intervalId);
}, []);

const cycleSlides = () => {
setCurrent((val) => (val === sliderData.length - 1 ? 0 : (val += 1)))
};

if(!Array.isArray(sliderData) || sliderData.length <= 0) {
  return null; 
}


console.log(current)


return (
    <div className="main-container">
      <div className="main-info">Otis Guess: Sofware Engineer</div>
      <div className="info">
        About Me:
        <div>{sliderData?.[current]?.info}</div>
      </div>
      <div className="instructions">Discover My Work</div>
      <Link to="/portfolio">
        <div className="main-oval">click here</div>
      </Link>
    </div>
  );
}
