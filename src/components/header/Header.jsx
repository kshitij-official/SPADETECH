import React from "react";
import Data from "../data/Data";
import './header.css'

const Header = (props) => {

	return (
		<>
			<header>
				{props.url && <span className="url-path">{props.url}</span>}
				<div className="container header__container">
					<div className="header__left">
						{props.title}
						<p className="header__desc--border">{props.content}</p>
						{props.extra && <p className="header__desc">{props.description}</p>}
						{props.homeHeader && <button className="btn header__btn">GET STARTED</button>}
					</div>
					<div className="header__right">
						<img id={props.homeHeader ? "hero" : null} src={props.img} alt={props.img} />
					</div>
				</div>
			</header>
			{props.homeHeader && <Data />}
		</>
	);
};

export default Header;



