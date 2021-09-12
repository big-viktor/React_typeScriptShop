import React from 'react';
import './AddArtworkToolTip.css';

const AddArtworkToolTip: React.FC = () => (
  <div className="add-artwork-tool-tip-container">
    <div className="add-artwork-tool-tip-text-container">
      <p className="add-artwork-tool-tip-text-container-header">
        Pantone Values
      </p>
      <li>
        Use this tool to specify pantone values for colors that must be matched.
      </li>
      <li>
        Colors assigned here can later be referenced in when designning your
        products
      </li>
      <li className="add-artwork-tool-tip-text-container-header-color">
        $10 fee per color match
      </li>
    </div>
  </div>
);

export default AddArtworkToolTip;
