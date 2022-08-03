import * as RadioPrimitive from '@radix-ui/react-radio-group';
import './radio.css'


export const RadioGroup = ({ value, onChange, children, className }) => {
  return (
    <RadioPrimitive.Root className={className} value={value} onValueChange={onChange}>
      {children}
    </RadioPrimitive.Root>
  )
}

export const RadioButton = ({ value, id, children, active }) => (
  <div className='btn_container'>
    <RadioPrimitive.Item value={value} id={id} className={`radio`} style={{ borderColor: active ? "#EF798A" : "#464f60" }}>
      <RadioPrimitive.Indicator className={`indicator `} />
    </RadioPrimitive.Item>
    <label htmlFor={id}>{children}</label>
  </div>
);
