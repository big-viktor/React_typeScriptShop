import React, { useState } from 'react';

import './SizeButtons.css';

const SizeButtons: React.FC = () => {
  const [activeButton, setactiveButton] = useState(false);

  const item = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];
  return (
    <>
      <div className="size-buttons-container">
        {item.map((nameww) => (
          <button
            type="button"
            className={activeButton ? 'size-buttons' : 'size-buttons'}
            key={nameww}
            onClick={() => setactiveButton(!activeButton)}
          >
            {nameww}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizeButtons;
