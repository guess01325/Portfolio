 import {Link} from "react-router-dom"
 import "../assets/Header.css"


export default function Header(){

    return(
        <div>
            <div className="header-container">

            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            
            </div>
        </div>
    )
}