import React from "react";
import Data from "../data/Data";
import './header.css'

const Header = ({ header }) => {
  return (
    <>
      <header className={header.img ? "header" : " about-header"}>
        <div className={header.img ? "container header__container" : "container about-header__container"}>
          <div className="header__left">
            {header.url && <span className="url-path">{header.url}</span>}
            {header.title}
            <p className="header__desc--border">{header.content}</p>
            {header.extra && <p className="header__desc">{header.description}</p>}
            {header.homeHeader && <>
                <button className="btn header__btn" onClick={() => {
                  const service = document.getElementById('serviceRedirection');
                  service.scrollIntoView({ behavior: 'smooth' })}
                }>
                  GET STARTED
                </button>
              </>
            }
          </div>
          {header.img && <div className="header__right">
            <img id={header.homeHeader ? "hero" : null} src={header.img} alt={header.img} />
          </div>}
        </div>
      </header>
      {header.homeHeader && <Data />}
    </>
  );
};

export default Header;
