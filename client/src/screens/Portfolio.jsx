import "../assets/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <ul className="portfolio-main">
        <li className="positive-adversity">
          <a
            href="https://positive-adversity.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>Positive Adversity</h2>
              <p>
                A cross-platform management and store app for a mentorship
                organization with youth programs, AAU retail, and merchandise.
              </p>
            </div>
          </a>
        </li>

        <li className="ara-enterprise">
          <a
            href="https://www.araenterprisellc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>ARA Enterprise LLC</h2>
              <p>
                A contractor-focused website for construction, property
                maintenance, remodeling, roofing, siding, and quote requests.
              </p>
            </div>
          </a>
        </li>

        <li className="choose-you">
          <a
            href="https://battle24.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>I Choose You</h2>
              <p>
                A fun turn-based Pokémon game! Choose your character and battle
                AI enemies.
              </p>
            </div>
          </a>
        </li>

        <li className="madden-plays">
          <a
            href="https://madden-plays.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>Madden Plays</h2>
              <p>
                Draw, save, and plan your own custom football plays. A tool for
                fans and playbook nerds.
              </p>
            </div>
          </a>
        </li>

        <li className="quad-pack">
          <a
            href="https://quad-pack.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>Quad Pack</h2>
              <p>
                Create and customize your own luggage setup. Choose features
                that match your travel style.
              </p>
            </div>
          </a>
        </li>

        <li className="tacato-truck">
          <a
            href="https://tacato-trucks.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>Tacato Truck</h2>
              <p>
                A restaurant app where you can browse the menu, add items to
                cart, and customize your order.
              </p>
            </div>
          </a>
        </li>

        <li className="inspiring-youth">
          <a
            href="https://inspiring-2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h2>Inspiring Youth</h2>
              <p>
                A community-based app with a built-in event planner. Admin login
                available for creating events and assigning volunteers.
              </p>
              <p>
                <strong>Demo Login:</strong>
                <br />
                Username: <code>guess01325</code>
                <br />
                Password: <code>Gu145012</code>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
