import React from 'react'

const Textarea = ({ input, label, type, meta: { touched, error, warning } }) => (

  <div className={touched && error ? "input-box danger" : "input-box"}>
    <label className="input-label">{label}</label>   
    <textarea {...input} className="input-text-box" rows="5"></textarea>
    {touched && (
      (error && <span className="input-status">{error}</span>) ||
      (warning && <span className="input-status">{warning}</span>)
    )}
  </div>
)

export default Textarea;