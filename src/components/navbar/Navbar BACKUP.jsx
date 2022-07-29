import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

function Navbar() {
	return (
		<div className="nav__bar">
			<NavLink to="/" className="nav__logo"><img src={logo} alt="logo" id="nav__logo" /></NavLink>
			<input type="checkbox" id="toggle" aria-hidden="true" />
			<label htmlFor="toggle" className="nav__icon" aria-hidden="true">
				Expand the menu
				<span className="nav__icon-line"></span>
				<span className="nav__icon-line"></span>
				<span className="nav__icon-line"></span>
			</label>
			<nav role="navigation" className="nav">
				<ul className="nav__items">
					<li className="nav__item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="nav__item">
						<a>Services ▼</a>
						<ul className="dropdown">
							<li><NavLink to="/services/security-audit">Security Audit</NavLink></li>
							<li><NavLink to="/services/development">Blockchain Development</NavLink></li>
							<li><NavLink to="/services/consultancy">Blockchain Consulting</NavLink></li>
						</ul>
					</li>
					<li className="nav__item">
						<NavLink to="/">Audit</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/">About</NavLink>
					</li>
					<li className="nav__item" id="nav__contact">
						<NavLink to="/">Contact</NavLink>
					</li>
				</ul>
				<Link id="nav__contact--btn" to="/">
					Contact
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
