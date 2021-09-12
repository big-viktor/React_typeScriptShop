import React, { useState } from 'react';
import './ButtonDefault.css';

interface ButtonDefaultI {}

const ButtonDefault: React.FC<ButtonDefaultI> = () => {
  const [isShow, setIsHide] = useState(false);

  return (
    <>
      {!isShow ? (
        <>
          <div className="check-add">
            <button
              type="button"
              className="check-add-value"
              onClick={() => setIsHide(!isShow)}
            >
              default
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="add-reverse">
            <button
              type="button"
              className="check-add-value-reverse"
              onClick={() => setIsHide(!isShow)}
            >
              make default
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ButtonDefault;
