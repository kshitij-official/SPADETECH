import * as Dialog from '@radix-ui/react-dialog';
import { RadioGroup, RadioButton } from "../ui/radio/Radio";
import { VscChromeClose } from 'react-icons/vsc'
import './contactus.css'
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [purposeToContact, setPurposetoContact] = useState('say hi');
  const [sender_email, setSenderEmail] = useState('');
  const [sender_name, setSenderName] = useState('');
  const [sender_message, setSenderMessage] = useState('');
  const [sender_phone, setSenderPhone] = useState('');
  const handleName = (e) => {
    setSenderName(e.target.value)
  }

  const handleEmail = (e) => {
    setSenderEmail(e.target.value)
  }

  const handlePhone = (e) => {
    setSenderPhone(e.target.value)
  }

  const handleMessage = (e) => {
    setSenderMessage(e.target.value)
  }
  

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   send(
  //     'service_5j9p74f',
  //     'template_4k9mvqs',
  //     {sender_name, sender_email, sender_phone, sender_message},
  //     'user_id'
  //   )
  //   .then((response) => {
  //     console.log('Message Send Successfully', response.status, response.text)
  //   })
  //   .catch((err) => {
  //     console.log('Message Failed to Deliver', err)
  //   })
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9csg4s', 'template_k6qowj6', form.current, 'YmSGlHtYCLjaND7Im')
      .then((result) => {
          console.log(result.text, "Message Successful");
          window.alert("Yay! Your message is successfully delivered.");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <RadioGroup value={purposeToContact} onChange={setPurposetoContact} className='radio_container'>
        <RadioButton value="say hi" id='say_hi' active={purposeToContact === 'say hi'}>SAY HI</RadioButton>
        <RadioButton value="do bussiness" id='do_bussiness' active={purposeToContact === 'do bussiness'}>DO BUSINESS</RadioButton>
      </RadioGroup>
      <div className='fields_container'>
        <input name='sender_name' placeholder='Name*' value={sender_name} onChange={handleName} required />
        <input name='sender_email' placeholder='Email*' value={sender_email} onChange={handleEmail} required />
        <input name='sender_phone' placeholder='Phone Number*' value={sender_phone} onChange={handlePhone} required />
        <textarea name='sender_message' placeholder='Write your message' value={sender_message} onChange={handleMessage} />
        <button className='submit_btn'>Submit</button>
      </div>
    </form >
  )
}

export const ContactUsDialog = ({isOpen, onChange}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="content">
          <Dialog.Title className="title">Contact Us</Dialog.Title>
          <Dialog.Close className="close_btn">
            <VscChromeClose />
          </Dialog.Close>
          <div>
            <Form />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root >
  )
};
