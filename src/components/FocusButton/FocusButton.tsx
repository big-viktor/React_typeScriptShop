import React, { useState } from 'react';
import './FocusButton.css';
import Plus from '../../assets/img/plus.png';
import Minus from '../../assets/img/minus.png';

interface FocusButtonI {}

const FocusButton: React.FC<FocusButtonI> = () => {
  const [count, setCount] = useState(50);

  return (
    <>
      {' '}
      <div className="focus-button-container">
        <button
          className="focus-button"
          type="button"
          onClick={() => setCount(count - 1)}
        >
          <img src={Minus} />
        </button>
        <p className="focus-button-text">{count}%</p>
        <button
          className="focus-button"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          <img src={Plus} />
        </button>
      </div>
    </>
  );
};

export default FocusButton;
