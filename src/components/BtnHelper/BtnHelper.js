import React from 'react';
import './BtnHelper.scss';

const Button = ({ children, onClick }) => (
  <button className="User__btn" type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
