import React from 'react'

const Text = ({ input, label, type, meta: { touched, error, warning } }) => (

  <div className={touched && error ? "input-box danger" : "input-box"}>
    <label className="input-label">{label}</label>
    <input {...input} placeholder={label} className="input-text-box" type="text" />
    {touched && (
      (error && <span className="input-status">{error}</span>) ||
      (warning && <span className="input-status">{warning}</span>)
    )}
  </div>
)

export default Text;