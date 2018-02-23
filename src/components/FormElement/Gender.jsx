import React from 'react'

const Gender = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={touched && error ? "input-box radio-input-box danger" : "input-box radio-input-box"}>
    <label className="input-label">{label}</label>
    <span className="radio-box">
      <input {...input} type="radio" name="gender" />
      <span></span>
      Male
    </span>
    <span className="radio-box">
      <input {...input} type="radio" name="gender" />
      <span></span>
      Female
    </span>
    <span className="radio-box">
      <input {...input} type="radio" name="gender" />
      <span></span>
      Other
    </span>
    {touched && (
      (error && <span className="input-status">{error}</span>) ||
      (warning && <span className="input-status">{warning}</span>)
    )}
  </div>
)

export default Gender;