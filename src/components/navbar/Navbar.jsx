import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Mobilenav } from './Mobilenav'
import logo from "../../assets/icons/logo.svg";
import { ContactUsDialog } from '../contactus/ContactUs'
import { ServicesDropdown } from './ServicesDropdown'
import { useState } from "react";

function Navbar() {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <>
      <div className="nav_container">
        <div className="nav__bar">
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className="nav__list">
            <NavLink to="/" className="nav__item">Home</NavLink>
            <ServicesDropdown />
            <NavLink to="/audit" className="nav__item">Audit</NavLink>
            <NavLink to="/about" className="nav__item">About</NavLink>
          </div>
          <div className="mobile_nav_list">
            <Mobilenav />
          </div>

          <div className="desktop_contact">
            <button
              className="desktop_contact__btn"
              onClick={() => setOpenDialog(true)}
            >Contact</button>
            <ContactUsDialog isOpen={openDialog} onChange={setOpenDialog} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
