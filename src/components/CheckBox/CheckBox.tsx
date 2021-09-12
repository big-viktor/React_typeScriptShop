import React, { useState } from 'react';
import './CheckBox.css';

interface CheckBoxMenuI {
  label: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const CheckBoxMenu: React.FC<CheckBoxMenuI> = ({
  label,
  reverse,
  children,
}) => {
  const [isShow, setIsHide] = useState(false);

  return (
    <>
      {!reverse ? (
        <>
          <div className="check-container-tick-reverse">
            <div className="check-box-tick">
              <button
                type="button"
                className={
                  isShow ? 'setingg-button-tick' : 'setingg-button-tick-reverse'
                }
                onClick={() => setIsHide(!isShow)}
              >
                {' '}
              </button>
              <p className="check-box-text-tick">{label}</p>
            </div>
            <div className="add-button-defult:hover">{children} </div>
          </div>
        </>
      ) : (
        <>
          <div className="check-container-tick">
            <div className="check-box-tick">
              <button
                type="button"
                className={
                  isShow ? 'setingg-button-tick' : 'setingg-button-tick-reverse'
                }
                onClick={() => setIsHide(!isShow)}
              >
                {' '}
              </button>
              <p className="check-box-text-tick">{label}</p>
            </div>
            <div className="add-button-defult:hover">{children} </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckBoxMenu;
