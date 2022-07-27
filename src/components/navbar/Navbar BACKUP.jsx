import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

function Navbar() {
	return (
		<div class="nav__bar">
			<NavLink to="/" className="nav__logo"><img src={logo} alt="logo" id="nav__logo" /></NavLink>
			<input type="checkbox" id="toggle" aria-hidden="true" />
			<label for="toggle" class="nav__icon" aria-hidden="true">
				Expand the menu
				<span class="nav__icon-line"></span>
				<span class="nav__icon-line"></span>
				<span class="nav__icon-line"></span>
			</label>
			<nav role="navigation" className="nav">
				<ul class="nav__items">
					<li className="nav__item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/">Services ▼</NavLink>
							<ul class="dropdown">
								<li><a href="./">Web Development</a></li>
								<li><a href="./">Web Design</a></li>
								<li><a href="./">Illustration</a></li>
								<li><a href="./">Iconography</a></li>
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
