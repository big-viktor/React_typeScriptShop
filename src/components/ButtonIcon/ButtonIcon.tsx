import React from 'react';
import './ButtonIcon.css';

interface ButtonIconI {
  src: string;
}

const ButtonIcon: React.FC<ButtonIconI> = ({ src }) => (
  <button type="button" className="navigation-button">
    <img src={src} alt="" className="navigation-img" />
  </button>
);

export default ButtonIcon;
