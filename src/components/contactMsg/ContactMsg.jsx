import React, {useState} from 'react'
import './contactMsg.css'
import { ContactUsDialog } from '../contactus/ContactUs'

const ContactMsg = () => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div className="contact__message">
            <span>
                If you're looking for expert guidance to launch your blockchain
                project, Spadetech is the perfect partner.
            </span>
            <button className="btn action__btn" onClick={() => setOpenDialog(true)}>Get in touch</button>
            <ContactUsDialog isOpen={openDialog} onChange={setOpenDialog} />
        </div>
    )
}

export default ContactMsg