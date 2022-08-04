import React, {useState} from "react";
import Data from "../data/Data";
import { ContactUsDialog } from '../contactus/ContactUs'
import './header.css'

const Header = ({ header }) => {
  const [openDialog, setOpenDialog] = useState(false)
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
                <button className="btn header__btn" onClick={() => setOpenDialog(true)}>GET STARTED</button>
                <ContactUsDialog isOpen={openDialog} onChange={setOpenDialog} />
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
