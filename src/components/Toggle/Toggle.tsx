import React, { useState } from 'react';
import './Toggle.css';

interface ToggleI {}

const Toggle: React.FC<ToggleI> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const names = ['Exterior', 'Exterior2', 'Exterior3', 'Exterior4'];
  const checkIndex = (index: number) => {
    if (index > names.length - 1) {
      return 0;
    }
    if (index < 0) {
      return names.length - 1;
    }
    return index;
  };

  return (
    <div className="toggle-name-container">
      <p className="toggle-name">view:</p>
      <div className="toggle-container">
        <div className="toggle-text">{names[activeIndex]} </div>
        <div className="toggle-button-content">
          <button
            type="button"
            className="toggle-more"
            onClick={() => setActiveIndex(checkIndex(activeIndex + 1))}
          >
            {' '}
          </button>
          <button
            type="button"
            className="toggle-less"
            onClick={() => setActiveIndex(checkIndex(activeIndex - 1))}
          >
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
