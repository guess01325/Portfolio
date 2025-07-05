import "../assets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="profile-images">
        <a
          href="https://www.linkedin.com/in/otis-guess-09b49a134/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1635125257/linkedn-logo_hwzvdl.png"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://github.com/guess01325?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1635125249/github-logo_ugfmsc.png"
            alt="GitHub"
          />
        </a>
      </div>

      <div className="footer-contact">
        <a href="mailto:guess01325@gmail.com">guess01325@gmail.com</a> |{" "}
        <a href="tel:8603030187">(860) 303-0187</a>
      </div>

      <div className="tag">© Otis Guess 2025</div>
    </footer>
  );
}