import React, { useState } from 'react'
import { TbChevronDown, TbMenu2 } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { ContactUsDialog } from '../contactus/ContactUs'

export const Mobilenav = () => {
  const [isOpen, setisOpen] = useState(false)
  const [openSubMenu, setOpenSubmenu] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div>
      <button className='mobile_menu_btn' onClick={() => setisOpen(!isOpen)}>
        {isOpen ? <IoMdClose style={{ strokeWidth: 0.5, fill: "white" }} /> : <TbMenu2 />}
      </button>
      <nav className='mobile_menu'
        style={{
          transform: isOpen ? "translateY(0%)" : "translateY(-100%)"
        }}
      >
        <div className='mobile_link_list'>
          <NavLink to={'/'} onClick={() => setisOpen(!isOpen)}>HOME</NavLink>
          <div>
            <div className='service_menu'>
              <div className='service_menu_header' onClick={() => setOpenSubmenu(!openSubMenu)}>
                <span>Services</span>
                <TbChevronDown />
              </div>
              <div className='services_sub_menu'
                style={{
                  height: openSubMenu ? 'max-content' : "0px"
                }}
              >
                <NavLink to={"/services/consultancy"} onClick={() => setisOpen(!isOpen)}>CONSULTANCY</NavLink>
                <NavLink to={"/services/development"} onClick={() => setisOpen(!isOpen)}>DEVELOPMENT</NavLink>
                <NavLink to={"/services/security-audit"} onClick={() => setisOpen(!isOpen)}>SECURITY</NavLink>
              </div>
            </div>
          </div>
          <NavLink to={'/audit'} onClick={() => setisOpen(!isOpen)}>AUDIT</NavLink>
          <NavLink to={'/about'} onClick={() => setisOpen(!isOpen)}>ABOUT</NavLink>
          <div>
            <button className='mobile_contact_btn'
              onClick={() => {
                setisOpen(!isOpen)
                setOpenDialog(true)
              }}
            >Contact</button>
          </div>
          <ContactUsDialog isOpen={openDialog} onChange={setOpenDialog} />
        </div>
      </nav >
    </div >
  )
}
