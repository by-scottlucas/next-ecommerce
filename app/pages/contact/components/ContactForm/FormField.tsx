import './ContactForm.css';

import React from 'react';

import { FormFieldProps } from './models/formfield';

export default function FormField({
  id,
  type = 'text',
  label,
  placeholder,
  icon,
  value,
  error,
  onChange,
  textarea = false
}: FormFieldProps) {
  const wrapperClass = textarea ? 'textarea-icon-wrapper' : 'icon-wrapper';

  return (
    <div className="form-control">
      <label htmlFor={id} className="label-base">{label}</label>
      <div className="relative">
        <div className={wrapperClass}>{icon}</div>
        {textarea ? (
          <textarea
            id={id}
            name={id}
            rows={4}
            value={value}
            onChange={onChange}
            className="input-base input-icon"
            placeholder={placeholder}
          />
        ) : (
          <input
            id={id}
            type={type}
            name={id}
            value={value}
            onChange={onChange}
            className="input-base input-icon"
            placeholder={placeholder}
          />
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
