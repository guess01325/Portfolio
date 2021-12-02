import "../assets/Main.css";
import { Link } from "react-router-dom";
import { sliderData } from "../components/sliderData";
import  { useState } from "react";



export default function Main({ slides }) {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextslide = () => {
  setCurrent(current == length -1 ? 0 : current + 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
  return null; 
}

console.log(current)


return (
    <div className="main-container">
      <div className="main-info">Otis Guess: Sofware Engineer</div>
      <div className="info">{`About Me: ${sliderData.map((slide,index)=>{
        return(
          slide.info
        )
      })}`}</div>
      <div className="instructions">Discover My Work</div>
      <Link to="/portfolio">
        <div className="main-oval">click here</div>
      </Link>
    </div>
  );
}
