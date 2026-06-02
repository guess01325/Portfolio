import { Link } from "react-router-dom";
import "../assets/Header.css";
import bestGuessDigitalLogo from "../assets/BestGuessDigital.jpg";


export default function Header() {

    return (
        <header className="header-container">
            <Link to="/" className="brand-link" aria-label="Best Guess Digital home">
                <img
                    src={bestGuessDigitalLogo}
                    alt="Best Guess Digital"
                    className="brand-logo"
                />
            </Link>

            <nav className="header-nav" aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
