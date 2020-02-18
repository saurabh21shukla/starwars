import React, {Component} from 'react';

export const renderField = ({input, type, label, meta: {touched, error} }) => (
    <div>
      <label>{label}</label>
      <div>
          <input {...input} placeholder={label} type={type} aria-required="true" className="validate" />
        {touched && error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );