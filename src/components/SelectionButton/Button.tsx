import React from 'react';
import './Button.css';

const Button: React.FC = ({ children }) => (
  <a href="#" type="button" className="button-content">
    {children}
  </a>
);

export default Button;
