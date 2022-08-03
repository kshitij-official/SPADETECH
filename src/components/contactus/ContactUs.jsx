import * as Dialog from '@radix-ui/react-dialog';
import { RadioGroup, RadioButton } from "../ui/radio/Radio";
import { VscChromeClose } from 'react-icons/vsc'
import './contactus.css'
import { useState } from 'react';

const Form = () => {
  const [purposeToContact, setPurposetoContact] = useState('say hi')
  return (
    <form>
      <RadioGroup value={purposeToContact} onChange={setPurposetoContact} className='radio_container'>
        <RadioButton value="say hi" id='say_hi' active={purposeToContact === 'say hi'}>SAY HI</RadioButton>
        <RadioButton value="do bussiness" id='do_bussiness' active={purposeToContact === 'do bussiness'}>Do BUSSINESS</RadioButton>
      </RadioGroup>
      <div className='fields_container'>
        <input placeholder='Name*' required />
        <input placeholder='Email*' required />
        <input placeholder='Phone Number*' required />
        <textarea placeholder='Write your message' />
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
