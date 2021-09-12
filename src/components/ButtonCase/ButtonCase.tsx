import React, { useState } from 'react';
import './ButtonCase.css';

interface ButtonCaseI {
  children?: React.ReactNode;
}

const ButtonCase: React.FC<ButtonCaseI> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="button-case-container">
        <div className="button-case-arrow-menu">
          <button className="button-case-button" type="button">
            save
          </button>{' '}
          <button
            className={
              isOpen
                ? 'button-case-button-arrow'
                : 'button-case-button-arrow-reverse'
            }
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {' '}
          </button>
        </div>
        <div className={isOpen ? 'button-case-button-arrow-menu' : 'dropdown'}>
          {children}
        </div>
      </div>
    </>
  );
};
export default ButtonCase;
