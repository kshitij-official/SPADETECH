import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="footer__copyright">
            <small>&copy; 2022 by Spade Tech. All Rights Reserved</small>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__1">
            <h6>Services</h6>
            <ul className="permalinks">
            <li><Link to="/services/consultancy">Blockchain Consultancy</Link></li>
              <li><Link to="/services/development">Blockchain Development</Link></li>
              <li><Link to="/services/security-audit">Blockchain Security</Link></li>
              
            </ul>
          </div>

          <div className="footer__2">
            <h6>Company</h6>
            <ul className="privacy">
              {/* <li><a href="/about">About</a></li> */}
              <li><Link to="/about">About</Link></li>
              <li><a href="./">Privacy Policy</a></li>
              <li><a href="./">Cookie Policy</a></li>
              <li><a href="./">Terms and Conditions</a></li>
            </ul>
          </div>

          <div className="footer__3">
            <h6>Socials</h6>
            <ul className="footer__socials">
              <li><a href="https://t.me/spadeaudits">Telegram</a></li>
              <li><a href="./">Youtube</a></li>
              <li><a href="./">Medium</a></li>
              <li><a href="https://www.linkedin.com/company/spadetech-io/about/">LinkedIn</a></li>
              <li><a href="https://twitter.com/SpadeAudits?t=l7nyRDHXij5z9bxSa-RT0A&s=09">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
