import React from 'react'
import InputMask from 'react-input-mask';

const DateOfBirth = ({ input, label, type, meta: { touched, error, warning } }) => (

  <div className={touched && error ? "input-box danger" : "input-box"}>
    <label className="input-label">{label}</label>    
    <InputMask {...input} mask="99/99/9999" placeholder="DD/MM/YYYY" className="input-text-box"/>
    {touched && (
      (error && <span className="input-status">{error}</span>) ||
      (warning && <span className="input-status">{warning}</span>)
    )}
  </div>
)

export default DateOfBirth;