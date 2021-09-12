import React, { useState } from 'react';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import './CheckBoxMenu.css';

interface CheckBoxMenuI {
  label: string;
  children?: React.ReactNode;
  reverseCheck?: boolean;
}

const CheckBoxMenu: React.FC<CheckBoxMenuI> = ({
  label,
  children,
  reverseCheck,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShows, setIsHides] = useState(false);
  return (
    <>
      {!reverseCheck ? (
        <>
          <div className="menu-check-box-container">
            <button
              type="button"
              className={
                isOpen ? 'menu-check-button' : 'menu-check-button-reverse'
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="menu-check-box-text">{label}</p>
            </button>
          </div>
          <div className={isOpen ? undefined : 'dropdown'}>{children}</div>
        </>
      ) : (
        <>
          <div className="menu-check-container-tick">
            <div className="menu-check-box-tick">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={
                  isOpen
                    ? 'menu-check-button-arrow'
                    : 'menu-check-button-arrow-reverse'
                }
              >
                {' '}
              </button>
              <button
                onClick={() => setIsHides(!isShows)}
                type="button"
                className={
                  isShows
                    ? 'menu-setingg-button-tick'
                    : 'menu-setingg-button-tick-reverse'
                }
              >
                {' '}
              </button>
              <p className="menu-check-box-text">{label}</p>
            </div>
            <div>
              <ButtonDefault />
            </div>
          </div>
          <div className={isOpen ? undefined : 'dropdown'}>{children}</div>
        </>
      )}
    </>
  );
};

export default CheckBoxMenu;
