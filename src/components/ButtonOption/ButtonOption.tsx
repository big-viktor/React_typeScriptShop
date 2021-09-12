import React from 'react';
import './ButtonOption.css';

interface ButtonOptionsI {
  label: string;
}

const ButtonOption: React.FC<ButtonOptionsI> = ({ label }) => (
  <button type="button" className="add-option">
    <p className="add-options-texts">{label}</p>
  </button>
);

export default ButtonOption;
