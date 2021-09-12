import React, { useState } from 'react';
import './NavigationButton.css';

interface NavigationButonI {
  label: string;
  src: string;
  reverseLabel: boolean;
}

const NavigationButon: React.FC<NavigationButonI> = ({
  label,
  src,
  reverseLabel,
}) => {
  const [activeButton, setactiveButton] = useState(false);
  return (
    <button type="button" className="navigation-button">
      {!reverseLabel ? (
        <>
          {' '}
          <img src={src} alt="logo" />
          {label}
        </>
      ) : (
        <>
          {label}
          <img src={src} alt="logo" />
        </>
      )}
    </button>
  );
};

export default NavigationButon;
